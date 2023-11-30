import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginRoutingModule } from './login-routing.module';
import { AppComponent } from '../app.component';
import { LoginComponent } from './login.component';
import { Routes, RouterModule } from '@angular/router';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    LoginRoutingModule,
  ]
})
export class LoginModule { }
