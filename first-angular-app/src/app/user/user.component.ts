import { Component, computed, signal } from '@angular/core';
import { DUMMY_USERS } from '../dummy-users';

const randomIndex: number = Math.floor(Math.random() * DUMMY_USERS.length);

@Component({
  imports: [],
  selector: 'app-user',
  styleUrl: './user.component.css',
  templateUrl: './user.component.html',
})
export class UserComponent {
  // selectedUser = DUMMY_USERS[randomIndex];
  selectedUser = signal(DUMMY_USERS[randomIndex]);
  imagePath = computed(() => {
    return `assets/users/${this.selectedUser().avatar}`;
  });

  // get imagePath() {
  //   return 'assets/users/' + this.selectedUser.avatar;
  // }

  onSelectUser() {
    const randomIndex: number = Math.floor(Math.random() * DUMMY_USERS.length);
    // this.selectedUser = DUMMY_USERS[randomIndex];
    this.selectedUser.set(DUMMY_USERS[randomIndex]);
  }
}
