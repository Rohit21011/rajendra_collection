import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PendingAmountPageRoutingModule } from './pending-amount-routing.module';

import { PendingAmountPage } from './pending-amount.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PendingAmountPageRoutingModule
  ],
  declarations: [PendingAmountPage]
})
export class PendingAmountPageModule {}
