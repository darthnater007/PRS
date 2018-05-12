import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutbeComponent } from './aboutbe.component';

describe('AboutbeComponent', () => {
  let component: AboutbeComponent;
  let fixture: ComponentFixture<AboutbeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutbeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutbeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
