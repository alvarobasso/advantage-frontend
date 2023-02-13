import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListUsersComponent } from './list-users/list-users.component';
import { AngularMaterialModule } from '../angular-material/angular-material.module';
import { AddUserComponent } from './add-user/add-user.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DecodeSignComponent } from './decode-sign/decode-sign.component';

@NgModule({
  declarations: [
    ListUsersComponent,
    AddUserComponent,
    DecodeSignComponent
  ],
  imports: [
    CommonModule,
    AngularMaterialModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  exports: [
  ]
})
export class UsersModule { }
