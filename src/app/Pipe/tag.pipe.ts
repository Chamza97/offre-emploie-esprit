import { Pipe, PipeTransform } from '@angular/core';
import {Offre} from "../Model/Offre";
import {Tag} from "../Model/Tag";

@Pipe({
  name: 'tag'
})
export class TagPipe implements PipeTransform {
  /**
   * Transform
   *
   *
   * @returns {string[]}
   * @param {Tag[]} items
   *
   */
  transform(items: Tag[]): string[] {
    if (!items) {
      return [];
    }
    return items.map((el) => el.value);
  }

}
