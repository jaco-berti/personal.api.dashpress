import { Component, inject, input } from '@angular/core';
import { TableDataModel } from './table.model';
import { TableService } from './table.service';

@Component({
  selector: 'app-table',
  imports: [],
  templateUrl: './table.component.html',
  styleUrl: './table.component.css'
})
export class TableComponent { 
  readonly data = input<string>();
  private tableService = inject(TableService);

  ngOnInit() {
    const dataTemp: TableDataModel = JSON.parse(this.data() as string);
    this.tableService.obj.set(dataTemp.obj);
    this.tableService.type.set(dataTemp.type);
  }
}
