#!/usr/bin/env python3
"""Module used to convert IFC to JSON."""

import os
import json
import sys
import re

IFC_NAME_REGEX: str = r"^IFC\w+\("

def is_number(argument) -> int|float:
    """Check is given argument a number."""
    if argument.isnumeric():
        argument = int(argument)
    elif "." in argument:
        try:
            argument = float(argument)
        except ValueError:
            pass
    return argument

def correct_types(arguments: list[str]) -> dict:
    """Correct parsed arguments types."""
    corrected_arguments: dict = {}
    for index, argument in enumerate(arguments):
        if argument == "$":
            argument = None
        elif "'" in argument:
            argument = argument.replace("'", "")
        elif argument[0] == "(" and argument[-1] == ")":
            items: list[str] = argument[1:-1].split(",")
            argument = [is_number(item) for item in items]
        elif re.search(IFC_NAME_REGEX, argument):
            argument = parse_info(argument)
        if isinstance(argument, str):
            argument = is_number(argument)
        corrected_arguments[index] = argument
    return corrected_arguments

def parse_info(info: str) -> dict:
    """Parse info part of IFC line."""
    result: object = re.search(IFC_NAME_REGEX, info)
    if not result:
        print("Failed to find IFC class name. Aborting...")
        sys.exit(1)
    name_end_index = result.end() - 1
    name: str = info[:name_end_index]
    info = info[name_end_index+1:-1]
    arguments: list[str] = []
    sep: str = ","
    argument: str = ""
    index: int = 0
    while index != len(info):
        if info[index] == "(":
            while info[index] != ")":
                argument += info[index]
                index += 1
            else:
                argument += info[index]
        elif info[index] == sep:
            arguments.append(argument)
            argument = ""
        else:
            argument += info[index]
        index += 1
    else:
        arguments.append(argument)
    return {name: correct_types(arguments)}

def parse_line(file_data: list[str]) -> dict:
    """Parse IFC line."""
    file_data = file_data[file_data.index("DATA;")+1:]
    file_data = file_data[:file_data.index("ENDSEC;")]
    converted_data: dict = {}
    for line in file_data:
        index, info = line.split("= ")
        info = info[:-1]
        if index not in converted_data:
            converted_data[index] = {}
        converted_data[index] = parse_info(info)
    return converted_data

def parse_command_line_argument() -> tuple[str, int]:
    """Parse command line arguments."""
    arguments: list[str] = sys.argv
    if len(arguments) != 2:
        print("Wrong argument passed.")
        return "", 1
    file_path: str = arguments[1]
    if not os.path.exists(file_path):
        print("Given path does not exists.")
        return "", 2
    return file_path, 0

def main() -> int:
    """Start point."""
    file_path, status = parse_command_line_argument()
    if status:
        return status
    file_data: list[str] = []
    with open(file_path) as f:
        file_data = [line.replace("\n", "") for line in f.readlines()]
    file_header: list[str] = file_data[file_data.index("HEADER;")+1:file_data.index("ENDSEC;")]
    header_content: str = "".join(file_header)
    schema_name: str = "IFC4"
    match = re.search(r"FILE_SCHEMA\(\(\s*'([^']+)'", header_content)
    if match:
        schema_name = match.group(1)
    converted_header: dict = {"name" : file_path,
                              "schema" : schema_name,
                              "description" : header_content}
    path: str = "file_data/";
    path += f".{os.sep}{os.path.splitext(os.path.basename(file_path))[0]}"
    os.makedirs(path, exist_ok=True)
    with open(f"{path}{os.sep}header.json", "w") as f:
        json.dump(converted_header, f, indent=4)
    converted_data: dict = parse_line(file_data)
    with open(f"{path}{os.sep}data.json", "w") as f:
        json.dump(converted_data, f, indent=4)
    return 0

if "__main__" == __name__:
    sys.exit(main())
