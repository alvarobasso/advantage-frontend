import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AngularMaterialModule } from './features/angular-material/angular-material.module';
import { CommonFeaturesModule } from './features/common/common-features.module';
import { UsersModule } from './features/users/users.module';

import { ListUserService } from './features/users/services/list-user.service';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AngularMaterialModule,
    CommonFeaturesModule,
    UsersModule,
  ],
  providers: [ListUserService],
  bootstrap: [AppComponent],
  exports: [
    AngularMaterialModule,
  ]
})
export class AppModule { }
