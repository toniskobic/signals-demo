import { Component } from '@angular/core';
import { CountdownComponent } from './components/countdown/countdown.component';
import { UsersComponent } from "./components/users/users.component";
import { FilteredUsersComponent } from "./components/filtered-users/filtered-users.component";
import { ParentComponent } from "./components/parent/parent.component";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    standalone: true,
    imports: [CountdownComponent, UsersComponent, FilteredUsersComponent, ParentComponent]
})
export class AppComponent {
}
