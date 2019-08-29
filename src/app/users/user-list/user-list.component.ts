import { Component, OnInit } from '@angular/core';
import { DataStorageService } from 'src/app/shared/data-storage.service';
import { User } from '../user.model';
import { UserService } from '../user-service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  users: any = [];

  constructor(private userService: UserService, 
              private router: Router,
              private route: ActivatedRoute,
              private dataStorage: DataStorageService) { }

  ngOnInit() {
    this.dataStorage.getUsers().subscribe();
    this.userService.usersChanged
      .subscribe(users => {
        this.users = users;
      });
  }

  createUser() {
      this.router.navigate(['../new'], { relativeTo: this.route});
  }
}
