import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MissionSectionComponent } from './mission-section.component';

describe('MissionSectionComponent', () => {
  let component: MissionSectionComponent;
  let fixture: ComponentFixture<MissionSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MissionSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MissionSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
