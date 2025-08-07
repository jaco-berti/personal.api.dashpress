import { inject, Injectable, signal } from "@angular/core";
import { OrderTypeModel } from "./order-type/order-type.model";
import { TableDataModel } from "../../table/table.model";
import { AcceptedDataModel } from "../../app.model";
import { ActivatedRoute, Router } from "@angular/router";

@Injectable({
    providedIn: 'root'
})
export class SetupService {
    type = signal<OrderTypeModel>('list-objects');
    router = inject(Router);
    route = inject(ActivatedRoute);

    getData(obj: AcceptedDataModel): TableDataModel {
        return {obj, type: this.type()};
    }

    showTable(obj: AcceptedDataModel, route: ActivatedRoute) {
        this.router.navigate(['../table'], {
            relativeTo: route,
            queryParams: { data: JSON.stringify(this.getData(obj)) }
        })
    }
}