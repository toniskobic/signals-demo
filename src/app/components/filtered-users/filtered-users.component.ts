import { NgFor } from '@angular/common';
import {
  Component,
  inject,
  computed,
  signal,
  AfterViewInit,
  ViewChild,
  ElementRef,
} from '@angular/core';
import { debounceTime, distinctUntilChanged, fromEvent, map } from 'rxjs';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-filtered-users',
  templateUrl: './filtered-users.component.html',
  styleUrls: ['./filtered-users.component.scss'],
  standalone: true,
  imports: [NgFor],
})
export class FilteredUsersComponent implements AfterViewInit {
  heroService = inject(UsersService);

  filter = signal('John');
  filteredUsers = computed(() =>
    this.heroService
      .users()
      .filter((user) =>
        `${user.firstname} ${user.lastname}`
          .toLowerCase()
          .includes(this.filter().toLowerCase())
      )
  );

  @ViewChild('input') input!: ElementRef<HTMLInputElement>;

  ngAfterViewInit(): void {
    fromEvent(this.input.nativeElement, 'input')
      .pipe(map((event: Event) => (event.target as HTMLInputElement).value))
      .pipe(debounceTime(500))
      .pipe(distinctUntilChanged())
      .subscribe((data) => this.filter.set(data));
  }
}
