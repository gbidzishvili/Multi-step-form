import { Component } from '@angular/core';
import { PaginationService } from '../../services/pagination-service.service';
import { DataShearingService } from '../../services/data-shearing.service';

@Component({
    selector: 'app-steps',
    templateUrl: './steps.component.html',
    styleUrls: ['./steps.component.scss'],
})
export class StepsComponent {
    pages = [1, 2, 3, 4];
    suffix = '';
    currentPage;
    choosenSubscription;
    form;
    constructor(
        public paginationService: PaginationService,
        public dataSharingService: DataShearingService
    ) {}
    ngOnInit() {
        this.paginationService.currentPage.subscribe((v) => {
            if (v) {
                this.currentPage = v;
            } else {
                this.currentPage = 1;
            }
        });
        this.paginationService.suffix$.subscribe((v) => {
            this.suffix = v;
        });
        this.dataSharingService.choosenSubscription.subscribe((v) => {
            this.choosenSubscription = v;
        });
        this.dataSharingService.form.subscribe((v) => {
            console.log('steps form: ', v);
            this.form = v;
        });
    }
    changePage(page: number) {
        if (page !== this.currentPage) {
            if (
                this.currentPage === 2 &&
                this.choosenSubscription === null &&
                page > this.currentPage
            ) {
                alert('You should choose subscription');
            } else if (this.currentPage === 1 && !this.form.valid) {
                this.dataSharingService.navigated.next(true);
                alert('You should fill the form first');
            } else {
                this.paginationService.paginate(page);
            }
        }
    }
}
