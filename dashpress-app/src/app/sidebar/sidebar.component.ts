import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router'
import { SidebarLinkComponent } from "./sidebar-link/sidebar-link.component";
import { SidebarLink } from './sidebar-link/sidebar-link.model';
import { sidebarLinks } from './sidebar.model';

@Component({
  selector: 'app-sidebar',
  imports: [RouterOutlet, SidebarLinkComponent],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
  links = signal<SidebarLink[]>(sidebarLinks);
}
