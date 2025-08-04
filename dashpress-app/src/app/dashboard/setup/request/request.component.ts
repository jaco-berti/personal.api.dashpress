import { Component } from '@angular/core';
import { TextComponent } from "../../../ui/texts/text/text.component";
import { InputOutlineComponent } from '../../../ui/inputs/input-outline/input-outline.component';
import { ButtonOutlineComponent } from '../../../ui/buttons/button-outline/button-outline.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-request',
  imports: [TextComponent, InputOutlineComponent, ButtonOutlineComponent, RouterLink],
  templateUrl: './request.component.html',
  styleUrl: './request.component.css',
})
export class RequestComponent {

}
