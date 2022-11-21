import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChangeSalesPasswordPage } from './change-sales-password.page';

const routes: Routes = [
  {
    path: '',
    component: ChangeSalesPasswordPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChangeSalesPasswordPageRoutingModule {}
