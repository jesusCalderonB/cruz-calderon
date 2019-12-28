import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RelacionadosComponent } from './relacionados.component';

describe('RelacionadosComponent', () => {
  let component: RelacionadosComponent;
  let fixture: ComponentFixture<RelacionadosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RelacionadosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RelacionadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
