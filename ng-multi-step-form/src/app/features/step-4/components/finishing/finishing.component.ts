import { JsonPipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataShearingService } from 'src/app/shared/services/data-shearing.service';
import { PaginationService } from 'src/app/shared/services/pagination-service.service';

@Component({
    selector: 'app-finishing',
    templateUrl: './finishing.component.html',
    styleUrls: ['./finishing.component.scss'],
})
export class FinishingComponent {
    addOnnChoosenArr = JSON.parse(sessionStorage.getItem('arr'));
    choosenAddons = [];
    choosenSubscription = JSON.parse(sessionStorage.getItem('subObj'));
    subscription;
    toggleClicked;
    totalPrice;
    currentPage;
    data;
    constructor(
        public dataShearingService: DataShearingService,
        public http: HttpClient,
        public paginationService: PaginationService,
        public router: Router
    ) {}
    ngOnInit() {
        console.log('subObj', this.subscription);
        this.http.get('../../../../assets/data/plans.json').subscribe((v) => {
            this.data = v;
        });
        this.dataShearingService.toggleValue.subscribe((v) => {
            this.toggleClicked = v;
        });
        this.paginationService.currentPage.subscribe((v) => {
            console.log('currentPage:', v);
            this.currentPage = v;
        });
        let count = 0;
        // this.subscription =
        // this.dataShearingService.choosenSubscription.subscribe((v) => {
        // if (v) {
        //     this.choosenSubscription = v;
        // } else {
        //     this.choosenSubscription = JSON.parse(
        //         sessionStorage.getItem('subObj')
        //     );
        // }
        // if (v) {
        if (this.choosenSubscription['price'].length > 5) {
            count += +this.choosenSubscription['price'].substr(-5, 2);
            console.log(
                'sub price 1',
                this.choosenSubscription['price'].substr(-5, 2)
            );
        } else {
            count += +this.choosenSubscription['price'].substr(-4, 1);
            console.log(
                'sub price 2',
                this.choosenSubscription['price'].substr(-4, 1)
            );
        }
        // }
        // });
        this.http.get('../../../../assets/data/add-ons.json').subscribe((v) => {
            console.log('value is: ', v);
            for (let i in v) {
                if (this.addOnnChoosenArr[i]) {
                    this.choosenAddons.push(v[i]);
                }
            }
            this.choosenAddons.forEach((v) => {
                if (this.toggleClicked) {
                    count += +v['price'].substr(-5, 2);
                    // console.log(thiscount, 'sum 1');
                } else {
                    count += +v['priceYearly'].substr(-5, 1);
                    // console.log(thiscount, 'sum 2');
                }
            });
            this.totalPrice = '+$' + count + '/mo';
            console.log(this.totalPrice, '  totalPrice');
        });
    }

    back() {
        this.paginationService.paginate(this.currentPage - 1);
    }
    confirm() {
        this.paginationService.paginate(this.currentPage, '-thanks');
    }
    ngOnDestroy() {
        // this.subscription.unsubscribe();
    }
}
