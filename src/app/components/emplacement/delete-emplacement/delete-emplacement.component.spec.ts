import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteEmplacementComponent } from './delete-emplacement.component';

describe('DeleteEmplacementComponent', () => {
  let component: DeleteEmplacementComponent;
  let fixture: ComponentFixture<DeleteEmplacementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteEmplacementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteEmplacementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
