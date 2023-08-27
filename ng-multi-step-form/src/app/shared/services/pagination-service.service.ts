import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class PaginationService {
    currentPage = new BehaviorSubject(1);
    constructor(public router: Router, public route: ActivatedRoute) {}
    paginate(page: number) {
        this.router.navigate([`step-${page}`]);
        localStorage.setItem('currentPage', `${page}`);
        let currPage = +localStorage.getItem('currentPage');
        this.currentPage.next(currPage);
        
    }
}
