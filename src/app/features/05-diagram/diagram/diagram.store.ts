import { Injectable } from '@angular/core';
import { BehaviorSubject, distinctUntilChanged, filter, map, Observable } from 'rxjs';
import { Point } from '../../../shared/utils/geometry.utils';

export interface DiagramNode {
  id: number;
  x: number;
  y: number;
  name: string;
}

export interface DiagramArrow {
  id: number;
  start: number; // nodeId
  end: number; // nodeId
}

export interface DiagramConfig {
  offset: Point;
  zoom: number;
}

const INITIAL_NODE = { id: 1, x: 0, y: 100, name: 'Node 1' };

@Injectable({
  providedIn: 'root',
})
export class DiagramStore {
  private readonly _nodes$ = new BehaviorSubject<DiagramNode[]>([INITIAL_NODE]);
  readonly nodes$ = this._nodes$.asObservable();

  private readonly _arrows$ = new BehaviorSubject<DiagramArrow[]>([]);
  readonly arrows$ = this._arrows$.asObservable();

  private readonly _config$ = new BehaviorSubject<DiagramConfig>({ offset: { x: -10, y: -10 }, zoom: 1 });
  readonly config$ = this._arrows$.asObservable();

  getNodeSnapshot(nodeId: number): DiagramNode {
    return this._nodes$.getValue().find(node => node.id === nodeId)!;
  }

  getNode$(nodeId: number): Observable<DiagramNode> {
    return this._nodes$.pipe(
      map(nodes => nodes.find(node => node.id === nodeId)),
      filter(node => !!node),
      distinctUntilChanged(),
    ) as unknown as Observable<DiagramNode>;
  }

  putNodeToLast(nodeId: number) {
    const nodes = this._nodes$.getValue();
    const node = nodes.find(node => node.id === nodeId);
    if (node) {
      this._nodes$.next([...nodes.filter(node => node.id !== nodeId), node]);
    }
  }

  updateNode(nodeId: number, partialNode: Partial<DiagramNode>) {
    this._nodes$.next(this._nodes$.getValue().map(node => (node.id === nodeId ? { ...node, ...partialNode } : node)));
  }

  addNode(node: Pick<DiagramNode, 'x' | 'y'>, sourceNodeId: number) {
    const id = Math.max(0, ...this._nodes$.getValue().map(node => node.id)) + 1;
    this._nodes$.next([...this._nodes$.getValue(), { ...node, id, name: `Node ${id}` }]);
    this.addArrow({ start: sourceNodeId, end: id });
  }

  deleteNode(nodeId: number) {
    this._arrows$.next(this._arrows$.getValue().filter(arrow => arrow.start !== nodeId && arrow.end !== nodeId));
    this._nodes$.next(this._nodes$.getValue().filter(node => node.id !== nodeId));
  }

  addArrow(arrow: Pick<DiagramArrow, 'start' | 'end'>) {
    const id = Math.max(0, ...this._arrows$.getValue().map(arrow => arrow.id)) + 1;
    this._arrows$.next([...this._arrows$.getValue(), { ...arrow, id }]);
  }

  getArrowSnapshot(arrowId: number): DiagramArrow {
    return this._arrows$.getValue().find(arrow => arrow.id === arrowId)!;
  }

  deleteArrow(arrowId: number) {
    this._arrows$.next(this._arrows$.getValue().filter(arrow => arrow.id !== arrowId));
  }

  getConfigSnapshot(): DiagramConfig {
    return this._config$.getValue();
  }

  updateConfig(param: Partial<DiagramConfig>) {
    this._config$.next({ ...this._config$.getValue(), ...param });
  }

  center() {
    // prettier-ignore
    const firstNode = this._nodes$
      .getValue()
      .reduce((leftest, node) => (!leftest || node.x < leftest.x ? node : leftest), null as Point | null)
      || { x: 0, y: 0, };
    this.updateConfig({ offset: { x: firstNode.x - 10, y: firstNode.y - 100 } });
  }
}
