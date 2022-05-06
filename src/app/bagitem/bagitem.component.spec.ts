import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BagitemComponent } from './bagitem.component';

describe('BagitemComponent', () => {
  let component: BagitemComponent;
  let fixture: ComponentFixture<BagitemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BagitemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BagitemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
