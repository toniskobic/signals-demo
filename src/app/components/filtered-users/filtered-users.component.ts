import { NgFor } from '@angular/common';
import { Component, inject, computed } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-filtered-users',
  templateUrl: './filtered-users.component.html',
  styleUrls: ['./filtered-users.component.scss'],
  standalone: true,
  imports: [NgFor]
})
export class FilteredUsersComponent {
  heroService = inject(UsersService);
  filter = 'John';
  filteredUsers = computed(() => this.heroService.users().filter((user) => `${user.firstname} ${user.lastname}`.includes(this.filter)));
}
