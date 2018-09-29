import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountStringComponent } from './account-string.component';

describe('AccountStringComponent', () => {
  let component: AccountStringComponent;
  let fixture: ComponentFixture<AccountStringComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccountStringComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountStringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
