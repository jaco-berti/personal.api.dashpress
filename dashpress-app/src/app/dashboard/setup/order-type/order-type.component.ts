import { Component, input } from '@angular/core';
import { TextComponent } from "../../../ui/texts/text/text.component";
import { ButtonOutlineComponent } from '../../../ui/buttons/button-outline/button-outline.component';
import { RouterLink } from '@angular/router';
import { orderTypes, types as typesList } from './order-type.model';

@Component({
  selector: 'app-select-type',
  imports: [TextComponent, ButtonOutlineComponent, RouterLink],
  templateUrl: './order-type.component.html',
  styleUrl: './order-type.component.css'
})
export class OrderTypeComponent {
  types?: orderTypes[] = typesList;
  order = input<orderTypes>();
}
