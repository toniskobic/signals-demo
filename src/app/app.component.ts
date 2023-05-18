import { Component } from '@angular/core';
import { CountdownComponent } from './components/countdown/countdown.component';
import { UsersComponent } from './components/users/users.component';
import { FilteredUsersComponent } from './components/filtered-users/filtered-users.component';
import { ParentComponent } from './components/parent/parent.component';
import { CounterComponent } from './components/counter/counter.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [
    CountdownComponent,
    UsersComponent,
    FilteredUsersComponent,
    ParentComponent,
    CounterComponent,
  ],
})
export class AppComponent {}
