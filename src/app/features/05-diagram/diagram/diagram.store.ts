import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

interface Node {
  id: number;
  x: number;
  y: number;
  name: string;
}

const INITIAL_NODE = { id: 1, x: 0, y: 100, name: 'Node 1' };

@Injectable({
  providedIn: 'root',
})
export class DiagramStore {
  private readonly _nodes$ = new BehaviorSubject<Node[]>([INITIAL_NODE]);

  readonly nodes$ = this._nodes$.asObservable();

  constructor() {}

  getNodeSnapshot(nodeId: number): Node | undefined {
    return this._nodes$.getValue().find(node => node.id === nodeId);
  }

  putToLast(nodeId: number) {
    const nodes = this._nodes$.getValue();
    const node = nodes.find(node => node.id === nodeId);
    if (node) {
      this._nodes$.next([...nodes.filter(node => node.id !== nodeId), node]);
    }
  }

  updateNode(nodeId: number, partialNode: Partial<Node>) {
    this._nodes$.next(this._nodes$.getValue().map(node => (node.id === nodeId ? { ...node, ...partialNode } : node)));
  }

  addNode(node: Pick<Node, 'x' | 'y'>) {
    const id = Math.max(...this._nodes$.getValue().map(node => node.id)) + 1;
    this._nodes$.next([...this._nodes$.getValue(), { ...node, id, name: `Node ${id}` }]);
  }

  deleteNode(nodeId: number) {
    this._nodes$.next(this._nodes$.getValue().filter(node => node.id !== nodeId));
  }
}
