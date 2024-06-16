import fs from 'fs';
import path from 'path';
import chalk from 'chalk';

const __dirname = path.dirname(new URL(import.meta.url).pathname);

const logDir = path.join(__dirname, 'logs');
if (!fs.existsSync(logDir)) {
  fs.mkdirSync(logDir);
}

const logFileName = `${new Date().toISOString().slice(0, 10)}.log`;
const logFilePath = path.join(logDir, logFileName);

function logger(type, message) {
  const timestamp = new Date().toLocaleString();
  const formattedMessage = `[${timestamp}] ${message}`;

  switch (type) {
    case 'error':
      console.error(`[${timestamp}] `, chalk.red(message));
      break;
    case 'warn':
      console.warn(`[${timestamp}] `, chalk.yellow(message));
      break;
    case 'info':
      console.info(`[${timestamp}] `, chalk.white(message));
      break;
    case 'debug':
      console.debug(`[${timestamp}] `, chalk.cyan(message));
      break;
    default:
      console.log(`[${timestamp}] `, chalk.green(message));
      break;
  }
}

export default logger;

