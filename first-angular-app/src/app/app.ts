import { Component, signal } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from './user/user.component';
import { DUMMY_USERS } from './dummy-users';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, UserComponent],
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('first-angular-app');
  users = DUMMY_USERS;

  onSelectUser(id: string) {
    console.log('Selected User with id: ' + id);
  }
}
