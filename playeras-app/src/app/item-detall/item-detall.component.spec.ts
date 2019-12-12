import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemDetallComponent } from './item-detall.component';

describe('ItemDetallComponent', () => {
  let component: ItemDetallComponent;
  let fixture: ComponentFixture<ItemDetallComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemDetallComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemDetallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
