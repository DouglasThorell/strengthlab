import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainingSetListComponent } from './training-set-list.component';

describe('TrainingSetListComponent', () => {
  let component: TrainingSetListComponent;
  let fixture: ComponentFixture<TrainingSetListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrainingSetListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrainingSetListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
