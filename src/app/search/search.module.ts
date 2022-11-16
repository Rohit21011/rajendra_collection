import { NgModule } from '@angular/core';

import { SearchPageRoutingModule } from './search-routing.module';

import { SearchPage } from './search.page';
import { SharedModule } from '../shared-module/shared.module';

@NgModule({
  imports: [
      SharedModule,
    SearchPageRoutingModule
  ],
  declarations: [SearchPage]
})
export class SearchPageModule {}
