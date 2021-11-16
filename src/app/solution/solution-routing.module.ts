import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AndroidIosComponent } from './android-ios/android-ios.component';
import { CloudComponent } from './cloud/cloud.component';
import { DataManagementComponent } from './data-management/data-management.component';
import { DigitalMarketingComponent } from './digital-marketing/digital-marketing.component';
import { EcommerceComponent } from './ecommerce/ecommerce.component';
import { WebsiteComponent } from './website/website.component';

const routes: Routes = [
	{path: 'cloud', component:CloudComponent},
	{path: 'android-ios', component:AndroidIosComponent},
	{path: 'website', component:WebsiteComponent},
	{path: 'data-management', component:DataManagementComponent},
	{path: 'ecommerce', component:EcommerceComponent},
	{path: 'digital-marketing', component:DigitalMarketingComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SolutionRoutingModule { }
