import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SellerDetailsPageRoutingModule } from './seller-details-routing.module';

import { SellerDetailsPage } from './seller-details.page';
import { SharedModule } from '../shared-module/shared.module';

@NgModule({
  imports: [
    SharedModule,
    SellerDetailsPageRoutingModule
  ],
  declarations: [SellerDetailsPage]
})
export class SellerDetailsPageModule {}
