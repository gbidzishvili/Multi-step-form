import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PaginationService } from 'src/app/shared/services/pagination-service.service';

@Component({
    selector: 'app-select-plan',
    templateUrl: './select-plan.component.html',
    styleUrls: ['./select-plan.component.scss'],
})
export class SelectPlanComponent {
    clicked = false;
    subscriptionChoosen = sessionStorage.getItem('subscription');
    constructor(
        public router: Router,
        public paginationService: PaginationService,
        public route: ActivatedRoute
    ) {}

    ngOnInit() {
        // const component = this;
        // window.addEventListener('beforeunload', function (event) {
        //     component.subscriptionChoosen = null;
        // });
    }
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
        sessionStorage.setItem('subscription', `${val}`);
        sessionStorage.getItem('subscription');
        this.subscriptionChoosen =
            this.subscriptionChoosen === sessionStorage.getItem('subscription')
                ? null
                : sessionStorage.getItem('subscription');
        console.log(
            this.subscriptionChoosen,
            sessionStorage.getItem('subscription')
        );
    }
}
