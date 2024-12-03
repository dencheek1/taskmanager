import { Component, signal } from '@angular/core';
import { TaskListComponent } from '../task-list/task-list.component';
import { TaskFormComponent } from '../task-form/task-form.component';

@Component({
  selector: 'app-task-widget',
  standalone: true,
  imports: [TaskListComponent, TaskFormComponent],
  templateUrl: './task-widget.component.html',
  styleUrl: './task-widget.component.scss',
})
export class TaskWidgetComponent {
  state = signal<Boolean>(false);
  toggleForm() {
    this.state.set(!this.state());
  }
}
