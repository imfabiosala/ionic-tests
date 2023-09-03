import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MaskitoModule } from '@maskito/angular';

import { InputMaskPageRoutingModule } from './input-mask-routing.module';

import { InputMaskPage } from './input-mask.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MaskitoModule,
    InputMaskPageRoutingModule
  ],
  declarations: [InputMaskPage]
})

export class InputMaskPageModule { }
