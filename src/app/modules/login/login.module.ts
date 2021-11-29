import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormLoginComponent } from './components/form-login/form-login.component';
import { FormsModule } from '@angular/forms';
import { FormRegisterComponent } from './components/form-register/form-register.component';
import { LoginComponent } from './pages/login/login.component';
import { LoginRoutingModule } from './login.routing.module';
import { RegisterComponent } from './pages/register/register.component';



@NgModule({
  declarations: [
    FormLoginComponent,
    FormRegisterComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    LoginRoutingModule
  ]
})
export class LoginModule { }
