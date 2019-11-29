import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TopBarComponent} from './top-bar/topbar.component';
import {FooterComponent} from './footer/footer.component'


const routes: Routes = [
  {path: './top-bar/topbar.component',component: TopBarComponent},
  {path: './footer/footer.component',component: FooterComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)] ,
  exports: [RouterModule],

})
export class AppRoutingModule { }
