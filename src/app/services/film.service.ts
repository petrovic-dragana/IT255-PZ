import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FilmService {
  private apiUrl = 'http://localhost:3000/films'; // Prilagodi sa stvarnim endpointom

  constructor(private http: HttpClient) { }
  
}
