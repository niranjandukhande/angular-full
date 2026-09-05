import { Component, computed, EventEmitter, Input, input, Output, output } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-user',
  styleUrl: './user.component.css',
  templateUrl: './user.component.html',
})
export class UserComponent {
  @Input({ required: true }) id!: string;
  @Input({ required: true }) avatar!: string;
  @Input({ required: true }) name!: string;
  @Output() select = new EventEmitter<string>();

  get imagePath() {
    return `assets/users/${this.avatar}`;
  }

  onSelectUser() {
    this.select.emit(this.id);
  }
}
