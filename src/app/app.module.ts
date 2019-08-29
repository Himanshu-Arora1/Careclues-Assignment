import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AuthComponent } from './auth/auth.component';

import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { UsersComponent } from './users/users.component'
import { AppRouting } from './app-routing.module';
import { UserListComponent } from './users/user-list/user-list.component';
import { UserNamesComponent } from './users/user-list/user-names/user-names.component';
import { UserDetailsComponent } from './users/user-details/user-details.component';
import { NewUserComponent } from './new-user/new-user.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AuthComponent,
    UsersComponent,
    UserListComponent,
    UserNamesComponent,
    UserDetailsComponent,
    NewUserComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRouting
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
