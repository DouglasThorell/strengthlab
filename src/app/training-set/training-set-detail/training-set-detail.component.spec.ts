import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainingSetDetailComponent } from './training-set-detail.component';

describe('TrainingSetDetailComponent', () => {
  let component: TrainingSetDetailComponent;
  let fixture: ComponentFixture<TrainingSetDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrainingSetDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrainingSetDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
