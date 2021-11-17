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
  { path: 'out-of-home', component: OohComponent },
  { path: 'ecom-manage', component: EcomManageComponent }, 
  { path: 'st-retail', component: StRetailComponent },
  { path: 'retail-chain', component: RetailChainComponent },
  { path: 'rms', component: RmsComponent },
  { path: 'property-management-system', component: PmsComponent },
  { path: 'pos-management-system', component: PosComponent },
  { path: 'online-market-place', component: OnlineMarketComponent },
  { path: 'online-examination-management', component: OnlineExaminationComponent },
  { path: 'market-survey-management', component: MarketSurveyComponent },
  { path: 'fleet-employee-management', component: FleetManageComponent },
  { path: 'turnkey-projects', component: TurnkeyProjectsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
