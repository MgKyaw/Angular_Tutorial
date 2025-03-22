import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewEncapsulationSampleComponent } from './view-encapsulation-sample.component';

describe('ViewEncapsulationSampleComponent', () => {
  let component: ViewEncapsulationSampleComponent;
  let fixture: ComponentFixture<ViewEncapsulationSampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewEncapsulationSampleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewEncapsulationSampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
