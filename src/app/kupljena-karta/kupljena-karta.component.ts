import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-kupljena-karta',
  templateUrl: './kupljena-karta.component.html',
  styleUrl: './kupljena-karta.component.scss'
})
export class KupljenaKartaComponent {
  constructor(private router: Router){}
  nazadNaPocetnu(){
    this.router.navigate(['/pocetna']);
  }
}
