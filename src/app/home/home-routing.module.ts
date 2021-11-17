import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CareersComponent } from './careers/careers.component';
import { HomepageComponent } from './homepage/homepage.component';
import { OurTeamComponent } from './our-team/our-team.component';
import { RequestDemoComponent } from './request-demo/request-demo.component';
import { WhyUsComponent } from './why-us/why-us.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { OurServicesComponent } from './our-services/our-services.component';
import { OurProjectsComponent } from './our-projects/our-projects.component';
import { OurClientsComponent } from './our-clients/our-clients.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
// import { NotFoundComponent } from './not-found/not-found.component';
 
const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'demo', component: RequestDemoComponent },
  { path: 'why-us', component: WhyUsComponent },
  { path: 'our-team', component: OurTeamComponent },
  { path: 'careers', component: CareersComponent },
  { path: 'about', component: AboutUsComponent },
  { path: 'services', component: OurServicesComponent },
  { path: 'projects', component: OurProjectsComponent },
  { path: 'clients', component: OurClientsComponent },
  { path: 'contact-us', component: ContactUsComponent },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
