import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { DataShearingService } from 'src/app/shared/services/data-shearing.service';
import { PaginationService } from 'src/app/shared/services/pagination-service.service';

@Component({
    selector: 'app-add-ons',
    templateUrl: './add-ons.component.html',
    styleUrls: ['./add-ons.component.scss'],
})
export class AddOnsComponent {
    addOnnChoosenArr = JSON.parse(sessionStorage.getItem('arr'));
    toggleClicked;
    data;
    currentPage;
    constructor(
        public paginationService: PaginationService,
        public dataShearingService: DataShearingService,
        private http: HttpClient
    ) {}

    ngOnInit() {
        if (!this.addOnnChoosenArr) {
            this.addOnnChoosenArr = [false, false, false];
        }
        this.dataShearingService.toggleValue.subscribe((v) => {
            this.toggleClicked = v;
        });
        this.http.get('../../../assets/data/add-ons.json').subscribe((v) => {
            this.data = v;
        });
        this.paginationService.currentPage.subscribe((v) => {
            this.currentPage = v;
        });
    }
    chooseAddOnn(v: number) {
        this.addOnnChoosenArr[v] = !this.addOnnChoosenArr[v];
        sessionStorage.setItem('arr', JSON.stringify(this.addOnnChoosenArr));
        this.addOnnChoosenArr = JSON.parse(sessionStorage.getItem('arr'));
        console.log(JSON.parse(sessionStorage.getItem('arr')));
    }
    back() {
        this.paginationService.paginate(this.currentPage - 1);
    }
    next() {
        this.paginationService.paginate(this.currentPage + 1);
    }
}
