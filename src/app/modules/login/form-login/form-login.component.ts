import { Component, OnInit } from '@angular/core';
import { Credentials } from '../models/credential.model';

@Component({
  selector: 'app-form-login',
  templateUrl: './form-login.component.html',
  styleUrls: ['./form-login.component.scss']
})
export class FormLoginComponent implements OnInit {

  public credential: Credentials = { email: '', password: '' };
  public loading: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  public onLogin(event: any): void {
  }

  public onRegister(event: any): void {
  }

}
