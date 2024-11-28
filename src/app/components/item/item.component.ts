import { Component, input } from '@angular/core';
import { DataEntry } from '../../core/interface/data-entrence';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-item',
  standalone: true,
  imports: [CommonModule,],
  templateUrl: './item.component.html',
  styleUrl: './item.component.scss'
})
export class ItemComponent {
public item = input.required<DataEntry>({});
}
