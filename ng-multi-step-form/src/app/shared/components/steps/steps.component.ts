import { Component, ViewEncapsulation } from '@angular/core';
import { PaginationService } from '../../services/pagination-service.service';
import { DataShearingService } from '../../services/data-shearing.service';

@Component({
    selector: 'app-steps',
    templateUrl: './steps.component.html',
    styleUrls: ['./steps.component.scss'],
})
export class StepsComponent {
    pages = [
        { idx: 1, step: 'STEP1', info: 'YOUR INFO' },
        { idx: 2, step: 'STEP2', info: 'SELECT PLAN' },
        { idx: 3, step: 'STEP3', info: 'ADD-ONS' },
        { idx: 4, step: 'STEP4', info: 'SUMMARY' },
    ];
    suffix = '';
    currentPage;
    choosenSubscription;
    form;
    isBiggerThan768px;
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
