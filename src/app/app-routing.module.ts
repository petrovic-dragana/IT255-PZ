import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ReactiveFormsModule } from "@angular/forms";

import { OKompanijiComponent } from "./o-kompaniji/o-kompaniji.component";
import { LoginComponent } from "./login/login.component";
import { AdminComponent } from "./admin/admin.component";
import { ListaFilmovaComponent } from "./lista-filmova/lista-filmova.component";
import { KupovinaKarteComponent } from "./kupovina-karte/kupovina-karte.component";
import { KupljenaKartaComponent } from "./kupljena-karta/kupljena-karta.component";
import { PocetnaComponent } from "./pocetna/pocetna.component";
import { P1Component } from "./p1/p1.component";
import { P2Component } from "./p2/p2.component";
import { P3Component } from "./p3/p3.component";
import { AuthGuard } from "./services/auth.guard";
import { PrethodneKupovineComponent } from "./prethodne-kupovine/prethodne-kupovine.component";

const routes: Routes = [
  { path: 'o-kompaniji', component: OKompanijiComponent },
  { path: 'login', component: LoginComponent},
  { path: 'admin', component: AdminComponent },
    // { path: 'admin', component: AdminComponent, canActivate: [AuthGuard]  },
  { path: 'lista-filmova', component: ListaFilmovaComponent },
  { path: 'kupovina-karte/:id', component:  KupovinaKarteComponent},//KupovanjeKarteComponent
  { path: 'kupljena-karta', component: KupljenaKartaComponent },
  { path: 'pocetna', component: PocetnaComponent },
  { path: 'poc1', component: P1Component },
  { path: 'poc2', component: P2Component },
  { path: 'poc3', component: P3Component },
  { path: 'prethodne-kupovine', component: PrethodneKupovineComponent },
  { path: 'kupovine', component: PrethodneKupovineComponent },
  { path: '', redirectTo: '/pocetna', pathMatch:'full' }
]


@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    ReactiveFormsModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
