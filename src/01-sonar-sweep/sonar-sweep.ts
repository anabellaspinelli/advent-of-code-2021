import { parseInput } from './utils';

export function sonarSweepV1(input: number[]): number {
  let increments = 0;

  input.forEach((depth, index) => {
    if (index === 0) return;

    const prevNumericDepth = input[index - 1];

    if (depth > prevNumericDepth) {
      increments++;
    }
  });

  return increments;
}

export function sonarSweepV2(input: number[]): number {
  let increments = 0;

  input.forEach((depth, index) => {
    if (index < 2) return;

    const prevNumericDepth = input[index - 1];
    const prevPrevNumericDepth = input[index - 2];
    const nextNumericDepth = input[index + 1];

    const prevWindowSum = prevPrevNumericDepth + prevNumericDepth + depth;
    const currentWindowSum = prevNumericDepth + depth + nextNumericDepth;

    if (currentWindowSum > prevWindowSum) {
      increments++;
    }
  });

  return increments;
}

const input = parseInput('/input.txt');

console.log('Problem 1:', sonarSweepV1(input));
console.log('Problem 2:', sonarSweepV2(input));
