import { Component } from '@angular/core';

@Component({
    selector: 'app-steps',
    templateUrl: './steps.component.html',
    styleUrls: ['./steps.component.scss'],
})
export class StepsComponent {
    pages = [1, 2, 3, 4];
    currentPage = 1;
    ngOnInit() {}
    changePage(page) {
        this.currentPage = page;
    }
}
