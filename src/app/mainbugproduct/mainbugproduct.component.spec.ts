import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainbugproductComponent } from './mainbugproduct.component';

describe('MainbugproductComponent', () => {
  let component: MainbugproductComponent;
  let fixture: ComponentFixture<MainbugproductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainbugproductComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainbugproductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
