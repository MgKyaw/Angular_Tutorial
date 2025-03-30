import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynHostComponent } from './dyn-host.component';

describe('DynHostComponent', () => {
  let component: DynHostComponent;
  let fixture: ComponentFixture<DynHostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DynHostComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DynHostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
