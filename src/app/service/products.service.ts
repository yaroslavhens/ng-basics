import { Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {BehaviorSubject, Subject, filter} from "rxjs";

export interface ProductI {
  id: string;
  artucl: string;
  name: string;
  image: string;
  weight: string;
  price: string;
  availability: string;
  producent: string;
  info: string;
}

@Injectable()
export class ProductsService {
   products:Subject<ProductI[]>=new BehaviorSubject<ProductI[]>([]);
   basicUrl:string='http://localhost:3000'


  constructor(private http:HttpClient) {
  }
  getProducts() {
    this.http.get(`${this.basicUrl}/item`).subscribe(
      (data:any)=>{
        this.products.next(data);
      }, (eror:any)=>{
        this.products.next([]);}
    )
  }
  filterArt(Artucl:string) {
     return this.products.pipe(
       filter((product => product.artucl === Artucl ))
     )

  }
}
