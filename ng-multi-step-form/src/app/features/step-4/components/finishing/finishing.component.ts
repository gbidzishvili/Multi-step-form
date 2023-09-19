import { JsonPipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
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
        public paginationService: PaginationService
    ) {}
    ngOnInit() {
        this.http.get('../../../../assets/data/plans.json').subscribe((v) => {
            this.data = v;
        });
        this.dataShearingService.toggleValue.subscribe((v) => {
            this.toggleClicked = v;
        });
        this.paginationService.currentPage.subscribe((v) => {
            this.currentPage = v;
        });
        let count = 0;
        if (this.toggleClicked) {
            count += +this.choosenSubscription['priceYearly'];
        } else {
            count += +this.choosenSubscription['price'];
        }
        this.http.get('../../../../assets/data/add-ons.json').subscribe((v) => {
            if (this.addOnnChoosenArr)
                for (let i in v) {
                    if (this.addOnnChoosenArr[i]) {
                        this.choosenAddons.push(v[i]);
                    }
                }
            this.choosenAddons.forEach((v) => {
                if (!this.toggleClicked) {
                    count += +v['price'];
                } else {
                    count += +v['priceYearly'];
                }
            });
            this.totalPrice = '+$' + count + '/mo';
        });
    }

    back() {
        this.paginationService.paginate(this.currentPage - 1);
    }
    confirm() {
        this.paginationService.paginate(this.currentPage, '-thanks');
    }
}
