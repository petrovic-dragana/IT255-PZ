import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-p2',
  standalone: true,
  imports: [],
  templateUrl: './p2.component.html',
  styleUrl: './p2.component.scss'
})
export class P2Component {

  constructor(private router: Router) {}

  returnToHome():void {
    this.router.navigate(['/pocetna'])
  }
}
