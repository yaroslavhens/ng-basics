import { Component, OnInit } from '@angular/core';
import  {itemService} from "../item.service";


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
  selector: '[app-adminpage]',
  templateUrl: './adminpage.component.html',
  styleUrls: ['./adminpage.component.scss'],
  providers: [itemService]
})
export class AdminpageComponent implements OnInit {

  itemArtucl: string = "";
  itemName: string = "";
  itemImage: string = "";
  itemWeight: string = "";
  itemPrice: string = "";
  itemAvail: string = "";
  itemProducent: string = "";
  itemInfo: string = "";

  constructor(private itemService: itemService) {
  }
  itemSearch=""
  item: its[] = [];

  ngOnInit() {
    this.itemService
      .getItem()
      .subscribe((item: any) => {
        this.item = item;
      })
  }

  additem() {
    this.itemService.additem(this.itemArtucl, this.itemName, this.itemImage, this.itemWeight, this.itemPrice,
      this.itemAvail, this.itemProducent, this.itemInfo,
    ).subscribe((data) => {
      this.item.push(data);
    });
    this.itemArtucl = "";
    this.itemName = "";
    this.itemImage = "";
    this.itemWeight = "";
    this.itemPrice = "";
    this.itemAvail = "";
    this.itemProducent = "";
    this.itemInfo = "";
  }

  deleteitem(items: any) {
    this.itemService.deleteitem(items).subscribe((item: any) => {
      this.item = this.item.filter(c => c.id !== items.id);
    });
  }
}
