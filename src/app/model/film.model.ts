export class Film {
    id: number;
    naziv: string;
    trajanje: string;
    zanr: string;
    ocena: number;
    brgledaoca: number;
    cena: number;
    constructor(
        id: number,
        naziv: string,
        trajanje: string,
        zanr: string,
        ocena: number,
        brgledaoca: number,
        cena: number,
    ) {
        this.id = id;
        this.naziv = naziv;
        this.trajanje = trajanje;
        this.zanr = zanr;
        this.ocena = ocena;
        this.brgledaoca = brgledaoca;
        this.cena = cena;
    }
}
