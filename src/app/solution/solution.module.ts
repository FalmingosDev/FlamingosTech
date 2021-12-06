import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeModule } from '../home/home.module';

import { SolutionRoutingModule } from './solution-routing.module';
import { AndroidIosComponent } from './android-ios/android-ios.component';
import { WebsiteComponent } from './website/website.component';
import { CloudComponent } from './cloud/cloud.component';
import { EcommerceComponent } from './ecommerce/ecommerce.component';
import { DigitalMarketingComponent } from './digital-marketing/digital-marketing.component';
import { DataManagementComponent } from './data-management/data-management.component';


@NgModule({
  declarations: [
    AndroidIosComponent,
    WebsiteComponent,
    CloudComponent,
    EcommerceComponent,
    DigitalMarketingComponent,
    DataManagementComponent
  ],
  imports: [
    CommonModule,
    SolutionRoutingModule,
	  HomeModule
  ]
})
export class SolutionModule { }
