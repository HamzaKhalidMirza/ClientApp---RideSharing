import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StarterGuidePageRoutingModule } from './starter-guide-routing.module';

import { StarterGuidePage } from './starter-guide.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StarterGuidePageRoutingModule
  ],
  declarations: [StarterGuidePage]
})
export class StarterGuidePageModule {}
