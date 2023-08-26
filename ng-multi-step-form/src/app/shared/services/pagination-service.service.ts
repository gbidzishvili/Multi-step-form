import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PaginationService {
  currentPage = new BehaviorSubject(+localStorage.getItem('currentPage'));
  constructor(public router: Router) {}
  paginate(page: number) {
    this.router.navigate([`step-${page}`]);
    localStorage.setItem('currentPage', `${page}`);
    let currPage = +localStorage.getItem('currentPage');
    console.log('currPage', currPage);
    this.currentPage.next(currPage);
  }
}
