import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TopBarComponent} from './top-bar/topbar.component';
import {FooterComponent} from './footer/footer.component';
import {ProductsComponent} from './products/products.component';
import {HombresComponent } from './hombres/hombres.component';
import { MainComponent } from './main.component'


const routes: Routes = [
  {path: 'topbar',component: TopBarComponent, children :
  [
    {path: 'products',component: ProductsComponent},
    {path: 'hombres',component: HombresComponent},
    {path: 'main',component: MainComponent},
  ]
  },

// {path: 'hombres',component: HombresComponent},
{path: 'footer',component: FooterComponent},
];

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ]
})
export class AppRoutingModule {}
