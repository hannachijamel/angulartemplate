import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecificationequipementComponent } from './specificationequipement.component';

describe('SpecificationequipementComponent', () => {
  let component: SpecificationequipementComponent;
  let fixture: ComponentFixture<SpecificationequipementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpecificationequipementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpecificationequipementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
