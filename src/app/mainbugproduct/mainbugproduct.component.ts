import {Component, OnInit} from '@angular/core';
import {itemService} from "../item.service";



interface its {
  id:number,
  artucl:number,
  name:string,
  image:string,
  weight:number,
  price:number,
  availability:string,
  producent:string,
  coments:string,
  info:string,
}


@Component({
  selector: '[app-mainbugproduct]',
  templateUrl: './mainbugproduct.component.html',
  styleUrls: ['./mainbugproduct.component.scss'],
  providers: [itemService]
})
export class MainbugproductComponent implements OnInit {

  constructor(private itemService:itemService) {
  }
   filterone:its[]=[];
  itemSearch = ""
  it:its[]=[];


  ngOnInit() {
    this.itemService
      .getItem()
      .subscribe(( item:any)=> {
        this.it = item;
      })
  }
}
