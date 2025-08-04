import { Component, input } from '@angular/core';
import { TableDataModel } from './table.model';

@Component({
  selector: 'app-table',
  imports: [],
  templateUrl: './table.component.html',
  styleUrl: './table.component.css'
})
export class TableComponent {
  data = input<TableDataModel>();
}
