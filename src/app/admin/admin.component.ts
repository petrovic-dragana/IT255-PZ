import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Film } from '../model/film.model';
import { AuthService } from '../services/auth.service';
import { HttpClient } from '@angular/common/http';
import { RestService } from '../services/rest.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.scss'
})
export class AdminComponent implements OnInit {
  filmForm: FormGroup;
  showErrorMessage: boolean = false;
  filmovi: Film[] = [];
  selectedFilms: Film[] = [];
  newFilm: Film = {
    id: 0,
    naziv: '',
    trajanje: '',
    zanr: '',
    ocena: 0,
    brgledaoca: 0,
    cena: 0
  };
  constructor(
    private authService: AuthService,
    private http: HttpClient,
    private fb: FormBuilder,
    private restService: RestService
  ) {
    this.filmForm = this.fb.group({
      naziv: ['', Validators.required],
      trajanje: ['', Validators.required],
      zanr: ['', Validators.required],
      ocena: ['', Validators.required],
      brgledaoca: ['', Validators.required],
      cena: ['', Validators.required]
    });
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
    this.refreshFilm();

  }
  onSubmit(): void {
    // Your submit logic here
    console.log('Form submitted!');
  }
  refreshFilm() {
    this.restService.getAllFilm().subscribe((data: Film[]) => {
      this.filmovi = data;
    });
  }
  logout() {
    // Pozivamo logout metodu iz AuthService
    this.authService.logout();
  }
  dodajFilm() {
    if (!this.filmForm) {
      console.error('Forma nije inicijalizovana.');
      return;
    }

    if (this.filmForm.invalid) {
      console.log('Forma nije validna');

      // Ispisujemo greške za svako polje koje nije validno
      Object.keys(this.filmForm.controls).forEach(key => {
        const control: AbstractControl | null = this.filmForm.get(key);

        if (control != null) {
          const controlErrors = control.errors;

          if (controlErrors != null) {
            Object.keys(controlErrors).forEach(keyError => {
              console.log(`Polje ${key} ima grešku: ${keyError}`);
            });
          }
        }
      });

      this.showErrorMessage = true;
      window.location.reload();
      return;
    }

    console.log('Vrednosti forme:', this.filmForm!.value);
    console.log('Pokrenuta funkcija dodajTelefon');

    // Resetujemo prikaz poruke o grešci
    this.showErrorMessage = false;

    // Šaljemo podatke na server i dodajemo novi telefon
    this.restService.addFilm(this.filmForm.value).subscribe(
      (data: Film) => {
        // Uspesno dodavanje - ažuriranje lokalnog prikaza telefona
        this.filmovi.push(data);

        // Resetovanje forme nakon uspešnog dodavanja
        this.filmForm.reset();

        // Resetovanje newPhone na podrazumevanu vrednost
        this.newFilm = {
          id: 0,
          naziv: '',
          trajanje: '',
          zanr: '',
          ocena: 0,
          brgledaoca: 0,
          cena: 0
        };
      },
      (error) => {
        console.error('Greška prilikom slanja podataka na server:', error);
      }
    );
  }

  async azurirajFilm(filmovi: Film): Promise<void> {
    this.refreshFilm();
    console.log('Vrednost izabranog filma (pre postavljanja):', filmovi);

    // Postavi vrednosti forme na osnovu izabranog filma
    this.filmForm.patchValue({
      id: filmovi.id,
      naziv: filmovi.naziv,
      trajanje: filmovi.trajanje,
      zanr: filmovi.zanr,
      ocena: filmovi.ocena,
      brgledaoca: filmovi.brgledaoca,
      cena: filmovi.cena
    });

    // Ažuriraj 'newPhone' objekat sa informacijama izabranog telefona
    this.newFilm = { ...filmovi, id: filmovi.id };
    // Postavi 'id' svojstvo na odgovarajuću vrednost

    console.log('Vrednost newFilm (posle postavljanja):', this.newFilm);

    try {
      // Sačekaj završetak asinhrone operacije pre nego što nastaviš dalje
      await this.restService.someAsyncOperation();

      // Ažuriraj izabrane telefone na serveru i lokalno
      await this.sacuvajAzuriranje();

    } catch (error) {
      console.error('Greška prilikom ažuriranja filma:', error);
    }


  }



  async sacuvajAzuriranje(): Promise<void> {
    if (this.filmForm.invalid) {
      console.log('Forma nije validna');
      return;
    }
    try {
      // Ažuriranje izabranih telefona na serveru
      await this.restService.updateFilm(this.newFilm.id, this.filmForm.value).toPromise();

      // Ažuriraj lokalne podatke o telefonu
      const updatedFilmIndex = this.filmovi.findIndex(p => p.id === this.newFilm.id);
      if (updatedFilmIndex !== -1) {
        this.filmovi[updatedFilmIndex] = { ...this.newFilm, ...this.filmForm.value };
      }

      // Resetuj formu nakon ažuriranja
      this.handleFormReset();
    } catch (error) {
      console.error('Greška prilikom ažuriranja telefona:', error);
    }

  }



  obrisiFilm(id: number | undefined): void {
    if (id === undefined) {
      console.error('id nije definisan.');
      return;
    }

    console.log(`Brisanje filma sa ID:`, id);
    this.restService.deleteFilm(id).subscribe(
      () => {
        // Ukloni telefon iz lokalnog niza
        const index = this.filmovi.findIndex((p) => p.id === id);
        if (index !== -1) {
          this.filmovi.splice(index, 1);
        }

        // Ažuriraj prikaz selektovanih telefona
        this.selectedFilms = this.selectedFilms.filter((p) => p.id !== id);
      },
      (error) => {
        console.error(`Greška prilikom brisanja filmova sa ID: ${id}`, error);
      }
    );
    this.refreshFilm();
  }

  private handleFormReset(): void {
    this.filmForm.reset();
    this.newFilm = {
      id: 0,
      naziv: '',
      trajanje: '',
      zanr: '',
      ocena: 0,
      brgledaoca: 0,
      cena: 0
    };
  }
}
