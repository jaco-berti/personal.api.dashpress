import { Component, computed, input } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { SidebarLink } from './sidebar-link.model';
import { TextLinkComponent } from '../../ui/texts/text-link/text-link.component';

@Component({
  selector: 'app-sidebar-link',
  imports: [RouterLink, RouterLinkActive, TextLinkComponent],
  templateUrl: './sidebar-link.component.html',
  styleUrl: './sidebar-link.component.css'
})
export class SidebarLinkComponent {
  link = input.required<SidebarLink>();
  routerLink = computed(() => '/' + this.link().routerLink)
}
