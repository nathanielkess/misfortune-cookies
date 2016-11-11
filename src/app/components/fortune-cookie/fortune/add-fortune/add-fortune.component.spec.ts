/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AddFortuneComponent } from './add-fortune.component';

describe('AddFortuneComponent', () => {
  let component: AddFortuneComponent;
  let fixture: ComponentFixture<AddFortuneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddFortuneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddFortuneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
