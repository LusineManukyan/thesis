#!/usr/bin/env python3

import os
import sys

parser_path: str = "./src/file_parser"
translation_path: str = "./src/translation"
schema_creater_path: str = "./src/schema_creater"

def parse_command_line_argument() -> tuple[str, str, int]:
    """Parse command line arguments."""
    arguments: list[str] = sys.argv
    if len(arguments) != 3:
        print("Missing required argument {filename}.")
        return "", "", 1
    if arguments[1] == "schema":
        file_path: str = arguments[2]
        if not os.path.exists(file_path):
            print("Given path does not exists.")
            return "", "", 2
        return "schema", file_path, 0
    elif arguments[1] == "parser":
        file_path: str = arguments[2]
        if not os.path.exists(file_path):
            print("Given path does not exists.")
            return "", "", 2
        return "parser", file_path, 0
    else:
        print("Incorrect first argument.")
        return "", "", 1

def parser_process(file_path) -> int:
    ifc_to_json_path: str = parser_path + "/ifc_to_json.py"
    if not os.path.exists(ifc_to_json_path):
        print(f"Can't find '{ifc_to_json_path}'.")
        return 3
    session_creator_path: str = parser_path + "/create_session.mjs"
    if not os.path.exists(session_creator_path):
        print(f"Can't find '{session_creator_path}'.")
        return 4
    print("Running IFC to JSON converter.")
    if os.system(f"{ifc_to_json_path} {file_path}"):
        print("IFC to JSON converter exited with failure code.")
        return 5
    file_path = os.path.splitext(os.path.basename(file_path))[0]
    print("Running Session Creator.")
    if os.system(f"node {session_creator_path} {file_path}"):
        print("Session creator exited with failure code.")
        return 6
    return 0

def schema_process(file_path) -> int:
    translation_meta_path: str = translation_path + "/translation_meta.mjs"
    if not os.path.exists(translation_meta_path):
        print(f"Can't find '{translation_meta_path}'.")
        return 3
    print("Running Translation Meta to Js.")
    if os.system(f"node {translation_meta_path}"):
        print("Translation Mata to JS exited with failure code.")
        return 5

    translation_schema_path: str = translation_path + "/main.mjs"
    if not os.path.exists(translation_schema_path):
        print(f"Can't find '{translation_schema_path}'.")
        return 3
    file_name = os.path.splitext(os.path.basename(file_path))[0]
    print(f"Running Translation '{file_name}' Schema.")
    if os.system(f"node {translation_schema_path} {file_path}"):
        print("Translation Schema exited with failure code.")
        return 5

    main_path: str = schema_creater_path + "/main.mjs"
    if not os.path.exists(main_path):
        print(f"Can't find '{main_path}'.")
        return 3
    print("Running Create Mani application.")
    if os.system(f"node {main_path}"):
        print("Create Mani App exited with failure code.")
        return 5
    return 0

def main() -> int:
    """Start point."""
    process, file_path, status = parse_command_line_argument()
    if status:
        return status
    if process == "parser":
        status = parser_process(file_path)
        if status:
            return status
    else:
        status = schema_process(file_path)
        if status:
            return status
    return 0

if "__main__" == __name__:
    sys.exit(main())
