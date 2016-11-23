/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MyfortuneViewComponent } from './myfortune-view.component';

describe('MyfortuneViewComponent', () => {
  let component: MyfortuneViewComponent;
  let fixture: ComponentFixture<MyfortuneViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyfortuneViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyfortuneViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
