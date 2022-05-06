import { Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";

@Injectable()
export class itemService {
constructor(private http:HttpClient) {
}
  getItem() {
   return this.http.get('http://localhost:3000/item');
};
 additem(itemArtcul:string,itemName:string,itemImage:string,itemWeight:string,
         itemPrice:string,itemAvail:string,itemProducent:string,itemInfo:string){
   const data = {
     id:"",
     artucl: itemArtcul,
     name: itemName,
     image: itemImage,
     weight: itemWeight,
     price: itemPrice,
     availability: itemAvail,
     producent: itemProducent,
     info: itemInfo
   }
  return this.http.post<any>('http://localhost:3000/item', data)
  };

  deleteitem(key:any) {
    return this.http.delete('http://localhost:3000/item/'+key.id)
  }
}
