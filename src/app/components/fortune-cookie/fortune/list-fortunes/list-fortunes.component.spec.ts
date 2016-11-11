/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ListFortunesComponent } from './list-fortunes.component';

describe('ListFortunesComponent', () => {
  let component: ListFortunesComponent;
  let fixture: ComponentFixture<ListFortunesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListFortunesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListFortunesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
