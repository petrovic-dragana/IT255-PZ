import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-p3',
  standalone: true,
  imports: [],
  templateUrl: './p3.component.html',
  styleUrl: './p3.component.scss'
})
export class P3Component {
  constructor(private router: Router) {}

  returnToHome():void {
    this.router.navigate(['/pocetna'])
  }
}
