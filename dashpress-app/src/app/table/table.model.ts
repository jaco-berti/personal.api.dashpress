import { OrderTypeModel } from "../dashboard/setup/order-type/order-type.model";

export interface TableDataModel {
    obj: any[] | {},
    type: OrderTypeModel
}