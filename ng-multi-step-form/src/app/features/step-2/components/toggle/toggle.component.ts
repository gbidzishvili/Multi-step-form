import { Component, EventEmitter, Output } from '@angular/core';

@Component({
    selector: 'app-toggle',
    templateUrl: './toggle.component.html',
    styleUrls: ['./toggle.component.scss'],
})
export class ToggleComponent {
    value = JSON.parse(sessionStorage.getItem('toggleValue'));
    @Output() toggleEmitter = new EventEmitter();
    changeBilling() {
        this.value = !this.value;
        sessionStorage.setItem('toggleValue', `${this.value}`);
        this.toggleEmitter.emit(this.value);
    }
}
