import { Component, computed, input, signal } from '@angular/core';
import { TableService } from './table.service';
import { TableRowComponent } from "./table-row/table-row.component";

@Component({
  selector: 'app-table',
  imports: [TableRowComponent],
  templateUrl: './table.component.html',
  styleUrl: './table.component.css'
})
export class TableComponent { 
  readonly data = input<string>();
  private tableService = new TableService();

  tableLength = computed(() => this.tableService.transformed.length);
  params = computed(() => this.tableService.params);
  arrays = computed(() => this.tableService.transformed);

  ngOnInit() {
    this.tableService.init(JSON.parse(this.data() as string));
  }
}
