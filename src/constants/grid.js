import {rem} from 'rn-units';

export const cellSize = rem(15);

export const generateGrid = (width, height, size) => {
  const grid = [];

  for (let y = 0; y < height; y++) {
    grid[y] = [];
    for (let x = 0; x < width; x++) {
      const x1 = x * size;
      const y1 = y * size;
      const x2 = x1 + size;
      const y2 = y1 + size;

      grid[y][x] = {
        x1,
        y1,
        x2,
        y2,
        width: size,
        height: size,
        center: {
          x: x1 + size / 2,
          y: y1 + size / 2,
        },
      };
    }
  }

  return grid;
};

export default generateGrid(20, 20, cellSize);
