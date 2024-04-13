import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KupljenaKartaComponent } from './kupljena-karta.component';

describe('KupljenaKartaComponent', () => {
  let component: KupljenaKartaComponent;
  let fixture: ComponentFixture<KupljenaKartaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KupljenaKartaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(KupljenaKartaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
