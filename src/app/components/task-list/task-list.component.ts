import { Component, EventEmitter, Output } from '@angular/core';
import { DataService } from '../../core/service/data-service/data-service.service';
import { ItemComponent } from "../item/item.component";

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [ItemComponent],
  providers:[],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.scss'
})
export class TaskListComponent {
constructor( private ds: DataService){}

data = this.ds.getInactive();

@Output('activate') activateEvent = new EventEmitter<string>();

  activate(id: string){
    this.activateEvent.emit(id);
  }

}
