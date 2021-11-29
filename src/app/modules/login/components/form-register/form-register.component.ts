import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegisterService } from 'src/app/core/services/register.service';
import { Register } from '../../models/register.model';

@Component({
  selector: 'app-form-register',
  templateUrl: './form-register.component.html',
  styleUrls: ['./form-register.component.scss']
})
export class FormRegisterComponent implements OnInit {

  public register: Register = { name: '', email: '', password: '' };
  public loading: boolean = false;

  constructor(
    private registerService: RegisterService,
    private router: Router) { }

  ngOnInit(): void {
  }

  public onRegister(event: any): void {
    this.registerService.register({
      name: this.register.name,
      email: this.register.email,
      password: this.register.password
    }).subscribe();
  }

  public onBackLogin(event: any): void {
    this.router.navigate(['/login']);
  }

}
