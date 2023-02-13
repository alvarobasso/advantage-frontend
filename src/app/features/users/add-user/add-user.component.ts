import { Component, OnInit, ViewChild } from '@angular/core';
import { UserService } from '../services/user.service';
import { FormControl, Validators } from '@angular/forms';

import { User } from '../models/user.model';
import { ListUserService } from '../services/list-user.service';

import SignaturePad from 'signature_pad';

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
    phoneNumber: '',
    signImage: ''
  };
  submitted = false;
  users?: User[];
  message: string = '';
  signError: string = '';

  title = 'Signature Pad by Rajesh Gami';
  signPad: any;
  @ViewChild('signPadCanvas', { static: false }) signaturePadElement: any;
  signImage: any;


  constructor(
    private userService: UserService,
    private listUserService: ListUserService,
  ) { }

  saveUser(): void {
    console.log(this.signImage)
    const data = {
      nameUser: this.user.nameUser,
      dateBirth: this.user.dateBirth,
      email: this.user.email,
      phoneNumber: this.user.phoneNumber,
      signImage: this.signImage
    };
    if (this.signImage === undefined) {
      this.signError = 'Please sign the document';
    } else {
      this.userService.create(data)
        .subscribe({
          next: (res) => {
            this.message = res.message;
            this.submitted = true;
            this.retrieveUsers();
          },
          error: (e) => console.error(e)
        });
    }

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

  retrieveUsers(): void {
    this.userService.getAll()
      .subscribe({
        next: (data) => {
          this.users = data.data;
          this.listUserService.setUser(this.users);
        },
        error: (e) => console.error(e)
      });
  }



  ngAfterViewInit() {
    this.signPad = new SignaturePad(this.signaturePadElement.nativeElement);
  }
  /*It's work in devices*/
  startSignPadDrawing(event: Event) {
    console.log(event);
  }
  /*It's work in devices*/
  movedFinger(event: Event) {
  }
  /*Undo last step from the signature*/
  undoSign() {
    const data = this.signPad.toData();
    if (data) {
      data.pop(); // remove the last step
      this.signPad.fromData(data);
    }
  }
  /*Clean whole the signature*/
  clearSignPad() {
    this.signPad.clear();
  }
  /*Here you can save the signature as a Image*/
  saveSignPad() {
    const base64ImageData = this.signPad.toDataURL();
    this.signImage = base64ImageData;
  }


}


