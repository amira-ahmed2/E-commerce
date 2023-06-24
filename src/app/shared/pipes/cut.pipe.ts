import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cut'
})
export class CutPipe implements PipeTransform {

  transform(desc:string,n:number): unknown {
    return desc.substring(0,n);
  }
}
