import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class DataShearingService {
    toggleValue = new BehaviorSubject(
        JSON.parse(sessionStorage.getItem('toggleValue'))
    );
    form = new BehaviorSubject(null);
    navigated = new BehaviorSubject(false);
    choosenSubscription = new BehaviorSubject(null);
    value;
    constructor() {}
    toggle() {
        this.toggleValue.next(!this.toggleValue.value);
        sessionStorage.setItem('toggleValue', `${this.toggleValue}`);
    }
}
