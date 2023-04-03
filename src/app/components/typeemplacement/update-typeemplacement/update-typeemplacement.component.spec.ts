import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateTypeemplacementComponent } from './update-typeemplacement.component';

describe('UpdateTypeemplacementComponent', () => {
  let component: UpdateTypeemplacementComponent;
  let fixture: ComponentFixture<UpdateTypeemplacementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateTypeemplacementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateTypeemplacementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
