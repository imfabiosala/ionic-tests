import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-local-storage',
  templateUrl: './local-storage.page.html',
  styleUrls: ['./local-storage.page.scss'],
})

export class LocalStoragePage implements OnInit {

  storage: any;

  constructor() { }

  ngOnInit() {

    this.storage = localStorage.getItem('Test');

    if (this.storage !== null) {

      console.log('Chave Existe');

    } else {

      console.log('Chave Não Existe');

    };

  }

}
