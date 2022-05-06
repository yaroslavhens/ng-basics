import {Component, OnInit} from '@angular/core';
import {itemService} from "./item.service";

interface its {
  id:number,
  name:string,
  info:string,
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [itemService]
})


export class AppComponent implements OnInit {



 it:its[]=[
 ];
constructor(private itemService:itemService) {
}
  ngOnInit() {
  this.itemService
    .getItem()
    .subscribe(( itemss:any)=> {
      this.it = itemss;
    })
  }

}
