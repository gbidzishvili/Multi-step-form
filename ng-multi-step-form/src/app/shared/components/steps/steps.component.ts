import { Component } from '@angular/core';
import { PaginationService } from '../../services/pagination-service.service';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';

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
        public router: Router,
        public route: ActivatedRoute
    ) {}
    ngOnInit() {
        this.paginationService.currentPage.subscribe((v) => {
            this.currentPage = v;
            console.log('curr page', this.currentPage);
        });
    }
    changePage(page: number) {
        //     if (page !== this.currentPage) {
        //         this.paginationService.paginate(page);
        //     }
    }
}
