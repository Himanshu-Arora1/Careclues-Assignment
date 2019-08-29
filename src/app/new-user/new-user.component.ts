import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { DataStorageService } from '../shared/data-storage.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { UserService } from '../users/user-service';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css']
})
export class NewUserComponent implements OnInit {

  userForm: FormGroup;
  id: number;
  editMode = false;

  constructor(private dataStorage: DataStorageService,
              private route: ActivatedRoute,
              private userService: UserService,
              private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        console.log('paramms', params);
        this.id = + params.id;
        this.editMode =  params.id != null;
        console.log('edit', this.editMode);
      }
    );
    this.initForm();
  }

  onSubmit() {
    if (this.editMode) {
        this.dataStorage.updateUser(this.id, this.userForm.value).subscribe();

    } else {
      this.dataStorage.createUser(this.userForm.value).subscribe();
    }
    this.onCancel();
  }

  private initForm() {

    let name = '';
    let id = '';
    let email = '';
    let avatar = '';

    if (this.editMode) {
      const user = this.userService.getUser();
      name = user.first_name + user.last_name;
      id = user.id;
      email = user.email;
      avatar = user.avatar;
    }
    this.userForm = new FormGroup({
         name: new FormControl(name, [Validators.required]),
         Id: new FormControl(id, [Validators.required]),
          email: new FormControl(email, [Validators.required]),
          avatar: new FormControl(avatar, [Validators.required]),
      });
  }


  onCancel() {
    this.userForm.reset();

    if (this.editMode) {
      this.router.navigate(['..'], { relativeTo : this.route});
    } else {
      this.router.navigate(['../users'], { relativeTo : this.route});
    }
  }
}
