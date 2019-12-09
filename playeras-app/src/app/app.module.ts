import { BrowserModule } from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {BreadcrumbModule} from 'angular-crumbs';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule  } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';
import { TopBarComponent } from './top-bar/topbar.component';
import {FooterComponent} from './footer/footer.component';
import { HombresComponent } from './hombres/hombres.component';
import { RouterModule } from '@angular/router';
import { MainComponent } from './main.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    TopBarComponent,
    FooterComponent,
    HombresComponent,
    MainComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    [NgbModule],
    BrowserModule,
    BreadcrumbModule,
    RouterModule.forRoot([
      { path: 'main',component: MainComponent},
      { path: 'hombres', component: HombresComponent },
      { path: 'productos',component: ProductsComponent, data: { breadcrumb: 'productos'}},
    ])
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
