import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpenseEntryList } from './expense-entry-list';

describe('ExpenseEntryList', () => {
  let component: ExpenseEntryList;
  let fixture: ComponentFixture<ExpenseEntryList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExpenseEntryList]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExpenseEntryList);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
