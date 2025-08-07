import { Component, input, signal } from '@angular/core';
import { TextLinkComponent } from '../../ui/texts/text-link/text-link.component';
import { TextComponent } from '../../ui/texts/text/text.component';

@Component({
  selector: 'app-table-row',
  imports: [TextLinkComponent, TextComponent],
  templateUrl: './table-row.component.html',
  styleUrl: './table-row.component.css'
})
export class TableRowComponent {
  data = input.required<any[]>();
  isFirst = input<boolean>(false);
  isLast = input<boolean>(false);
  isSecondary = input<boolean>(false);
  iconsOpacity = signal<0 | 1>(0);
}
