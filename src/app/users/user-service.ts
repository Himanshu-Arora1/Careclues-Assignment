import { Injectable } from '@angular/core';
import { User } from './user.model';
import { ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { DataStorageService } from '../shared/data-storage.service';

@Injectable({providedIn: 'root'})
export class UserService{

    users: User[] = [];
    usersChanged = new Subject<User[]>();
    userChanged = new Subject<User>();
    user: User;

    constructor() {}

    setUsers(users: User[]) {
        this.users = users;
        this.usersChanged.next(this.users.slice());
    }

    getUsers() {
        return this.users;
    }

    setUser(user: User) {
        this.user = user;
        console.log('setuser');
        this.userChanged.next(this.user);
    }

    getUser() {
        console.log('userrr', this.user);
        return this.user;
    }
}
