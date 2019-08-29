import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

import { Router } from '@angular/router';
import { DataStorageService } from '../shared/data-storage.service';
import { AuthService } from './auth.service';
import { BehaviorSubject, Observable } from 'rxjs';


@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  isLoginMode = true;
  signupForm: FormGroup;
  authObs: Observable<any>;
  error: string;

  constructor(private http: HttpClient, private route: Router, private authService: AuthService) { }

  ngOnInit() {
      this.signupForm = new FormGroup({
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required])
    });
  }

  onSubmit() {

    if (this.isLoginMode) {
      this.authObs = this.authService.login(this.signupForm.value.username, this.signupForm.value.password);
    } else {
      this.authObs = this.authService.signUp(this.signupForm.value.username, this.signupForm.value.password);
    }

    this.authObs.subscribe(
      response => {
        this.authService.user.next(true);
        this.route.navigate(['users']);
      },
      errorMessage => {
        this.error = errorMessage;
      }
    );
    this.signupForm.reset();
  }

  onSwitch() {
    this.isLoginMode = !this.isLoginMode;
  }
}
