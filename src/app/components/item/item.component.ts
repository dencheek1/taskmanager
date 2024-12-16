import { Component, EventEmitter, inject, input, Output } from '@angular/core';
import { DataEntry, State } from '../../core/interface/data-entrence';
import { CommonModule } from '@angular/common';
import { LengthPipe } from '../../shared/pipes/length.pipe';
import { DataService } from '../../core/service/data-service/data-service.service';

@Component({
  selector: 'app-item',
  standalone: true,
  imports: [CommonModule, LengthPipe],
  templateUrl: './item.component.html',
  styleUrl: './item.component.scss',
})
export class ItemComponent {
  private ds = inject(DataService);
  public ln = input<number>(300);
  public item = input.required<DataEntry>({});
  @Output() activate = new EventEmitter<string>();
  removeItem() {
    this.ds.removeItem(this.item());
  }
  makeActive() {
    // this.ds.changeState(this.item(), State.active);
    this.activate.emit(this.item().id);
  }
}
