import { Pipe, PipeTransform } from '@angular/core';
import {Offre} from "../Model/Offre";

@Pipe({ name: 'appFilter' })
export class FilterPipe implements PipeTransform {
  /**
   * Transform
   *
   * @param {Offre[]} items
   * @param {string} searchText
   * @returns {Offre[]}
   */
  transform(items: Offre[], searchText: string): Offre[] {
    if (!items) {
      return [];
    }
    if (!searchText) {
      return items;
    }
    searchText = searchText.toLocaleLowerCase();

    return items.filter(it => {
      return it.titre.toLocaleLowerCase().includes(searchText);
    });
  }
}
