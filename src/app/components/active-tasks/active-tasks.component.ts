import { Component, inject } from '@angular/core';
import { DataService } from '../../core/service/data-service/data-service.service';
import { ItemComponent } from "../item/item.component";

@Component({
  selector: 'app-active-tasks',
  standalone: true,
  imports: [ItemComponent],
  templateUrl: './active-tasks.component.html',
  styleUrl: './active-tasks.component.scss',
})
export class ActiveTasksComponent {
  private ds = inject(DataService);
  data = this.ds.active();
}
