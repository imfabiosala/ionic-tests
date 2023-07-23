import { Component, OnInit, QueryList, ViewChildren } from '@angular/core';

import { IonInput } from '@ionic/angular';

@Component({
  selector: 'app-skip-field',
  templateUrl: './skip-field.page.html',
  styleUrls: ['./skip-field.page.scss'],
})

export class SkipFieldPage implements OnInit {

  @ViewChildren(IonInput) inputFields!: QueryList<IonInput>;

  inputMaxLength = 5;

  constructor() { }

  ngOnInit() { }

  onInput(event: any, id: number) {

    let input = event.target;

    if (input.value.length >= this.inputMaxLength) {

      let nextInputIndex = id + 1;

      if (nextInputIndex < this.inputFields.length) {

        this.inputFields.toArray()[nextInputIndex].setFocus();

      };

    };
    
  };

}
