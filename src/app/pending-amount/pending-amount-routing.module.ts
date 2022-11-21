import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PendingAmountPage } from './pending-amount.page';

const routes: Routes = [
  {
    path: '',
    component: PendingAmountPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PendingAmountPageRoutingModule {}
