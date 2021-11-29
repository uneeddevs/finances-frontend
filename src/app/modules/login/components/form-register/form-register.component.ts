import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Register } from '../../models/register.model';

@Component({
  selector: 'app-form-register',
  templateUrl: './form-register.component.html',
  styleUrls: ['./form-register.component.scss']
})
export class FormRegisterComponent implements OnInit {

  public register: Register = { name: '', email: '', password: '' };
  public loading: boolean = false;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  public onRegister(event: any): void {
  }

  public onBackLogin(event: any): void {
    this.router.navigate(['/login']);
  }

}
