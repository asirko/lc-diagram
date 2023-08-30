import { ChangeDetectionStrategy, Component, inject, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DiagramStore } from '../diagram.store';
import { combineLatest, distinctUntilChanged, map, Observable } from 'rxjs';
import { DiagramConst } from '../diagram.const';
import { getTargetPoint } from '../../../../shared/utils/geometry.utils';

@Component({
  selector: '[lcdArrow]',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './arrow.component.svg',
  styleUrls: ['./arrow.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ArrowComponent implements OnInit {
  private readonly store = inject(DiagramStore);

  @Input({ required: true }) arrowId!: number;

  path$!: Observable<string>;

  ngOnInit(): void {
    const arrow = this.store.getArrowSnapshot(this.arrowId);

    this.path$ = combineLatest([this.store.getNode$(arrow.start), this.store.getNode$(arrow.end)]).pipe(
      map(([startNode, endNode]) => {
        const centerStart = {
          x: startNode.x + DiagramConst.RECT_WIDTH / 2,
          y: startNode.y + DiagramConst.RECT_HEIGHT / 2,
        };
        const targetEnd = getTargetPoint(startNode, endNode);

        return `M ${centerStart.x} ${centerStart.y} ` + `L ${targetEnd?.x || 0} ${targetEnd?.y || 0}`;
      }),
      distinctUntilChanged(),
    );
  }
}
