import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainingSetFormComponent } from './training-set-form.component';

describe('TrainingSetFormComponent', () => {
  let component: TrainingSetFormComponent;
  let fixture: ComponentFixture<TrainingSetFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrainingSetFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrainingSetFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
