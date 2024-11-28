import { Injectable, signal } from '@angular/core';
import { DataEntry, State } from '../../interface/data-entrence';
import { data } from '../../../../assets/testData'

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() {
    this.dataSignal.set(data);
  }

  readonly dataSignal = signal<DataEntry[]>([])
  readonly viewData = signal<DataEntry[]>([]);
  removeItem(item: DataEntry) { }
  addItem(item: DataEntry) { }
  reorderViewData(indexItem: DataEntry, movedItem:DataEntry){

  }

  changeState(item:DataEntry, state: State){}
}
