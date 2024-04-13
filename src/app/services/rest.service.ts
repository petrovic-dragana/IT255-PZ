import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, catchError } from 'rxjs';
import { Film } from '../model/film.model';

@Injectable({
  providedIn: 'root'
})
export class RestService {

  private apiUrl = 'http://localhost:3000';

  constructor(private http: HttpClient, private router: Router) {}

  getFilmById(id: number): Observable<Film> {
    return this.http.get<Film>(`${this.apiUrl}/kupovanje-karte/${id}`).pipe(
      catchError((error: HttpErrorResponse) => {
        console.error('Error fetching filmovi details:', error);
        throw error;
         // Rethrow the error to be caught by the subscriber
      })
    );
  }

  getDataById(id: number): Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get(url);
  }

  
  zavrsiKupovinuKarte(filmId: number, brojgledaoca: number): Observable<any> {
    const url = `${this.apiUrl}/kupovanje-karte/${filmId}`;
    const body = { brojgledaoca }; // Ovo je body zahteva koji šaljemo na server

    this.router.navigate(['/kupljena-karta']);
    return this.http.post(url, {brojgledaoca});
  }


  getAllFilm(): Observable<any> {
    return this.http.get(`${this.apiUrl}/admin`);
  }  

  addFilm(filmovi: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/admin`, filmovi);
  }

  updateFilm(id: number, filmovi: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/admin/${id}`, filmovi);
  }
  deleteFilm(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/admin/${id}`);
  }
  async someAsyncOperation(): Promise<void> {
    return new Promise<void>(resolve => {
      // Simulacija asinhrone operacije koja traje neko vreme (npr. 2 sekunde)
      setTimeout(() => {
        console.log('Asinhrona operacija je zavrsena.');
        resolve();
      }, 2000);
    });
  }

}
