import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TopBarComponent} from './top-bar/topbar.component'


const routes: Routes = [
  {path: './top-bar/topbar.component',component: TopBarComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)] ,
  exports: [RouterModule],

})
export class AppRoutingModule { }
