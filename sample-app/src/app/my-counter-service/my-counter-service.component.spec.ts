import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyCounterServiceComponent } from './my-counter-service.component';

describe('MyCounterServiceComponent', () => {
  let component: MyCounterServiceComponent;
  let fixture: ComponentFixture<MyCounterServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyCounterServiceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyCounterServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
