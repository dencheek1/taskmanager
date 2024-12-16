import { Component, inject, signal } from '@angular/core';
import { TaskListComponent } from '../task-list/task-list.component';
import { TaskFormComponent } from '../task-form/task-form.component';
import { DataService } from '../../core/service/data-service/data-service.service';
import { State } from '../../core/interface/data-entrence';

@Component({
  selector: 'app-task-widget',
  standalone: true,
  imports: [TaskListComponent, TaskFormComponent],
  templateUrl: './task-widget.component.html',
  styleUrl: './task-widget.component.scss',
})
export class TaskWidgetComponent {
  state = signal<Boolean>(false);
private ds = inject(DataService);

  toggleForm() {
    this.state.set(!this.state());
  }

  activateItem(id:string){
    this.ds.changeStateId(id, State.active);
    console.log(id);
    console.log(this.ds.getById(id));
  }
}
