import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateEmplacementComponent } from './update-emplacement.component';

describe('UpdateEmplacementComponent', () => {
  let component: UpdateEmplacementComponent;
  let fixture: ComponentFixture<UpdateEmplacementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateEmplacementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateEmplacementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
