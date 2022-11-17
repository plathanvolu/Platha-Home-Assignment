import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Reports3Component } from './reports3.component';

describe('Reports3Component', () => {
  let component: Reports3Component;
  let fixture: ComponentFixture<Reports3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Reports3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Reports3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
