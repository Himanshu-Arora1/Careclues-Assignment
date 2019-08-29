import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user = new BehaviorSubject<any>(null);

  constructor(private http: HttpClient, private route: Router, private router: ActivatedRoute ) { }

  login(username: string, password: string) {
    return this.http.post('https://reqres.in/api/login',
    {
      email: username,
      password
  }
          ).pipe(
            catchError(this.handleError),
          );
  }

  signUp(username: string, password: string) {
    return this.http.post('https://reqres.in/api/signup',
    {
      email: username,
      password
  }
          ).pipe(
            map((data) => {
              this.user.next(true);
          }),
          );
  }

  logout() {
      this.user.next(null);
      this.route.navigate(['../'], { relativeTo: this.router})
  }

  private handleError(error: HttpErrorResponse) {
    let errorMessage = 'An unknown error occurred!';
    if (!error.error || !error.error.error) {
      return throwError(errorMessage);
    }

    switch (error.error.error) {
      case 'user not found':
        errorMessage = 'User does not exist';
        break;
      case 'email exist':
        errorMessage = 'Email Alreadt Exist';
    }


    return throwError(errorMessage);
  }
}
