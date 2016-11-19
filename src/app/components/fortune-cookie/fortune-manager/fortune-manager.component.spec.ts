import { FortuneManagerModule } from './fortune-manager.module';
import { FortuneManagerComponent } from './fortune-manager.component';
import { RouterTestingModule } from '@angular/router/testing';
/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';


describe('FortuneComponent', () => {
  let component: FortuneManagerComponent;
  let fixture: ComponentFixture<FortuneManagerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        FortuneManagerComponent 
      ],
      imports:[
        FortuneManagerModule,
        RouterTestingModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FortuneManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
