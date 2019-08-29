import { map  } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserService } from '../users/user-service';
import { User } from '../users/user.model';

@Injectable({providedIn: 'root'})
export class DataStorageService {

    constructor(private http: HttpClient, private userService: UserService) {  }

    getUsers() {
        return this.http.get('https://reqres.in/api/users/').pipe(
            map(users => this.userService.setUsers(users['data'])),
        );
    }

    getUser(id: number) {
        console.log('getuser');
        return this.http.get('https://reqres.in/api/users/' + id).pipe(
            map(user => this.userService.setUser(user['data']))
        );
    }

    createUser(newUser: User) {
       return this.http.post('https://reqres.in/api/users/', newUser);
    }

    updateUser(id: number, user: User) {
        console.log('update', user);
        return this.http.put('https://reqres.in/api/users/' + id, user);
    }
}
