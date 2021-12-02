import { formatInput } from '../utils';

function sonarSweepV1(input: number[]): number {
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

const input = formatInput(__dirname, '/input.txt');
const numericInput = input.map((item) => parseInt(item, 10));

console.log('Problem 1:', sonarSweepV1(numericInput));
console.log('Problem 2:', sonarSweepV2(numericInput));
