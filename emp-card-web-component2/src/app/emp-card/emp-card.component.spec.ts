import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpCardComponent } from './emp-card.component';

describe('EmpCardComponent', () => {
  let component: EmpCardComponent;
  let fixture: ComponentFixture<EmpCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmpCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmpCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
