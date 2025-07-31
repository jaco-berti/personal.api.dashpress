import { Component, DestroyRef, ElementRef, inject, viewChild } from '@angular/core';
import { ButtonOutlineComponent } from '../../ui/buttons/button-outline/button-outline.component';
import { TextComponent } from "../../ui/texts/text/text.component";
import { SelectFileComponent } from "./select-file/select-file.component";
import { OrderTypeComponent } from "./order-type/order-type.component";

@Component({
  selector: 'app-setup',
  imports: [SelectFileComponent, OrderTypeComponent],
  templateUrl: './setup.component.html',
  styleUrl: './setup.component.css'
})
export class SetupComponent {
  private fileData?: unknown;
  private inputFile = viewChild<ElementRef<HTMLInputElement>>('inputFile');

  ngOnInit() {
    this.inputFile()?.nativeElement.addEventListener('change', () => {
      const file = this.inputFile()?.nativeElement.files![0];

      if (file) {
        const reader = new FileReader();
        reader.onload = (e) => {
          try {
            this.fileData = JSON.parse(e.target?.result as string);
            console.log(this.fileData);
          } catch (err) {
            alert('Error parsing JSON file.');
          }
        };
        reader.readAsText(file);
      }
    })
  }
}
