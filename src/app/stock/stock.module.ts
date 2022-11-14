import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StockPageRoutingModule } from './stock-routing.module';

import { StockPage } from './stock.page';
import { SharedModule } from '../shared-module/shared.module';

@NgModule({
  imports: [
    SharedModule,
    StockPageRoutingModule
  ],
  declarations: [StockPage]
})
export class StockPageModule {}
