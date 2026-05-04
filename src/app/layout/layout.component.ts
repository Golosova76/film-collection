import { Component, inject, signal } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { BreadcrumbsComponent } from './components/breadcrumbs/breadcrumbs.component';
import { ActivatedRoute, RouterOutlet } from '@angular/router';
import { BreadcrumbItem } from './model/breadcrumb.model';

@Component({
  selector: 'app-layout',
  imports: [HeaderComponent, FooterComponent, BreadcrumbsComponent, RouterOutlet],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss',
})
export class LayoutComponent {
  private readonly activatedRoute = inject(ActivatedRoute);

  public readonly breadcrumbs = signal<BreadcrumbItem[]>([]);

  public updateBreadcrumbs(): void {
    const currentBreadcrumb = this.getCurrentRouteBreadcrumb();

    if (!currentBreadcrumb) {
      this.breadcrumbs.set([]);
      return;
    }

    if (currentBreadcrumb === 'Home') {
      this.breadcrumbs.set([{ label: 'Home' }]);

      return;
    }

    this.breadcrumbs.set([{ label: 'Home', url: '/' }, { label: currentBreadcrumb }]);
  }

  private getCurrentRouteBreadcrumb(): string | null {
    const childRoute = this.activatedRoute.firstChild?.snapshot;
    const breadcrumb = childRoute?.data['breadcrumb'];

    return typeof breadcrumb === 'string' ? breadcrumb : null;
  }
}
