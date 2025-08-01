import { Component } from '@angular/core';
import { TextComponent } from "../../../ui/texts/text/text.component";
import { InputOutlineComponent } from '../../../ui/inputs/input-outline/input-outline.component';
import { ButtonOutlineComponent } from '../../../ui/buttons/button-outline/button-outline.component';

@Component({
  selector: 'app-request',
  imports: [TextComponent, InputOutlineComponent, ButtonOutlineComponent],
  templateUrl: './request.component.html',
  styleUrl: './request.component.css'
})
export class RequestComponent {

}
