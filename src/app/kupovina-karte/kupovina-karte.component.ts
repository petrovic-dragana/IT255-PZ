import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RestService } from '../services/rest.service';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Film } from '../model/film.model';

@Component({
  selector: 'app-kupovina-karte',
  templateUrl: './kupovina-karte.component.html',
  styleUrl: './kupovina-karte.component.scss'
})
export class KupovinaKarteComponent implements OnInit {

  filmovi: any[] = [];
  brojgledaoca: number = 1;
  zeliteVIP: boolean = false;

  constructor(
    private router: Router,
    private http: HttpClient,
    private restService: RestService,
    private route: ActivatedRoute
  ) {

  }

  ngOnInit(): void {
    const idString = this.route.snapshot.paramMap.get('id');

    if (idString !== null && idString !== undefined) {
      const id = +idString;

      // Fetch the details of the selected flight using the ID
      this.restService.getFilmById(id).subscribe(
        (data: Film) => {
          // (data: any) => {
          this.filmovi = [data];

          // this.letovi = data.map((item: any) => item[0]);
          console.log('Dužina niza letovi:', this.filmovi.length);
          console.log('podaci iz letovi', this.filmovi)
        },
        (error: HttpErrorResponse) => {
          if (error.status === 404) {
            console.log('Film nije pronađen.');
            // Ovde možete dodati kod koji želite izvršiti kada let nije pronađen.
          } else {
            console.error('Greška pri dobijanju detalja o filmu:', error);
          }
        }
      );
    } else {
      console.error('ID not found in route parameters.');
    }
  }

  ukupnaCena(): number{
    const cenaVIP = this.zeliteVIP ? 1000 : 0;
    const osnovnaCena = this.filmovi.length > 0 ? this.filmovi[0].cena : 0;
    return (osnovnaCena + cenaVIP) * this.brojgledaoca;
  }
  zavrsiKupovinuKarte(): void {
    const podaciKupovine = {
      naziv: this.filmovi[0].naziv,
      trajanje: this.filmovi[0].trajanje,
      zanr: this.filmovi[0].zanr,
      ocena: this.filmovi[0].ocena,
      brgledaoca: this.filmovi[0].brgledaoca,
      zeliteVIP: this.zeliteVIP,
      ukupnaCena: this.ukupnaCena()
    };

    this.http.post('http://localhost:3000/sacuvaj-kupovinu', podaciKupovine)
      .subscribe(response => {
        console.log('Purchase saved successfully');
        // Dodajte logiku koja se izvršava nakon uspešnog čuvanja kupovine
      }, error => {
        console.error('Error saving purchase:', error);
        // Dodajte logiku za rukovanje greškom
      });
      this.router.navigate(['/kupljena-karta']);
  }

}

