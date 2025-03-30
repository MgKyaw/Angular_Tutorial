import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynListComponent } from './dyn-list.component';

describe('DynListComponent', () => {
  let component: DynListComponent;
  let fixture: ComponentFixture<DynListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DynListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DynListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
