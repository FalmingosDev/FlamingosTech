import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeModule } from '../home/home.module';

import { ProductsRoutingModule } from './products-routing.module';
import { OohComponent } from './ooh/ooh.component';
import { EcomManageComponent } from './ecom-manage/ecom-manage.component';
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


@NgModule({
  declarations: [
    OohComponent,
    EcomManageComponent,
    StRetailComponent,
    RetailChainComponent,
    RmsComponent,
    PmsComponent,
    PosComponent,
    OnlineMarketComponent,
    OnlineExaminationComponent,
    MarketSurveyComponent,
    FleetManageComponent,
    TurnkeyProjectsComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
	HomeModule
  ]
})
export class ProductsModule { }
