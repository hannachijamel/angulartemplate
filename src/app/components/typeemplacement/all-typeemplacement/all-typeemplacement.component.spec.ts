import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllTypeemplacementComponent } from './all-typeemplacement.component';

describe('AllTypeemplacementComponent', () => {
  let component: AllTypeemplacementComponent;
  let fixture: ComponentFixture<AllTypeemplacementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllTypeemplacementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllTypeemplacementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
