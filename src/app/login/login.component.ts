import { NgxSpinnerService } from 'ngx-spinner';
import { AuthService } from './../services/auth.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginUserData = {
    email: '',
    password: '',
  };

  constructor(
    private _auth: AuthService,
    private _route: Router,
    private fb: FormBuilder,
    private SpinnerService: NgxSpinnerService
  ) {}
  error: any;
  ngOnInit(): void {}
  loginUser() {
    this.SpinnerService.show();
    this._auth.loginUser(this.loginUserData).subscribe(
      (res) => {
        console.log(res);
        localStorage.setItem('token', res.token);
        this._route.navigate(['/special']);
        this.SpinnerService.hide();
      },
      (err) => {
        console.log(err);
        this.error = err.error;
        this.SpinnerService.hide();
      }
    );
  }
  profileForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(3)]],
  });
  get email() {
    return this.profileForm.get('email');
  }
  get password() {
    return this.profileForm.get('password');
  }
}
