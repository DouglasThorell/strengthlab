import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SessionTitleComponent } from './session-title.component';

describe('SessionTitleComponent', () => {
  let component: SessionTitleComponent;
  let fixture: ComponentFixture<SessionTitleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SessionTitleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SessionTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
