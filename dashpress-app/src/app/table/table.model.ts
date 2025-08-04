import { AcceptedDataModel } from "../app.model";
import { OrderTypeModel } from "../dashboard/setup/order-type/order-type.model";

export interface TableDataModel {
    obj: AcceptedDataModel,
    type: OrderTypeModel
}

export function tableDataModel(): TableDataModel {
    return {obj: {}, type: 'list-objects'}
}