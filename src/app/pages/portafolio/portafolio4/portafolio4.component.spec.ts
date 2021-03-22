import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Portafolio4Component } from './portafolio4.component';

describe('Portafolio4Component', () => {
  let component: Portafolio4Component;
  let fixture: ComponentFixture<Portafolio4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Portafolio4Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Portafolio4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
