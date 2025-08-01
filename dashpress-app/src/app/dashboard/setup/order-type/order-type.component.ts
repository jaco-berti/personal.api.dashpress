import { Component, DestroyRef, inject, signal } from '@angular/core';
import { TextComponent } from "../../../ui/texts/text/text.component";
import { ButtonOutlineComponent } from '../../../ui/buttons/button-outline/button-outline.component';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { orderTypes, types as typesList } from './order-type.model';
import { DropdownComponent } from "../../../ui/buttons/dropdown/dropdown.component";

@Component({
  selector: 'app-select-type',
  imports: [TextComponent, RouterLink, DropdownComponent],
  templateUrl: './order-type.component.html',
  styleUrl: './order-type.component.css'
})
export class OrderTypeComponent {
  types = signal<orderTypes[]>(typesList);
  order: orderTypes = 'list-objects';
  
  private activatedRoute = inject(ActivatedRoute);
  private destroyRef = inject(DestroyRef);

  ngOnInit() {
    const sub = this.activatedRoute.queryParams.subscribe({
      next: (value) => this.order = !value['order'] ? 'list-objects' : value['order']
    });

    this.destroyRef.onDestroy(() => sub.unsubscribe());
  }
}
