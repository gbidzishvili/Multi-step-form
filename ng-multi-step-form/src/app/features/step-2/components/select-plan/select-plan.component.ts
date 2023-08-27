import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PaginationService } from 'src/app/shared/services/pagination-service.service';

@Component({
    selector: 'app-select-plan',
    templateUrl: './select-plan.component.html',
    styleUrls: ['./select-plan.component.scss'],
})
export class SelectPlanComponent {
    clicked = false;
    subscriptionChoosen = null;
    constructor(
        public router: Router,
        public paginationService: PaginationService
    ) {}
    changeToggle(value) {
        console.log('select', value);
        this.clicked = value;
    }
    back() {
        this.paginationService.paginate(1);
    }
    next() {
        this.paginationService.paginate(3);
    }
    chooseSubscription(val) {
        localStorage.setItem('subscription', `${val}`);
        localStorage.getItem('subscription');
        this.subscriptionChoosen =
            this.subscriptionChoosen === localStorage.getItem('subscription')
                ? null
                : localStorage.getItem('subscription');
        console.log(
            this.subscriptionChoosen,
            localStorage.getItem('subscription')
        );
    }
}
