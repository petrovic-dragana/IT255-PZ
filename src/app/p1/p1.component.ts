import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-p1',
  standalone: true,
  imports: [],
  templateUrl: './p1.component.html',
  styleUrl: './p1.component.scss'
})
export class P1Component {
  constructor(private router: Router) {}

  returnToHome():void {
    this.router.navigate(['/pocetna'])
  }
}
