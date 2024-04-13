import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KupovinaKarteComponent } from './kupovina-karte.component';

describe('KupovinaKarteComponent', () => {
  let component: KupovinaKarteComponent;
  let fixture: ComponentFixture<KupovinaKarteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KupovinaKarteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(KupovinaKarteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
