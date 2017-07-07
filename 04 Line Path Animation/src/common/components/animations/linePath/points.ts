export interface Point {
  x: number;
  y: number;
}

export let points: Point[] = [];

export const addPoint = (point: Point) => {
  if (!existPoint(point)) {
    points = [...points, point];
  }
};

const existPoint = (point: Point) => {
  const index = points.findIndex((p) => (
    p.x === point.x &&
    p.y === point.y
  ));

  return index > 0;
};
