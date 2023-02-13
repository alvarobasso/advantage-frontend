import { Component, Output, EventEmitter, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA} from "@angular/material/dialog";
import { UserService } from '../services/user.service';
import { User, UserData } from '../models/user.model';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-decode-sign',
  templateUrl: './decode-sign.component.html',
  styleUrls: ['./decode-sign.component.scss']
})
export class DecodeSignComponent {

  idUser:string | undefined;
  users!: User[];
  imagePath: any;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private userService: UserService,
    private _sanitizer: DomSanitizer
    ) { }

  ngOnInit(): void {
    this.idUser = this.data.id;
    this.retrieveUsers();
  }

  retrieveUsers(): void {
    this.userService.getUser(this.idUser)
      .subscribe({
        next: (data) => {
          if(data.data != undefined){
            this.users = data.data;
            this.imagePath = this.users[0].signImage;
          }
        },
        error: (e) => console.error(e)
      });
  }

}
