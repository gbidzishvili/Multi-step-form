import { Component } from '@angular/core';
import { PaginationService } from '../../services/pagination-service.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-steps',
    templateUrl: './steps.component.html',
    styleUrls: ['./steps.component.scss'],
})
export class StepsComponent {
    pages = [1, 2, 3, 4];
    currentPage = 1;
    constructor(
        public paginationService: PaginationService,
        public router: Router
    ) {
        this.paginationService.currentPage.subscribe((v) => {
            this.currentPage = v;
        });
    }
    ngOnInit() {}
    changePage(page: number) {
        if (page !== this.currentPage) {
            this.currentPage = page;
            this.router.navigate([`step-${page}`]);
        }
    }
}
