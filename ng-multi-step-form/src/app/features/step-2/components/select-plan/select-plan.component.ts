import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataShearingService } from 'src/app/shared/services/data-shearing.service';
import { PaginationService } from 'src/app/shared/services/pagination-service.service';

@Component({
    selector: 'app-select-plan',
    templateUrl: './select-plan.component.html',
    styleUrls: ['./select-plan.component.scss'],
})
export class SelectPlanComponent {
    clicked = false;
    subscriptionChoosen = sessionStorage.getItem('subscription');
    data;
    constructor(
        public router: Router,
        public paginationService: PaginationService,
        public route: ActivatedRoute,
        public shareDataService: DataShearingService,
        public http: HttpClient
    ) {}

    ngOnInit() {
        this.shareDataService.toggleValue.subscribe((v) => {
            this.clicked = v;
        });
        this.http.get('../../../../assets/data/plans.json').subscribe((v) => {
            this.data = v;
            console.log('Data is', this.data);
        });
    }
    changeToggle(value) {
        console.log('select', value);
        this.clicked = value;
        this.shareDataService.toggleValue.next(value);
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
