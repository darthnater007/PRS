import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutclassComponent } from './aboutclass.component';

describe('AboutclassComponent', () => {
  let component: AboutclassComponent;
  let fixture: ComponentFixture<AboutclassComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutclassComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutclassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
