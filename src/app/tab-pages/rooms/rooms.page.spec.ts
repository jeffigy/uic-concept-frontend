import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { AppRoutingModule } from 'src/app/app-routing.module';

import { RoomsPage } from './rooms.page';

describe('RoomsPage', () => {
  let component: RoomsPage;
  let fixture: ComponentFixture<RoomsPage>;
  let router: Router;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ RoomsPage ],
      imports: [IonicModule.forRoot(), AppRoutingModule]
    }).compileComponents();

    fixture = TestBed.createComponent(RoomsPage);
    component = fixture.componentInstance;
    router = TestBed.get(Router);
  }));

  it('should navigate to todos page', () => {
    spyOn(router, 'navigate');
    // expect(component).toBeTruthy();
    component.todos();
    expect(router.navigate).toHaveBeenCalledOnceWith(['todos']);
  });
  it('should navigate to timetable page', () => {
    spyOn(router, 'navigate');
    // expect(component).toBeTruthy();
    component.timetable();
    expect(router.navigate).toHaveBeenCalledOnceWith(['timetable']);
  });
});
