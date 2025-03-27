import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentProjectionSampleComponent } from './content-projection-sample.component';

describe('ContentProjectionSampleComponent', () => {
  let component: ContentProjectionSampleComponent;
  let fixture: ComponentFixture<ContentProjectionSampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContentProjectionSampleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContentProjectionSampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
