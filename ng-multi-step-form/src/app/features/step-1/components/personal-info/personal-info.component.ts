import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
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
    public router: Router,
    public paginationService: PaginationService
  ) {}
  ngOnInit() {
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
  }

  onSubmit() {
    this.invalidName = this.infoForm.get('name').invalid;
    this.invalidEmail = this.infoForm.get('email').invalid;
    this.invalidNumber = this.infoForm.get('number').invalid;
    this.submitted.next(true);
    console.log(this.infoForm.valid);
    // if (this.infoForm.valid) {
    this.router.navigate(['/step-2']);
    this.paginationService.paginate(2);

    // }
  }
  onFocus(input) {
    let control = input.getAttribute('formcontrolname');
    console.log(input.ivalid, input);
  }
}
