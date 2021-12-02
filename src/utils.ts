import { readFileSync } from 'fs';
import path from 'path/posix';

export function formatInput(dirname: string, inputFilePath: string): string[] {
  return readFileSync(path.join(dirname, inputFilePath)).toString().split(/\n/);
}
