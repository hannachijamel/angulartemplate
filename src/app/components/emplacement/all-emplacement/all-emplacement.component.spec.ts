import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllEmplacementComponent } from './all-emplacement.component';

describe('AllEmplacementComponent', () => {
  let component: AllEmplacementComponent;
  let fixture: ComponentFixture<AllEmplacementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllEmplacementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllEmplacementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
