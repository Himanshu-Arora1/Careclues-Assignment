import { Component, OnInit, Input } from '@angular/core';
import { User } from '../../user.model';
import { ActivatedRoute, Router } from '@angular/router';
import { DataStorageService } from 'src/app/shared/data-storage.service';
import { UserService } from '../../user-service';

@Component({
  selector: 'app-user-names',
  templateUrl: './user-names.component.html',
  styleUrls: ['./user-names.component.css']
})
export class UserNamesComponent implements OnInit {

  @Input() user: User[];
  constructor(
        private router: Router,
        private route: ActivatedRoute,
        private dataStorage: DataStorageService,
        private userservice: UserService
        ) {}

  ngOnInit() {
  }

  getUser(id: number) {
    this.router.navigate([id], {relativeTo: this.route});
  }

}
