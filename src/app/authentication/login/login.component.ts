import { Component, OnInit } from '@angular/core';
import { FormGroup, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ILogin } from './login-model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginObj = {} as ILogin;

  constructor(private route: Router) { }

  ngOnInit(): void {
  }

  Login() {
    alert("Successfully Logged")
    this.route.navigate(['/admin'])
  }
}
