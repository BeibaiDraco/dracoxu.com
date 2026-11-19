import example from './module-example.json';

export const { switchNumber, lightNumber } = example;
export const ports = example.ports.flat();
const width = example.ports[0].length;
const height = example.ports.length;

// A square can straddle either edge of the periodic grid.
export const windows = ports.map((_, index) => {
  const row = Math.floor(index / width);
  const col = index % width;
  const right = (col + 1) % width;
  const below = (row + 1) % height;
  return [index, row * width + right, below * width + col, below * width + right];
});

export const initialWindow = windows.findIndex(corners => ports[corners[3]] === switchNumber);
export const signed = (value: number) => value > 0 ? '+' + value : String(value).replace('-', '−');

export function readModule(switchOn: boolean) {
  const signs = example.signsWhenOff.flat().map((sign, i) => switchOn && ports[i] === switchNumber ? -sign : sign);
  const products = windows.map(corners => corners.reduce((product, i) => product * signs[i], 1));
  const total = products.reduce((sum, product) => sum + product, 0);
  const lightSum = total * example.weight + example.otherModules + example.auxiliarySign;
  return { signs, products, total, lightSum };
}
