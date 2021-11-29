import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Credentials } from '../../models/credential.model';

@Component({
  selector: 'app-form-login',
  templateUrl: './form-login.component.html',
  styleUrls: ['./form-login.component.scss']
})
export class FormLoginComponent implements OnInit {

  public credential: Credentials = { email: '', password: '' };
  public loading: boolean = false;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  public onLogin(event: any): void {
  }

  public onRegister(event: any): void {
    this.router.navigate(['/login/register']);
  }

}
