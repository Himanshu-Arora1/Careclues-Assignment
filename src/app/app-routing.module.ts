import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { UsersComponent } from './users/users.component';
import { UserDetailsComponent } from './users/user-details/user-details.component';
import { NewUserComponent } from './new-user/new-user.component';
import { AuthGuard } from './auth/auth-guard.service';


const appRoutes: Routes = [
    {path: '', redirectTo: '/users', pathMatch: 'full' },
    {path: 'auth', component: AuthComponent },
    { path: 'new', component: NewUserComponent, canActivate: [AuthGuard] },
    {
        path: 'users',
        component: UsersComponent,
        canActivate: [AuthGuard],
        children: [
            {
                path: ':id',
                component: UserDetailsComponent,
            },
            { path: ':id/edit', component: NewUserComponent  },
        ]
    },
    {path: '*', component: UsersComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRouting { }
