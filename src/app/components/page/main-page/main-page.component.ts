import { Component } from '@angular/core';
import { TaskFormComponent } from "../../task-form/task-form.component";
import { TaskListComponent } from "../../task-list/task-list.component";
import { ActiveTasksComponent } from "../../active-tasks/active-tasks.component";
import { TaskWidgetComponent } from "../../task-widget/task-widget.component";

@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [ActiveTasksComponent, TaskWidgetComponent],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.scss'
})
export class MainPageComponent {

}
