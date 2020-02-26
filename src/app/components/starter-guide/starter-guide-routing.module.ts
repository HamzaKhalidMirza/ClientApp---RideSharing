import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StarterGuidePage } from './starter-guide.page';

const routes: Routes = [
  {
    path: '',
    component: StarterGuidePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StarterGuidePageRoutingModule {}
