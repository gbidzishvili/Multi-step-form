import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PaginationServiceService {
  currentPage = new BehaviorSubject(1);
  constructor() {}
  paginate(page: number) {
    this.currentPage.next(page);
  }
}
