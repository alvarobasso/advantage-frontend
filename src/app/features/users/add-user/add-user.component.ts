import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { FormGroup } from '@angular/forms';
import { FormControl, Validators } from '@angular/forms';
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Inject,
  OnDestroy,
} from '@angular/core';

import { User } from '../models/user.model';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent {

  email = new FormControl('', [Validators.required, Validators.email]);
  

  user: User = {
    nameUser: '',
    dateBirth: new Date,
    email: '',
    phoneNumber: ''
  };
  submitted = false;

  constructor(
    private userService: UserService
  ) { }


  saveUser(): void {
    const data = {
      nameUser: this.user.nameUser,
      dateBirth: this.user.dateBirth,
      email: this.user.email,
      phoneNumber: this.user.phoneNumber
    };

    console.log(data);

    this.userService.create(data)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.submitted = true;
        },
        error: (e) => console.error(e)
      });
  }

  newUser(): void {
    this.submitted = false;
    this.user = {
      nameUser: '',
      dateBirth: new Date,
      email: '',
      phoneNumber: ''
    };
  }

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }
    return this.email.hasError('email') ? 'Not a valid email' : '';
  }

}


