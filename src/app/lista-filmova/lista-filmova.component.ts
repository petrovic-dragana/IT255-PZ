import { Component, OnInit } from '@angular/core';
import { Film } from '../model/film.model';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { RestService } from '../services/rest.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-lista-filmova', 
  templateUrl: './lista-filmova.component.html',
  styleUrl: './lista-filmova.component.scss'
})
export class ListaFilmovaComponent implements OnInit {
  filmovi: Film[] = [];
  id: number = 0;
  pretraga: string = '';
  sortiranoPoCeni: boolean = false;
  constructor(private http: HttpClient, private route: ActivatedRoute,
    private router: Router, private fb: FormBuilder,
    private restService: RestService) {

  }

  ngOnInit(): void {


    this.restService.getAllFilm().subscribe((data: any) => {
      console.log('Response from server:', data);
      this.filmovi = data;
    });
    this.restService.getAllFilm()
      .subscribe((data: Film[]) => {
        this.filmovi = data;
      });
      this.route.params.subscribe(params => {
        this.id = +params['id'];
      });
  }
  sortirajPoCeni() {
    // Koristite operator za poređenje numeričkih vrednosti
    this.filmovi.sort((a, b) => a.cena - b.cena);
  }
  toggleSortiranjePoCeni() {
    // Obrnite trenutno stanje sortiranja po ceni
    this.sortiranoPoCeni = !this.sortiranoPoCeni;

    if (this.sortiranoPoCeni) {
      this.sortirajPoCeni();
    }
  }
  pretrazi() {
    // Filtrirajte listu letova na osnovu unetog teksta
    this.filmovi = this.filterFilmovi(this.pretraga);
  }
  filterFilmovi(kriterijum: string): any[] {
    // Implementirajte logiku filtriranja prema vašim potrebama
    // Na primer, možete koristiti Array.filter() metodu
    return this.filmovi.filter(filmo => 
      filmo.naziv.toLowerCase().includes(kriterijum.toLowerCase()) ||
      filmo.zanr.toLowerCase().includes(kriterijum.toLowerCase())  
       // Dodajte ostale kriterijume pretrage prema potrebi
    );
  }
  kupiKartu(filmId: number) {
    // Pronađite odabrani  na osnovu , možda iz servisa ili lokalne liste
    const odabraniFilm = this.filmovi.find(filmovi => filmovi.id === filmId);

    // Provera da li je pronađen odabrani 
    if (odabraniFilm) {
        // Navigacija na sledeću stranicu (kupovanjeKarteComponent) sa podacima o 
        this.router.navigate(['/kupovanje-karte', filmId]);
    }
}



  
}
