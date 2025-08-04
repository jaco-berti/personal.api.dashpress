import { AcceptedDataModel } from '../app.model';
import { OrderTypeModel } from './../dashboard/setup/order-type/order-type.model';
import { Injectable, signal } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class TableService {
    type = signal<OrderTypeModel>('list-objects');
    obj = signal<AcceptedDataModel>({});
}