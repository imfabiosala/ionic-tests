import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-segment',
  templateUrl: './segment.page.html',
  styleUrls: ['./segment.page.scss'],
})

export class SegmentPage implements OnInit {

  selectedSegment: string = 'header';

  constructor() { }

  ngOnInit() { }

  onSlideChange(event: any) {

    if (this.selectedSegment === 'header') {

      this.selectedSegment = 'items';

    } else {

      this.selectedSegment = 'header';

    };

  };

}
