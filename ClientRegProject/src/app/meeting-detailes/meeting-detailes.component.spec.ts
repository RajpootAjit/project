import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeetingDetailesComponent } from './meeting-detailes.component';

describe('MeetingDetailesComponent', () => {
  let component: MeetingDetailesComponent;
  let fixture: ComponentFixture<MeetingDetailesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MeetingDetailesComponent]
    });
    fixture = TestBed.createComponent(MeetingDetailesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
