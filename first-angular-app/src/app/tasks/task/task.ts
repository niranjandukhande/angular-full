import { Component, EventEmitter, Input, Output } from '@angular/core';
import { type ITask } from './task.model';

@Component({
  imports: [],
  selector: 'app-task',
  styleUrl: './task.css',
  templateUrl: './task.html',
})
export class Task {
  @Input({ required: true }) task!: ITask;
  @Output() complete = new EventEmitter<string>();

  onCompleteTask() {
    this.complete.emit(this.task.id);
  }
}
