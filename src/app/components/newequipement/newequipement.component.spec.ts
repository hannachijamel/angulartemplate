import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewequipementComponent } from './newequipement.component';

describe('NewequipementComponent', () => {
  let component: NewequipementComponent;
  let fixture: ComponentFixture<NewequipementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewequipementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewequipementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
