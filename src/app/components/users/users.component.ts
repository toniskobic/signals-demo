import { NgFor } from '@angular/common';
import { Component, inject } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';
import { FilteredUsersComponent } from "../filtered-users/filtered-users.component";

@Component({
    selector: 'app-users',
    templateUrl: './users.component.html',
    styleUrls: ['./users.component.scss'],
    standalone: true,
    imports: [NgFor, FilteredUsersComponent]
})
export class UsersComponent {
  heroService = inject(UsersService);
  users = this.heroService.users;

  addUser() {
    this.users.mutate((users) => users.push({ firstname: 'John', lastname: 'Johnson' }));
  }
}
