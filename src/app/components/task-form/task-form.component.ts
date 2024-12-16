import { Component, inject } from '@angular/core';
import { DataService } from '../../core/service/data-service/data-service.service';
import { State } from '../../core/interface/data-entrence';
import { FormBuilder, FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-task-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './task-form.component.html',
  styleUrl: './task-form.component.scss',
})
export class TaskFormComponent {
  private dataService = inject(DataService);
  private fb = inject(FormBuilder);
  inputForm = this.fb.group({
    text: [''],
  });
  textChange(e: Event) {
    let ev = e as KeyboardEvent;
    console.log(ev.key)
    // this.inputForm.get('text')?.setValue();
  }
  addItem() {
    this.dataService.addItem({
      id: (new Date()).getTime().toString(),
      date: new Date(),
      state: State.new,
      text:this.inputForm.get('text')?.value ?? 'none',
    });
    console.log(this.inputForm.value);
  }
}
