import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContaktpageComponent } from './contaktpage.component';

describe('ContaktpageComponent', () => {
  let component: ContaktpageComponent;
  let fixture: ComponentFixture<ContaktpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContaktpageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContaktpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
