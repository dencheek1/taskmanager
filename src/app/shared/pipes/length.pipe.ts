import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'length',
  standalone: true
})
export class LengthPipe implements PipeTransform {

  transform(value: string, args: number): unknown {
    return value.length > args ? value.slice(0,args - 3) +'...': value;
  }

}
