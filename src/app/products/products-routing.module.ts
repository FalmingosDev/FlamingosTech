import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EcomManageComponent } from './ecom-manage/ecom-manage.component';
import { OohComponent } from './ooh/ooh.component';
import { StRetailComponent } from './st-retail/st-retail.component';
import { RetailChainComponent } from './retail-chain/retail-chain.component';
import { RmsComponent } from './rms/rms.component';
import { PmsComponent } from './pms/pms.component';
import { PosComponent } from './pos/pos.component';
import { OnlineMarketComponent } from './online-market/online-market.component';
import { OnlineExaminationComponent } from './online-examination/online-examination.component';
import { MarketSurveyComponent } from './market-survey/market-survey.component';
import { FleetManageComponent } from './fleet-manage/fleet-manage.component';
import { TurnkeyProjectsComponent } from './turnkey-projects/turnkey-projects.component';



const routes: Routes = [
  { path: 'products/out-of-home', component: OohComponent },
  { path: 'products/ecom-manage', component: EcomManageComponent },
  { path: 'products/st-retail', component: StRetailComponent },
  { path: 'products/retail-chain', component: RetailChainComponent },
  { path: 'products/rms', component: RmsComponent },
  { path: 'products/property-management-system', component: PmsComponent },
  { path: 'products/pos-management-system', component: PosComponent },
  { path: 'products/online-market-place', component: OnlineMarketComponent },
  { path: 'products/online-examination-management', component: OnlineExaminationComponent },
  { path: 'products/market-survey-management', component: MarketSurveyComponent },
  { path: 'products/fleet-employee-management', component: FleetManageComponent },
  { path: 'products/turnkey-projects', component: TurnkeyProjectsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
