import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.page.html',
  styleUrls: ['./rooms.page.scss'],
})
export class RoomsPage {
  constructor(private router: Router) {}
  todos() {
    this.router.navigate(['todos']);
  }
  timetable() {
    this.router.navigate(['timetable']);
  }
}
