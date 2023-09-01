import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class PaginationService {
    currentPage = new BehaviorSubject(+sessionStorage.getItem('currentPage'));
    suffix$ = new BehaviorSubject('');
    
    constructor(public router: Router, public route: ActivatedRoute) {}
    paginate(page: number, suffixVal: string = '') {
        if (this.suffix$) {
            this.suffix$.next(suffixVal);
        }
        this.router.navigate([`step-${page}${suffixVal}`]);
        sessionStorage.setItem('currentPage', `${page}`);
        let currPage = +sessionStorage.getItem('currentPage');
        this.currentPage.next(currPage);
    }
}
