import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyTemplateRefVarSampleComponent } from './my-template-ref-var-sample.component';

describe('MyTemplateRefVarSampleComponent', () => {
  let component: MyTemplateRefVarSampleComponent;
  let fixture: ComponentFixture<MyTemplateRefVarSampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyTemplateRefVarSampleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyTemplateRefVarSampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
