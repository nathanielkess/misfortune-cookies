import { FortuneModule } from './../../fortune-cookie/fortune/fortune.module';
/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { FortuneComponent } from './fortune.component';

describe('FortuneComponent', () => {
  let component: FortuneComponent;
  let fixture: ComponentFixture<FortuneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        FortuneComponent 
      ],
      imports:[
        FortuneModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FortuneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
