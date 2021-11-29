import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormLoginComponent } from './form-login/form-login.component';
import { FormsModule } from '@angular/forms';
import { FormRegisterComponent } from './form-register/form-register.component';



@NgModule({
  declarations: [
    FormLoginComponent,
    FormRegisterComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class LoginModule { }
