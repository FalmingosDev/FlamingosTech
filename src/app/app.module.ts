import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeModule } from './home/home.module';
import { SolutionModule } from './solution/solution.module';
import { ProductsModule } from './products/products.module';
const routes: Routes = [
  { path: '', component: AppComponent }
];

@NgModule({
  imports:
    [BrowserModule,
      RouterModule.forRoot(routes, { useHash: true }),//
      AppRoutingModule,
      HomeModule,
      SlickCarouselModule,
      SolutionModule,
      HttpClientModule,
      ProductsModule
    ],
  declarations: [AppComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

