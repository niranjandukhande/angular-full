import { Component, signal } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from './user/user.component';
import { DUMMY_USERS } from './dummy-users';
import { Tasks } from './tasks/tasks';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, UserComponent, Tasks, NgFor, NgIf],
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('first-angular-app');
  users = DUMMY_USERS;
  selectedUserId!: string;
  get selectedUser() {
    return this.users.find((user) => {
      return user.id === this.selectedUserId;
    });
  }
  onSelectUser(id: string) {
    console.log('Selected User with id: ' + id);
    this.selectedUserId = id;
  }
}
