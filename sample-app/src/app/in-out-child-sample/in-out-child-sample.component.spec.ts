import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InOutChildSampleComponent } from './in-out-child-sample.component';

describe('InOutChildSampleComponent', () => {
  let component: InOutChildSampleComponent;
  let fixture: ComponentFixture<InOutChildSampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InOutChildSampleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InOutChildSampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
