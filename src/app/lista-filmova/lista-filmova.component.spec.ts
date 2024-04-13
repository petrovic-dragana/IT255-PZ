import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaFilmovaComponent } from './lista-filmova.component';

describe('ListaFilmovaComponent', () => {
  let component: ListaFilmovaComponent;
  let fixture: ComponentFixture<ListaFilmovaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListaFilmovaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListaFilmovaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
