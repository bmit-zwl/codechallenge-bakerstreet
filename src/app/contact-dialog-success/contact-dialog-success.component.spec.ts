import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactDialogSuccessComponent } from './contact-dialog-success.component';

describe('ContactDialogSuccessComponent', () => {
  let component: ContactDialogSuccessComponent;
  let fixture: ComponentFixture<ContactDialogSuccessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactDialogSuccessComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactDialogSuccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
