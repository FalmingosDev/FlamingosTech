import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomepageComponent } from './homepage/homepage.component';
import { BannerComponent } from './banner/banner.component';
import { SolutionsComponent } from './solutions/solutions.component';
import { ProductsComponent } from './products/products.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { RequestDemoComponent } from './request-demo/request-demo.component';
import { GetStarttedComponent } from './get-startted/get-startted.component';


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    HomepageComponent,
    BannerComponent,
    SolutionsComponent,
    ProductsComponent,
    RequestDemoComponent,
    GetStarttedComponent
    
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SlickCarouselModule
  ],
  exports:[
    HeaderComponent,
    FooterComponent
  ]
})
export class HomeModule { }
