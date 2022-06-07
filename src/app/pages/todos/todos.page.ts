/* eslint-disable @typescript-eslint/member-ordering */
import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides } from '@ionic/angular';
@Component({
  selector: 'app-todos',
  templateUrl: './todos.page.html',
  styleUrls: ['./todos.page.scss'],
})
export class TodosPage implements OnInit {
  private segmentHeader: Array<string> = ['Assigned', 'Missing', 'Done'];
  private selectedSegment: string;
  private slideList: Array<string> = ['Assigned', 'Missing', 'Done'];
  @ViewChild('slide') slide: IonSlides;
  constructor() {
    this.selectedSegment = this.segmentHeader[0];
  }

  ngOnInit() {}
  segmentChanged(ev: any, index: any) {
    // console.log('Segment changed', ev, index);
  }

  _segmentSelected(item: string, index: number) {
    // console.log(item, index);
    this.slide.slideTo(index);
  }

  _ionSlideDidChange(event: any) {
    // console.log(event)
    this.slide.getActiveIndex().then(index => {
      // console.log(index)
      this.selectedSegment = this.segmentHeader[index];
    });
  }
}
