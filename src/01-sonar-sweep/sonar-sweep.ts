import { readFileSync } from 'fs';
import path from 'path/posix';

export function sonarSweepV1(input: string[]): number {
  let increments = 0;

  input.forEach((depth, index) => {
    if (index === 0) return;

    const numericDepth = parseInt(depth, 10);
    const prevNumericDepth = parseInt(input[index - 1], 10);

    if (numericDepth > prevNumericDepth) {
      increments++;
    }
  });

  return increments;
}

export function sonarSweepV2(input: string[]): number {
  let increments = 0;

  input.forEach((depth, index) => {
    if (index < 2) return;

    const numericDepth = parseInt(depth, 10);
    const prevNumericDepth = parseInt(input[index - 1], 10);
    const prevPrevNumericDepth = parseInt(input[index - 2], 10);
    const nextNumericDepth = parseInt(input[index + 1], 10);

    const prevWindowSum =
      prevPrevNumericDepth + prevNumericDepth + numericDepth;
    const currentWindowSum = prevNumericDepth + numericDepth + nextNumericDepth;

    if (currentWindowSum > prevWindowSum) {
      increments++;
    }
  });

  return increments;
}

const input = readFileSync(path.join(__dirname, '/input.txt'))
  .toString()
  .split(/\n/);

console.log(sonarSweepV1(input));
console.log(sonarSweepV2(input));
