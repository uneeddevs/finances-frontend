import { Component, OnInit } from '@angular/core';
import { Register } from '../models/register.model';

@Component({
  selector: 'app-form-register',
  templateUrl: './form-register.component.html',
  styleUrls: ['./form-register.component.scss']
})
export class FormRegisterComponent implements OnInit {

  public register: Register = { name: '', email: '', password: '' };
  public loading: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  public onRegister(event: any): void {
  }

}
