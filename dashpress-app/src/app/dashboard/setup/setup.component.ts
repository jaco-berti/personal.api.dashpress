import { Component, ElementRef, inject, input, viewChild } from '@angular/core';
import { SelectFileComponent } from "./select-file/select-file.component";
import { OrderTypeComponent } from "./order-type/order-type.component";
import { RequestComponent } from "./request/request.component";
import { TextLinkComponent } from '../../ui/texts/text-link/text-link.component';
import { DashboardService } from '../dashboard.service';

@Component({
  selector: 'app-setup',
  imports: [SelectFileComponent, OrderTypeComponent, RequestComponent,TextLinkComponent],
  templateUrl: './setup.component.html',
  styleUrl: './setup.component.css'
})
export class SetupComponent {
  private inputFile = viewChild<ElementRef<HTMLInputElement>>('inputFile');
  private dashboardService = inject(DashboardService);
  areDataEmpty = input<boolean>();

  ngOnInit() {
    this.inputFile()?.nativeElement.addEventListener('change', () => {
      const file = this.inputFile()?.nativeElement.files![0];

      if (file) {
        const reader = new FileReader();
        reader.onload = (e) => {
          try {
            this.dashboardService.data.set(
              JSON.parse(e.target?.result as string)
            );
          } catch (err) {
            alert('Error parsing JSON file.');
          }
        };
        reader.readAsText(file);
      }
    })
  }
}
