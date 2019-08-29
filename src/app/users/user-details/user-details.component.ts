import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { UserService } from '../user-service';
import { DataStorageService } from 'src/app/shared/data-storage.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  user: any;
  id: number;

  constructor(private userService: UserService, private route: ActivatedRoute,
              private dataStorage: DataStorageService, private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe(
      params => {
        this.dataStorage.getUser(+ params.id).subscribe();
      }
    );
    this.userService.userChanged
      .subscribe(user => {
          this.user = user;
      });
  }

  onEdit() {
    this.router.navigate(['edit'], {relativeTo: this.route});
  }
}
