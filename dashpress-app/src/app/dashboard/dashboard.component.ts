import { Component } from '@angular/core';
import { TitleComponent } from "../ui/texts/title/title.component";
import { TextComponent } from "../ui/texts/text/text.component";
import { RouterOutlet } from "@angular/router";

@Component({
  selector: 'app-dashboard',
  imports: [TitleComponent, TextComponent, RouterOutlet],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

}
