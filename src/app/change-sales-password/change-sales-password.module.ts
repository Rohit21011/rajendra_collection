import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChangeSalesPasswordPageRoutingModule } from './change-sales-password-routing.module';

import { ChangeSalesPasswordPage } from './change-sales-password.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChangeSalesPasswordPageRoutingModule
  ],
  declarations: [ChangeSalesPasswordPage]
})
export class ChangeSalesPasswordPageModule {}
