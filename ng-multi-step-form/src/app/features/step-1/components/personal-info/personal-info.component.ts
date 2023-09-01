import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Subject } from 'rxjs';
import { DataShearingService } from 'src/app/shared/services/data-shearing.service';
import { PaginationService } from 'src/app/shared/services/pagination-service.service';

@Component({
    selector: 'app-personal-info',
    templateUrl: './personal-info.component.html',
    styleUrls: ['./personal-info.component.scss'],
})
export class PersonalInfoComponent {
    invalidName = false;
    invalidEmail = false;
    invalidNumber = false;
    submitted = new Subject();
    currentPage;
    navigated;
    infoForm = new FormGroup({
        name: new FormControl('', [
            Validators.required,
            Validators.pattern('^[a-w|\\s]*$'),
        ]),
        email: new FormControl('', [Validators.required, Validators.email]),
        number: new FormControl('', [
            Validators.required,
            Validators.pattern('^[\\d|\\s]*$'),
        ]),
    });
    constructor(
        public paginationService: PaginationService,
        public dataShearingService: DataShearingService
    ) {}
    ngOnInit() {
        this.infoForm.get('name').setValue(sessionStorage.getItem('name'));
        this.infoForm.get('email').setValue(sessionStorage.getItem('email'));
        this.infoForm.get('number').setValue(sessionStorage.getItem('number'));
        this.dataShearingService.navigated.subscribe((v) => {
            this.navigated = v;
            if (this.navigated) {
                this.validateForm();
            }
        });
        this.dataShearingService.form.next(this.infoForm);
        this.infoForm.valueChanges.subscribe((v) => {
            sessionStorage.setItem('name', this.infoForm.get('name').value);
            sessionStorage.setItem('email', this.infoForm.get('email').value);
            sessionStorage.setItem('number', this.infoForm.get('number').value);
            this.infoForm.get('name').setValue(sessionStorage.getItem('name'));
            if (this.navigated) {
                this.validateForm();
            }
        });
        this.submitted.subscribe((v) => {
            if (v) {
                this.infoForm.get('name').valueChanges.subscribe((v) => {
                    this.invalidName = this.infoForm.get('name').invalid;
                });

                this.infoForm.get('email').valueChanges.subscribe((v) => {
                    this.invalidEmail = this.infoForm.get('email').invalid;
                });
                this.infoForm.get('number').valueChanges.subscribe((v) => {
                    this.invalidNumber = this.infoForm.get('number').invalid;
                    if (v.split(/\s+/).join('').length !== 9) {
                        this.invalidNumber = true;
                    }
                });
            }
        });
        this.paginationService.currentPage.subscribe((v) => {
            this.currentPage = v;
        });
    }

    onSubmit() {
        this.validateForm();
        this.submitted.next(true);
        if (this.infoForm.valid) {
            this.paginationService.paginate(2);
        }
    }
    validateForm() {
        this.invalidName = this.infoForm.get('name').invalid;
        this.invalidEmail = this.infoForm.get('email').invalid;
        this.invalidNumber = this.infoForm.get('number').invalid;
    }
}
