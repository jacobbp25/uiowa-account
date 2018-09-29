import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UiowaAccountComponent } from './uiowa-account.component';

describe('UiowaAccountComponent', () => {
  let component: UiowaAccountComponent;
  let fixture: ComponentFixture<UiowaAccountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UiowaAccountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UiowaAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
