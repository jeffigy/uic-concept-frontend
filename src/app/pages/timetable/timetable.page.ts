/* eslint-disable @typescript-eslint/member-ordering */
import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides } from '@ionic/angular';

@Component({
  selector: 'app-timetable',
  templateUrl: './timetable.page.html',
  styleUrls: ['./timetable.page.scss'],
})
export class TimetablePage implements OnInit {
  private segmentHeader: Array<string> = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  private selectedSegment: string;
  private slideList: Array<string> = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
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
