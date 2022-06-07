import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-account',
  templateUrl: './account.page.html',
  styleUrls: ['./account.page.scss'],
})
export class AccountPage {
  constructor(private router: Router) {}
  academics(){
    this.router.navigate(['academics']);
  }
  dtr(){
    this.router.navigate(['dtr']);
  }
  clearance(){
    this.router.navigate(['clearance']);
  }
  financial(){
    this.router.navigate(['financial']);
  }
  enrolment(){
    this.router.navigate(['enrolment']);
  }
  election(){
    this.router.navigate(['election']);
  }
  evaluation(){
    this.router.navigate(['evaluation']);
  }
  schedule(){
    this.router.navigate(['schedule']);
  }
}
