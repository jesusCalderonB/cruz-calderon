import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CarritoRevisarComponent } from './carrito-revisar.component';

describe('CarritoRevisarComponent', () => {
  let component: CarritoRevisarComponent;
  let fixture: ComponentFixture<CarritoRevisarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarritoRevisarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarritoRevisarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
