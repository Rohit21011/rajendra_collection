import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BuyerDetailsPageRoutingModule } from './buyer-details-routing.module';

import { BuyerDetailsPage } from './buyer-details.page';
import { SharedModule } from '../shared-module/shared.module';

@NgModule({
  imports: [
    SharedModule,
    BuyerDetailsPageRoutingModule,
  ],
  declarations: [BuyerDetailsPage]
})
export class BuyerDetailsPageModule {}
