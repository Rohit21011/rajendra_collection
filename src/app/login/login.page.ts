import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  loginForm = new FormGroup({
    email: new FormControl('',[Validators.required]),
    password: new FormControl('',[Validators.required,Validators.minLength(6)]),
  });
  constructor() { }

  ngOnInit() {

  }
  login()
  {
    console.log(this.loginForm);
  }

}
