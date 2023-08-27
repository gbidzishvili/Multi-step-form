import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class DataShearingService {
    toggleValue = new BehaviorSubject(
        JSON.parse(sessionStorage.getItem('toggleValue'))
    );
    constructor() {}
    toggle() {
        this.toggleValue.next(!this.toggleValue.value);
        sessionStorage.setItem('toggleValue', `${this.toggleValue}`);
    }
}
