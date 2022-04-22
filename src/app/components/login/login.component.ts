import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { timeout } from 'rxjs';
import { UserLogin } from './interfaces/data.login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
data: UserLogin;

  constructor() {
    this.data = {
      usuario: '',
      password: ''
    }
  }
   

  ngOnInit(): void {
   
  }

  ingresar(data: UserLogin){
    console.log(this.data);
  }


}