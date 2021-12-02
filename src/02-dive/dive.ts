import { formatInput } from '../utils';

function diveV1(input: string[][]): number {
  let depth = 0;
  let hPosition = 0;

  input.forEach(([direction, amount]) => {
    const numericAmount = parseInt(amount, 10);

    switch (direction) {
      case 'forward':
        hPosition += numericAmount;
        break;

      case 'down':
        depth += numericAmount;
        break;

      case 'up':
        depth -= numericAmount;
        break;

      default:
        break;
    }
  });

  return depth * hPosition;
}

function diveV2(input: string[][]): number {
  let depth = 0;
  let hPosition = 0;
  let aim = 0;

  input.forEach(([direction, amount]) => {
    const numericAmount = parseInt(amount, 10);

    switch (direction) {
      case 'forward':
        hPosition += numericAmount;
        depth += aim * numericAmount;

        break;

      case 'down':
        aim += numericAmount;

        break;

      case 'up':
        aim -= numericAmount;

        break;

      default:
        break;
    }
  });

  return depth * hPosition;
}

const input = formatInput(__dirname, '/input.txt').map((line) => {
  const [direction, amount] = line.split(' ');

  return [direction, amount];
});

console.log('Problem 1:', diveV1(input));
console.log('Problem 1:', diveV2(input));
