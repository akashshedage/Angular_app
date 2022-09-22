import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Ngswitch2Component } from './ngswitch2.component';

describe('Ngswitch2Component', () => {
  let component: Ngswitch2Component;
  let fixture: ComponentFixture<Ngswitch2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ngswitch2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ngswitch2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
