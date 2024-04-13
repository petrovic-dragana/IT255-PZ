import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pocetna',
  standalone: true,
  imports: [],
  templateUrl: './pocetna.component.html',
  styleUrl: './pocetna.component.scss'
})
export class PocetnaComponent {

  constructor(private router: Router) {}

  p1():void {
    this.router.navigate(['/p1'])
  }
  p2():void {
    this.router.navigate(['/p2'])
  }
  p3():void {
    this.router.navigate(['/p3'])
  }
}
