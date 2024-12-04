import { computed, Injectable, signal } from '@angular/core';
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
  removeItem(item: DataEntry) { 
    let data = [...this.dataSignal()];
    data.splice(data.indexOf(item),1);
   this.dataSignal.set(data); 
  }

  addItem(item: DataEntry) {
    let data = [item, ...this.dataSignal() ];
    this.dataSignal.set(data);
   }

  reorderViewData(indexItem: DataEntry, movedItem:DataEntry){

  }

  changeState(item:DataEntry, state: State){
    this.removeItem(item);
    let it = item;
    it.state = state;
    this.addItem(item);
  }

  getActive(){
    return computed(() => this.dataSignal().filter( el => el.state == State.active));
  }

 getInactive(){
  return computed(() => this.dataSignal().filter( el => el.state != State.active));
 }
}
