import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {

 isAuthenticate = true;
 userSub: Subscription;

  constructor(private authService: AuthService) { }

  ngOnInit() {
    console.log("master2");
    this.userSub = this.authService.user.subscribe(
                      user => {
                        this.isAuthenticate = !user ? false : true;
                      }
    );
  }

  onLogout() {
    this.authService.logout();
  }

  ngOnDestroy() {
    this.userSub.unsubscribe();
  }
}
