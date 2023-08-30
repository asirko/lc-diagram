import { DiagramNode } from '../../features/05-diagram/diagram/diagram.store';
import { DiagramConst } from '../../features/05-diagram/diagram/diagram.const';

export interface Point {
  x: number;
  y: number;
}

export interface Segment {
  start: Point;
  end: Point;
}

export function isInRect(pointToTest: Point, diagonal: Segment): boolean {
  return (
    pointToTest.x >= Math.min(diagonal.start.x, diagonal.end.x) &&
    pointToTest.x <= Math.max(diagonal.start.x, diagonal.end.x) &&
    pointToTest.y >= Math.min(diagonal.start.y, diagonal.end.y) &&
    pointToTest.y <= Math.max(diagonal.start.y, diagonal.end.y)
  );
}

export function intersectionsWithSegmentAndCircle(segment: Segment, circle: Point, radius: number): Point[] {
  // https://stackoverflow.com/questions/1073336/circle-line-segment-collision-detection-algorithm

  if (segment.end.x === segment.start.x) {
    throw new Error('Not implemented');
  }

  // strait line formula y=ax+b
  const a = (segment.end.y - segment.start.y) / (segment.end.x - segment.start.x);
  const b = segment.start.y - a * segment.start.x;

  // (x−c)²+(y−d)²=r²
  // x²−2cx+c²+y²−2dy+d²−r²=0
  // x²−2cx+c²+(ax+b)²−2d(ax+b)+d²−r²=0
  // x²−2cx+c²+a²x²+2abx+b²−2dax−2db+d²−r²=0
  // x²(1+a²)−x(-2c + 2ab - 2da) + (c²+b²−2db+d²−r²)=0
  // a' = 1+a²
  const ap = 1 + a * a;
  // b' = 2ab−2c-2da
  const bp = 2 * a * b - 2 * circle.x - 2 * circle.y * a;
  // c' = c²+b²−2db+d²−r²
  const cp = circle.x ** 2 + b ** 2 - 2 * b * circle.y + circle.y ** 2 - radius ** 2;
  // delta = b'² - 4a'c'
  const delta = bp * bp - 4 * ap * cp;

  const intersections: Point[] = [];
  if (delta === 0) {
    // one intersection
    const x = -bp / (2 * ap);
    const y = a * x + b;
    if (isInRect({ x, y }, segment)) {
      intersections.push({ x, y });
    }
  } else if (delta > 0) {
    // two intersections
    const x1 = (-bp + Math.sqrt(delta)) / (2 * ap);
    const y1 = a * x1 + b;
    if (isInRect({ x: x1, y: y1 }, segment)) {
      intersections.push({ x: x1, y: y1 });
    }
    const x2 = (-bp - Math.sqrt(delta)) / (2 * ap);
    const y2 = a * x2 + b;
    if (isInRect({ x: x2, y: y2 }, segment)) {
      intersections.push({ x: x2, y: y2 });
    }
  }

  return intersections;
}

export function intersectionsBetween2Segments(segment1: Segment, segment2: Segment): Point | null {
  const denominator =
    (segment1.start.x - segment1.end.x) * (segment2.start.y - segment2.end.y) -
    (segment1.start.y - segment1.end.y) * (segment2.start.x - segment2.end.x);

  if (denominator === 0) {
    // Les segments sont parallèles ou colinéaires, pas d'intersection
    return null;
  }

  const t =
    ((segment1.start.x - segment2.start.x) * (segment2.start.y - segment2.end.y) -
      (segment1.start.y - segment2.start.y) * (segment2.start.x - segment2.end.x)) /
    denominator;
  const s =
    -(
      (segment1.start.x - segment1.end.x) * (segment1.start.y - segment2.start.y) -
      (segment1.start.y - segment1.end.y) * (segment1.start.x - segment2.start.x)
    ) / denominator;

  if (t >= 0 && t <= 1 && s >= 0 && s <= 1) {
    const intersectionX = segment1.start.x + t * (segment1.end.x - segment1.start.x);
    const intersectionY = segment1.start.y + t * (segment1.end.y - segment1.start.y);
    return { x: intersectionX, y: intersectionY };
  } else {
    // Les segments ne se croisent pas dans leurs plages définies
    return null;
  }
}

export function getTargetPoint(startNode: DiagramNode, endNode: DiagramNode): Point {
  if (startNode.x === endNode.x) {
    // Eliminate the special case that would induce a division by zero
    return {
      x: endNode.x + DiagramConst.RECT_WIDTH / 2,
      y: endNode.y + (startNode.y < endNode.y ? 0 : DiagramConst.RECT_HEIGHT),
    };
  }

  // is intersecting quater circle ?
  const segment = {
    start: { x: startNode.x + DiagramConst.RECT_WIDTH / 2, y: startNode.y + DiagramConst.RECT_HEIGHT / 2 },
    end: { x: endNode.x + DiagramConst.RECT_WIDTH / 2, y: endNode.y + DiagramConst.RECT_HEIGHT / 2 },
  };
  const topCircleCenter = endNode.y + DiagramConst.CIRCLE_RADIUS;
  const bottomCircleCenter = endNode.y + DiagramConst.RECT_HEIGHT - DiagramConst.CIRCLE_RADIUS;
  const leftCircleCenter = endNode.x + DiagramConst.CIRCLE_RADIUS;
  const rightCircleCenter = endNode.x + DiagramConst.RECT_WIDTH - DiagramConst.CIRCLE_RADIUS;

  const circleCenters = [
    { x: leftCircleCenter, y: topCircleCenter },
    { x: leftCircleCenter, y: bottomCircleCenter },
    { x: rightCircleCenter, y: topCircleCenter },
    { x: rightCircleCenter, y: bottomCircleCenter },
  ];

  const closestCircleIntersections = circleCenters
    .flatMap(circleCenter => intersectionsWithSegmentAndCircle(segment, circleCenter, DiagramConst.CIRCLE_RADIUS))
    .reduce(
      (closest, intersection) =>
        !closest || Math.abs(segment.start.x - intersection.x) < Math.abs(segment.start.x - closest.x)
          ? intersection
          : closest,
      null as Point | null,
    );
  if (closestCircleIntersections) {
    return closestCircleIntersections;
  }

  const topRect = endNode.y;
  const bottomRect = endNode.y + DiagramConst.RECT_HEIGHT;
  const leftRect = endNode.x;
  const rightRect = endNode.x + DiagramConst.RECT_WIDTH;

  // it is on straight a line !
  return (
    intersectionsBetween2Segments(segment, {
      start: { x: leftRect, y: topRect },
      end: { x: rightRect, y: topRect },
    }) ||
    intersectionsBetween2Segments(segment, {
      start: { x: leftRect, y: topRect },
      end: { x: leftRect, y: bottomRect },
    }) ||
    intersectionsBetween2Segments(segment, {
      start: { x: leftRect, y: bottomRect },
      end: { x: rightRect, y: bottomRect },
    }) ||
    (intersectionsBetween2Segments(segment, {
      start: { x: rightRect, y: topRect },
      end: { x: rightRect, y: bottomRect },
    }) as Point)
  );
}
