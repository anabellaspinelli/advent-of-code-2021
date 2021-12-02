import { readFileSync } from 'fs';
import path from 'path/posix';

export function parseInput(inputFilePath: string): number[] {
  return readFileSync(path.join(__dirname, inputFilePath))
    .toString()
    .split(/\n/)
    .map((item) => parseInt(item, 10));
}
