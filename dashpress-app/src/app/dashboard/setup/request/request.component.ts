import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TextComponent } from "../../../ui/texts/text/text.component";
import { InputOutlineComponent } from '../../../ui/inputs/input-outline/input-outline.component';
import { ActivatedRoute, Router } from '@angular/router';
import { ButtonComponent } from '../../../ui/buttons/button/button.component';
import { HttpClient } from '@angular/common/http';
import { OrderTypeModel } from '../order-type/order-type.model';
import { SetupService } from '../setup.service';

@Component({
  selector: 'app-request',
  imports: [TextComponent, InputOutlineComponent, ButtonComponent, FormsModule],
  templateUrl: './request.component.html',
  styleUrl: './request.component.css'
})
export class RequestComponent {
  url = signal<string>('');
  order: OrderTypeModel = 'list-objects';

  private http = inject(HttpClient);
  private setupService = inject(SetupService);
  private router = inject(ActivatedRoute);

  onConfirm() {
    this.http.get(this.url()).subscribe({
      next: (value) => {
        this.setupService.showTable(value, this.router);
      }
    })
  }
}
