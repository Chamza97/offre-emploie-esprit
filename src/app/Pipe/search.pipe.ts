import { Pipe, PipeTransform } from '@angular/core';
import {Offre} from "../Model/Offre";

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(items: Offre[], skill:string, experience :string, location:string, contrat :string):  Offre[] {
    if (!items) {
      return [];
    }
  }

}
