import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SkipFieldPageRoutingModule } from './skip-field-routing.module';

import { SkipFieldPage } from './skip-field.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SkipFieldPageRoutingModule
  ],
  declarations: [SkipFieldPage]
})
export class SkipFieldPageModule {}
