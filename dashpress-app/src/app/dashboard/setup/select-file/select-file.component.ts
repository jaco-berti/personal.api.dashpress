import { Component } from '@angular/core';
import { TextComponent } from "../../../ui/texts/text/text.component";
import { ButtonOutlineComponent } from '../../../ui/buttons/button-outline/button-outline.component';

@Component({
  selector: 'app-select-file',
  imports: [TextComponent, ButtonOutlineComponent],
  templateUrl: './select-file.component.html',
  styleUrl: './select-file.component.css'
})
export class SelectFileComponent {

}
