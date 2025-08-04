import { Injectable, signal } from "@angular/core";
import { AcceptedDataModel } from "../app.model";

@Injectable({
    providedIn: 'root'
})
export class DashboardService {
    public data = signal<AcceptedDataModel>({});

    areDataEmpty() {
        let count = 0;

        const currentData = this.data();
        if (Array.isArray(currentData)) {
            count = currentData.length;
        } else {
            for (let key in currentData) {
                if (currentData.hasOwnProperty(key)) {
                    count++;
                }
            }
        }
        
        return count === 0;
    }
}