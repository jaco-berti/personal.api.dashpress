import { Component, inject, input } from '@angular/core';
import { TitleComponent } from "../ui/texts/title/title.component";
import { TextComponent } from "../ui/texts/text/text.component";
import { ActivatedRoute, ActivatedRouteSnapshot, ResolveFn, RouterOutlet, RouterStateSnapshot } from "@angular/router";
import { DashboardService } from './dashboard.service';

@Component({
  selector: 'app-dashboard',
  imports: [TitleComponent, TextComponent, RouterOutlet],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  areDataEmpty = input<boolean>();
}

export const resolveAreDataEmpty: ResolveFn<boolean> = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
  const dashboardService = inject(DashboardService);
  return dashboardService.areDataEmpty();
}
