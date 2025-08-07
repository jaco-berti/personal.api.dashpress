import { Component, DestroyRef, inject } from '@angular/core';
import { TextComponent } from "../../../ui/texts/text/text.component";
import { TableDataModel } from '../../../table/table.model';
import { ActivatedRoute, Router } from '@angular/router';
import { OrderTypeModel } from '../order-type/order-type.model';
import { ButtonComponent } from '../../../ui/buttons/button/button.component';
import { SetupService } from '../setup.service';

@Component({
  selector: 'app-select-file',
  imports: [TextComponent, ButtonComponent],
  templateUrl: './select-file.component.html',
  styleUrl: './select-file.component.css'
})
export class SelectFileComponent {
  private setupService = inject(SetupService);
  private router = inject(ActivatedRoute);

  readFirstFileContent(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      const file = input.files[0];
      const reader = new FileReader();

      reader.onload = () => {
        const obj = JSON.parse(reader.result as string);
        this.setupService.showTable(obj, this.router);
      };

      reader.readAsText(file);
    }
  }
}
