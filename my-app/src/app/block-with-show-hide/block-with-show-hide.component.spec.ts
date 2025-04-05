import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlockWithShowHideComponent } from './block-with-show-hide.component';

describe('BlockWithShowHideComponent', () => {
  let component: BlockWithShowHideComponent;
  let fixture: ComponentFixture<BlockWithShowHideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BlockWithShowHideComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlockWithShowHideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
