import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutfeComponent } from './aboutfe.component';

describe('AboutfeComponent', () => {
  let component: AboutfeComponent;
  let fixture: ComponentFixture<AboutfeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutfeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutfeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
