import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-toggle',
  templateUrl: './toggle.component.html',
  styleUrls: ['./toggle.component.scss'],
})
export class ToggleComponent {
  value = false;
  @Output() toggleEmitter = new EventEmitter();
  changeBilling() {
    this.value = !this.value;
    console.log('toggle', this.value);
    this.toggleEmitter.emit(this.value);
  }
}
