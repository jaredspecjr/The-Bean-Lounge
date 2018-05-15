import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditBagComponent } from './edit-bag.component';

describe('EditBagComponent', () => {
  let component: EditBagComponent;
  let fixture: ComponentFixture<EditBagComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditBagComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditBagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
