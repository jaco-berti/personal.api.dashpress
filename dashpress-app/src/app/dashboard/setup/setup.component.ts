import { OrderTypeModel } from './order-type/order-type.model';
import { Component, inject, signal } from '@angular/core';
import { SelectFileComponent } from "./select-file/select-file.component";
import { OrderTypeComponent } from "./order-type/order-type.component";
import { RequestComponent } from "./request/request.component";
import { TextLinkComponent } from '../../ui/texts/text-link/text-link.component';
import { ActivatedRoute } from '@angular/router';
import { SetupService } from './setup.service';

@Component({
  selector: 'app-setup',
  imports: [SelectFileComponent, OrderTypeComponent, RequestComponent,TextLinkComponent],
  templateUrl: './setup.component.html',
  styleUrl: './setup.component.css'
})
export class SetupComponent {
  private setupService = inject(SetupService);
  private route = inject(ActivatedRoute);
  
  ngOnInit() {
    this.route.queryParams.subscribe({
      next: (value) => {
        this.setupService.type.set(value['order'])
      }
    });
  }
}
