import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainlogoComponent } from './mainlogo.component';

describe('MainlogoComponent', () => {
  let component: MainlogoComponent;
  let fixture: ComponentFixture<MainlogoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainlogoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainlogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
