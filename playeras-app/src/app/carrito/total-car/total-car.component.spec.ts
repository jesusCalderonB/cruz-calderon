import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CarritoRevisarComponent } from '../carrito-revisar/carrito-revisar.component';
import { TotalCarComponent } from './total-car.component';

describe('TotalCarComponent', () => {
  let component: TotalCarComponent;
  let fixture: ComponentFixture<TotalCarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TotalCarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TotalCarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
