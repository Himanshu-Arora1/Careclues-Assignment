
import {  Observable } from 'rxjs';
import { CanActivate,  RouterStateSnapshot, ActivatedRouteSnapshot, UrlTree, Router } from '@angular/router';
import { AuthService } from './auth.service';
import { map } from 'rxjs/operators';
import { Injectable } from '@angular/core';

@Injectable({providedIn: 'root'})
export class AuthGuard implements CanActivate {

    constructor(private authservice: AuthService, private router: Router) {
    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):
         Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean {
                return this.authservice.user.pipe(
                    map(user => {
                        const isauth = !!user;
                        if (isauth) {
                                return true;
                        } else {
                            return this.router.createUrlTree(['/auth']);
                        }
                    })
                );
    }
}