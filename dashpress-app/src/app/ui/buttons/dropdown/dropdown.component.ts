import { Component, input, output } from '@angular/core';
import { ButtonOutlineComponent } from '../button-outline/button-outline.component';

@Component({
  selector: 'app-dropdown',
  imports: [ButtonOutlineComponent],
  templateUrl: './dropdown.component.html',
  styleUrl: './dropdown.component.css'
})
export class DropdownComponent {
  items = input.required<any[]>();
  text = input.required();
  textChange = output();

  onSelectItem(item: any) {
    this.textChange.emit(item);
  }
}
