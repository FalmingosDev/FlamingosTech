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
import { WhyUsComponent } from './why-us/why-us.component';
import { OurTeamComponent } from './our-team/our-team.component';
import { CareersComponent } from './careers/careers.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { OurServicesComponent } from './our-services/our-services.component';
import { OurProjectsComponent } from './our-projects/our-projects.component';
import { OurClientsComponent } from './our-clients/our-clients.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';




@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    HomepageComponent,
    BannerComponent,
    SolutionsComponent,
    ProductsComponent,
    RequestDemoComponent,
    GetStarttedComponent,
    WhyUsComponent,
    OurTeamComponent,
    CareersComponent,
    AboutUsComponent,
    OurServicesComponent,
    OurProjectsComponent,
    OurClientsComponent,
    ContactUsComponent,

    
    
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SlickCarouselModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports:[
	HeaderComponent,
	FooterComponent,
  GetStarttedComponent,
  ]
})
export class HomeModule { }
