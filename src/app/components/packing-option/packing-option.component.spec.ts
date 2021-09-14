import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PackingOptionComponent } from './packing-option.component';

describe('PackingOptionComponent', () => {
  let component: PackingOptionComponent;
  let fixture: ComponentFixture<PackingOptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PackingOptionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PackingOptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
