import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";



import { AppComponent } from './app.component';
import { LeftmenuComponent } from './leftmenu/leftmenu.component';
import { RightmenuComponent } from './rightmenu/rightmenu.component';
import { MainlogoComponent } from './mainlogo/mainlogo.component';
import { MainbugproductComponent } from './mainbugproduct/mainbugproduct.component';
import { UserloginComponent } from './userlogin/userlogin.component';
import {AppRoutesModule } from  './app-routes-module';
import { ContaktpageComponent } from './contaktpage/contaktpage.component';
import { InfoproductComponent } from './infoproduct/infoproduct.component';
import { AdminpageComponent } from './adminpage/adminpage.component'
import {itemService} from "./item.service";
import { FilterItemPipe } from './filter-item.pipe';
import { AboutUSComponent } from './about-us/about-us.component';
import { BagitemComponent } from './bagitem/bagitem.component';


@NgModule({
  declarations: [
    AppComponent,
    LeftmenuComponent,
    RightmenuComponent,
    MainlogoComponent,
    MainbugproductComponent,
    UserloginComponent,
    ContaktpageComponent,
    InfoproductComponent,
    AdminpageComponent,
    FilterItemPipe,
    AboutUSComponent,
    BagitemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutesModule

  ],
  providers: [itemService],
  bootstrap: [AppComponent]
})
export class AppModule {

}
