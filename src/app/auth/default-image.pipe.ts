import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'defaultImage'
})
export class DefaultImagePipe implements PipeTransform {

  transform(value: any, ...args: unknown[]): unknown {
    if(!value){
      return '/assets/img/avatarLogin.jpg'
    }else {
      return value
    }
  }

}
