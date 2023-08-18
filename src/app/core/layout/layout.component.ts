import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { CodeReaderComponent } from '../../shared/components/code-reader/code-reader.component';

@Component({
  selector: 'lcd-layout',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive, CodeReaderComponent],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LayoutComponent {
  private route = inject(ActivatedRoute);

  readonly menu = this.route
    .routeConfig!.children!.filter(rc => rc.data)
    .map(rc => ({ path: rc.path, title: rc.data!['title'] }));
}
