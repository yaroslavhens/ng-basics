import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterItem'
})
export class FilterItemPipe implements PipeTransform {

  transform(itemList:any, seachStr:string){
    if (itemList.lenght === 0 || seachStr === '') {
      return itemList;
    }
    return  itemList.filter((items: { name: string; })=>items.name.toLowerCase().indexOf(seachStr.toLocaleLowerCase())!==-1);
  }
}
