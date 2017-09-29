import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UiAuthComponent } from './ui-auth.component';

describe('UiAuthComponent', () => {
  let component: UiAuthComponent;
  let fixture: ComponentFixture<UiAuthComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UiAuthComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UiAuthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
