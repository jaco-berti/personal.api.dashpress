import { Component, OnDestroy, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router'
import { LinkComponent } from "./link/link.component";
import { Link } from './link/link.model';
import { sidebarLinks } from '../app.model';

@Component({
  selector: 'app-sidebar',
  imports: [RouterOutlet, LinkComponent],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
  links = signal<Link[]>(sidebarLinks);
}
