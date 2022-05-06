import {NgModule} from "@angular/core";
import {UserloginComponent} from "./userlogin/userlogin.component";
import {MainbugproductComponent} from "./mainbugproduct/mainbugproduct.component";
import {Routes, RouterModule} from "@angular/router";
import {InfoproductComponent} from "./infoproduct/infoproduct.component";
import {AdminpageComponent} from "./adminpage/adminpage.component";
import  {AboutUSComponent} from "./about-us/about-us.component";
import {BagitemComponent} from "./bagitem/bagitem.component";
import {ContaktpageComponent} from "./contaktpage/contaktpage.component";

const appRoutes: Routes = [
  { path:'contact', component: ContaktpageComponent},
  { path:'bag', component: BagitemComponent},
  { path:'about-us', component: AboutUSComponent},
  { path:'loginuser', component: UserloginComponent},
  { path:'home', component: MainbugproductComponent},
  { path:'home/:id/:image/:name/:artucl/:info', component: InfoproductComponent },
  { path:'admin', component: AdminpageComponent },

];


@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})


export class AppRoutesModule {}
