import {
  AfterViewChecked,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  HostListener,
  inject,
  OnInit,
  QueryList,
  ViewChildren,
} from '@angular/core';
import { CommonModule } from '@angular/common';

const DEPENDENCIES: Record<string, string[]> = {
  A: [],
  B: [],
  C: [],
  D: ['A', 'B'],
  E: ['B', 'C'],
  F: ['D', 'E'],
};

@Component({
  selector: 'lcd-static-diagram',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './static-diagram.component.html',
  styleUrls: ['./static-diagram.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StaticDiagramComponent implements OnInit, AfterViewChecked {
  private readonly elementRef = inject(ElementRef);
  private readonly cdr = inject(ChangeDetectorRef);

  @ViewChildren('depDiv') depDivs!: QueryList<ElementRef<HTMLDivElement>>;

  dependenciesByDepth: string[][] = [];
  arrowPaths?: string[];
  viewBox?: string;

  ngOnInit(): void {
    let depth = 0;
    let remainingDeps = Object.entries(DEPENDENCIES);
    while (remainingDeps.length) {
      this.dependenciesByDepth[depth] = [];
      remainingDeps = remainingDeps.filter(dep => {
        const [name, deps] = dep;
        if (deps.every(d => this.dependenciesByDepth.slice(0, -1).flat().includes(d))) {
          this.dependenciesByDepth[depth].push(name);
          return false;
        } else {
          return true;
        }
      });
      depth++;
    }
  }

  ngAfterViewChecked(): void {
    const containerRect = this.elementRef.nativeElement.getBoundingClientRect();
    const viewBox = `${containerRect.left} ${containerRect.top} ${containerRect.width} ${containerRect.height}`;

    if (this.viewBox !== viewBox) {
      this.viewBox = viewBox;

      const rectByName = new Map<string /*name*/, DOMRect>();
      this.depDivs.forEach(item => {
        const slug = item.nativeElement.getAttribute('data-name')!;
        const rect = item.nativeElement?.getBoundingClientRect();
        rectByName.set(slug, rect);
      });

      this.arrowPaths = [];
      for (const name of Object.keys(DEPENDENCIES)) {
        DEPENDENCIES[name]?.forEach(depName => {
          const startRect = rectByName.get(depName)!;
          const endRect = rectByName.get(name)!;
          const start = { x: startRect.left + startRect.width / 2, y: startRect.top + startRect.height };
          const end = { x: endRect.left + endRect.width / 2, y: endRect.top };
          const direction = start.x > end.x ? -1 : start.x === end.x ? 0 : 1;
          // start.x += (direction * startRect.width) / 6;
          // end.x -= (direction * endRect.width) / 6;

          // straight line
          this.arrowPaths!.push(`M ${start.x} ${start.y} L ${end.x} ${end.y}`);

          // cubic bezier curve
          // this.arrowPaths!.push(`M ${start.x} ${start.y} C ${start.x} ${end.y} ${end.x} ${start.y} ${end.x} ${end.y}`);

          // lighter curve
          // const middleVertical = (start.y + end.y) / 2;
          // this.arrowPaths!.push(
          //   `M ${start.x} ${start.y} C ${start.x} ${middleVertical} ${end.x} ${middleVertical} ${end.x} ${end.y}`,
          // );

          // lighter incidence
          // const deltaHorizontal = (start.x - end.x) / 3;
          // this.arrowPaths!.push(
          //   `M ${start.x} ${start.y}` +
          //     `C ${start.x - deltaHorizontal} ${end.y} ${end.x + deltaHorizontal} ${start.y} ${end.x} ${end.y}`,
          // );
        });
      }

      this.cdr.detectChanges();
    }
  }
  @HostListener('window:resize')
  resize(): void {
    // trigger the ngAfterViewChecked at each resize
  }
}
