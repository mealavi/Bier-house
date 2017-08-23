import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


const appRoutes:Routes=[
  {path:'',component:HomeComponent},
  {path:'contact',component:ContactComponent},
  {path:'not-found',component:PageNotFoundComponent},
  {path:'**',redirectTo:'not-found'}


]
@NgModule({
imports:[
  RouterModule.forRoot(appRoutes)
],
exports:[
  RouterModule
]

})


export class AppRoutingModule{


}
