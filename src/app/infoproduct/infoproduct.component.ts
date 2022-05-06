import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-infoproduct',
  templateUrl: './infoproduct.component.html',
  styleUrls: ['./infoproduct.component.scss']
})



export class InfoproductComponent implements OnInit {


  id="";
  image="";
  name="";
  artucl="";
  info="";
  price="";
  constructor(private route: ActivatedRoute) {
  }



  ngOnInit() {
    this.price=this.route.snapshot.params["price"];
    this.id=this.route.snapshot.params["id"];
    this.image=this.route.snapshot.params["image"];
    this.name=this.route.snapshot.params["name"];
    this.artucl=this.route.snapshot.params["artucl"];
    this.info=this.route.snapshot.params["info"];

  }

}
