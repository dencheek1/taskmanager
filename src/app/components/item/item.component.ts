import { Component, input } from '@angular/core';
import { DataEntry } from '../../core/interface/data-entrence';
import { CommonModule } from '@angular/common';
import { LengthPipe } from '../../shared/pipes/length.pipe';

@Component({
  selector: 'app-item',
  standalone: true,
  imports: [CommonModule, LengthPipe],
  templateUrl: './item.component.html',
  styleUrl: './item.component.scss'
})
export class ItemComponent {
public item = input.required<DataEntry>({});
}
