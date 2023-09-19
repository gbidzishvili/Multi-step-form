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
    toggleClicked = false;
    subscriptionChoosen = sessionStorage.getItem('subscription');
    data;
    currentPage;
    price;
    constructor(
        public paginationService: PaginationService,
        public dataShearingService: DataShearingService,
        public http: HttpClient
    ) {}

    ngOnInit() {
        //  if (this.subscriptionChoosen === null) {
        //      sessionStorage.setItem('subscription', null);
        //      this.dataShearingService.choosenSubscription.next(null);
        //  } else {
        //      sessionStorage.setItem('subscription', this.data[val]);
        //      this.dataShearingService.choosenSubscription.next(this.data[val]);
        //  }

        //  this.dataShearingService.choosenSubscription.next(this.data[val]);

        this.dataShearingService.toggleValue.subscribe((v) => {
            if (v) this.toggleClicked = v;
        });
        this.http.get('../../../../assets/data/plans.json').subscribe((v) => {
            this.data = v;
            this.subscriptionChoosen = sessionStorage.getItem('subscription');
            this.dataShearingService.choosenSubscription.next(
                this.data[this.subscriptionChoosen]
            );
            console.log('ngOnInit', this.data[this.subscriptionChoosen]);
        });
        this.paginationService.currentPage.subscribe((v) => {
            this.currentPage = v;
        });
    }
    changeToggle(value) {
        this.dataShearingService.toggleValue.next(value);
    }
    back() {
        this.paginationService.paginate(this.currentPage - 1);
    }
    next() {
        if (this.subscriptionChoosen !== null) {
            this.paginationService.paginate(this.currentPage + 1);
        } else {
            alert('You should choose subscription.');
        }
    }
    chooseSubscription(val) {
        if (!this.toggleClicked) {
            this.price = this.data[val]['price'];
        } else {
            this.price = this.data[val]['priceYearly'];
        }
        sessionStorage.setItem('subscription', `${val}`);
        sessionStorage.setItem('subObj', JSON.stringify(this.data[val]));
        this.subscriptionChoosen =
            this.subscriptionChoosen === sessionStorage.getItem('subscription')
                ? null
                : sessionStorage.getItem('subscription');
        this.subscriptionChoosen === null
            ? this.dataShearingService.choosenSubscription.next(null)
            : this.dataShearingService.choosenSubscription.next(this.data[val]);
        console.log('chooseSubscriptionMethod', this.data[val]);
    }
}
