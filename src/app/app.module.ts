// import { HttpClientModule } from '@angular/common/http';
// import { NgModule } from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser';
// import { SlickCarouselModule } from 'ngx-slick-carousel';
// import { AppRoutingModule } from './app-routing.module';
// import { AppComponent } from './app.component';
// import { HomeModule } from './home/home.module';
// import { PageNotFoundModule } from './page-not-found/page-not-found.module';
// import { ProductsModule } from './products/products.module';
// import { SolutionModule } from './solution/solution.module';

 
// @NgModule({
//   declarations: [
//     AppComponent
//   ],
//   imports: [
//     BrowserModule,
//     AppRoutingModule,
//     HomeModule,
//     ProductsModule,
//     SolutionModule,
//     PageNotFoundModule,
//     SlickCarouselModule,
//     HttpClientModule
//   ],
//   providers: [],
//   bootstrap: [AppComponent]
// })
// export class AppModule { }
/////////////////////////////////////////////////////////////////

import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { SlickCarouselModule } from 'ngx-slick-carousel';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeModule } from './home/home.module';
import { SolutionModule } from './solution/solution.module';
// import { PageNotFoundModule } from './page-not-found/page-not-found.module';
import { ProductsModule } from './products/products.module';
   
const routes: Routes = [
  { path: '', component: AppComponent },//
];
   
@NgModule({
  imports:
      [   BrowserModule, 
        RouterModule.forRoot(routes),//
        AppRoutingModule,
        HomeModule,
        SlickCarouselModule,
        SolutionModule,
        HttpClientModule,
        ProductsModule
       ],
  declarations: [ AppComponent ],
  providers: [],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }

