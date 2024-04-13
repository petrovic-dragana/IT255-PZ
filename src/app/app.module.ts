import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { OKompanijiComponent } from "./o-kompaniji/o-kompaniji.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { LoginComponent } from "./login/login.component";
import { AdminComponent } from "./admin/admin.component";
import { ListaFilmovaComponent } from "./lista-filmova/lista-filmova.component";
import { KupovinaKarteComponent } from "./kupovina-karte/kupovina-karte.component";
import { KupljenaKartaComponent } from "./kupljena-karta/kupljena-karta.component";
import { PrethodneKupovineComponent } from "./prethodne-kupovine/prethodne-kupovine.component";
import { BrowserModule } from "@angular/platform-browser";
import { AppRoutingModule } from "./app-routing.module";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { CommonModule } from "@angular/common";
import { AuthGuard } from "./services/auth.guard";



@NgModule({
  declarations: [
    AppComponent,
    OKompanijiComponent,
    NavbarComponent,
    LoginComponent,
    AdminComponent,
    ListaFilmovaComponent,
    KupovinaKarteComponent,
    KupljenaKartaComponent,
    PrethodneKupovineComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    CommonModule
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]

})


export class AppModule{}