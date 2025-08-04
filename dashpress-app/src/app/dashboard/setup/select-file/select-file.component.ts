import { Component, DestroyRef, inject } from '@angular/core';
import { TextComponent } from "../../../ui/texts/text/text.component";
import { ButtonOutlineComponent } from '../../../ui/buttons/button-outline/button-outline.component';
import { TableDataModel } from '../../../table/table.model';
import { ActivatedRoute, Router } from '@angular/router';
import { OrderTypeModel } from '../order-type/order-type.model';

@Component({
  selector: 'app-select-file',
  imports: [TextComponent, ButtonOutlineComponent],
  templateUrl: './select-file.component.html',
  styleUrl: './select-file.component.css'
})
export class SelectFileComponent {
  order: OrderTypeModel = 'list-objects';
  fileData: TableDataModel = {type: this.order, obj: {}};

  private router = inject(Router);
  private activatedRoute = inject(ActivatedRoute);
  private destroyRef = inject(DestroyRef);

  readFirstFileContent(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      const file = input.files[0];
      const reader = new FileReader();
      reader.onload = () => {
        this.fileData.obj = JSON.parse(reader.result as string);
        this.fileData.type = this.order;
        
        this.router.navigate(['../table'], {
          queryParams: {data: JSON.stringify(this.fileData)},
          relativeTo: this.activatedRoute
        });
      };
      reader.readAsText(file);
    }
  }

  ngOnInit() {
    const sub = this.activatedRoute.queryParams.subscribe({
      next: (value) => this.order = !value['order'] ? 'list-objects' : value['order']
    });

    this.destroyRef.onDestroy(() => sub.unsubscribe());
  }
}
