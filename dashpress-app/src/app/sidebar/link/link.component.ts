import { Component, computed, input } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { Link } from './link.model';

@Component({
  selector: 'app-link',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './link.component.html',
  styleUrl: './link.component.css'
})
export class LinkComponent {
  link = input.required<Link>();
  routerLink = computed(() => '/' + this.link().routerLink)
}
