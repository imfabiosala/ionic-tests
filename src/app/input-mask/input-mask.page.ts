import { Component, OnInit } from '@angular/core';

import { MaskitoElementPredicateAsync, MaskitoOptions } from '@maskito/core';

import { maskitoNumberOptionsGenerator } from '@maskito/kit';

@Component({
  selector: 'app-input-mask',
  templateUrl: './input-mask.page.html',
  styleUrls: ['./input-mask.page.scss'],
})

export class InputMaskPage implements OnInit {

  readonly phoneNumber: string = '27999999999';
  readonly zipcode: string = '29700000';
  readonly date: string = '03092023';
  readonly hour: string = '1635';
  readonly weight: number = 1295.589;

  readonly predicate: MaskitoElementPredicateAsync = async (el) => (el as HTMLIonInputElement).getInputElement();
  
  readonly phoneNumberMask: MaskitoOptions = { mask: ['(', /\d/, /\d/, ')',  ' ', /\d/, ' ', /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/] };
  readonly zipcodeMask: MaskitoOptions = { mask: [/\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/] };
  readonly dateMask: MaskitoOptions = { mask: [/\d/, /\d/, '/', /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/] };
  readonly hourMask: MaskitoOptions = { mask: [/\d/, /\d/, ':', /\d/, /\d/] };
  readonly weightMask = maskitoNumberOptionsGenerator({ decimalSeparator: ',', precision: 3, decimalZeroPadding: true });

  constructor() { }

  ngOnInit() { }

}
