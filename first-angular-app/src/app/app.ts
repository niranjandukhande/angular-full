import { Component, signal } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from './user/user.component';
import { DUMMY_USERS } from './dummy-users';
import { Tasks } from './tasks/tasks';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, UserComponent, Tasks],
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('first-angular-app');
  users = DUMMY_USERS;
  selectedUserId = 'u1';
  get selectedUser() {
    return this.users.find((user) => {
      return user.id === this.selectedUserId;
    })!;
  }
  onSelectUser(id: string) {
    console.log('Selected User with id: ' + id);
    this.selectedUserId = id;
  }
}
