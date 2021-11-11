import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { RequestDemoComponent } from './request-demo/request-demo.component';

const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'demo', component: RequestDemoComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
