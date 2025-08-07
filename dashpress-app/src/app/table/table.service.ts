import { AcceptedDataModel } from '../app.model';
import { OrderTypeModel } from './../dashboard/setup/order-type/order-type.model';
import { Injectable, signal } from "@angular/core";
import { TableDataModel } from './table.model';

@Injectable({
    providedIn: 'root'
})
export class TableService {
    type = signal<OrderTypeModel>('list-objects');
    obj = signal<AcceptedDataModel>({});

    init(data: TableDataModel) {
        this.type.set(data.type);
        this.obj.set(data.obj);
    }

    get params(): any[] {
        switch(this.type()) {
            case 'matrix':
                return [];
            case 'object-list':
                return [];
            default:
                return Object.keys((this.obj() as any[])[0]);
        }
    }

    get transformed(): any[][] {
        let dataTransformed: any[][];

        switch(this.type()) {
            case 'matrix':
                dataTransformed = this.transformMatrix();
                break;
            case 'object-list':
                dataTransformed = this.transformObjectList();
                break;
            default:
                dataTransformed = this.transformListObjects();
                break;
        }

        return dataTransformed;
    }

    private transformMatrix(): any[][] {
        return [[]];
    }

    private transformObjectList(): any[][] {
        return [[]];
    }

    private transformListObjects(): any[][] {
        const objArr = this.obj() as any[];
        const data: any[][] = [];
        let i, count = 0;

        for(i = 0; i < objArr.length; i++, count = 0) {
            data[i] = []

            for(let j of Object.values(objArr[i])) {
                data[i][count] = j;
                count += 1;
            }
        }

        return data;
    }
}