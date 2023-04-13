import { Injectable, signal } from '@angular/core';
import { users } from '../mocks/users.mock';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  users = signal(users);

  constructor() { }
}
