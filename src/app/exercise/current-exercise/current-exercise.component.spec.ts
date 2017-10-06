import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentExerciseComponent } from './current-exercise.component';

describe('CurrentExerciseComponent', () => {
  let component: CurrentExerciseComponent;
  let fixture: ComponentFixture<CurrentExerciseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CurrentExerciseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrentExerciseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
