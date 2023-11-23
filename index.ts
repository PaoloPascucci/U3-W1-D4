class CapoAbbigliamento {
  id: number;
  codprod: number;
  collezione: string;
  capo: string;
  modello: number;
  quantita: number;
  colore: string;
  prezzoivaesclusa: number;
  prezzoivainclusa: number;
  disponibile: string;
  saldo: number;
  constructor(
    _id: number,
    _codprod: number,
    _collezione: string,
    _capo: string,
    _modello: number,
    _quantita: number,
    _colore: string,
    _prezzoivaesclusa: number,
    _prezzoivainclusa: number,
    _disponibile: string,
    _saldo: number
  ) {
    this.id = _id;
    this.codprod = _codprod;
    this.collezione = _collezione;
    this.capo = _capo;
    this.modello = _modello;
    this.quantita = _quantita;
    this.colore = _colore;
    this.prezzoivaesclusa = _prezzoivaesclusa;
    this.prezzoivainclusa = _prezzoivainclusa;
    this.disponibile = _disponibile;
    this.saldo = _saldo;
  }
  getSaldoCapo(): number {
    return (this.prezzoivainclusa * this.saldo) / 100;
  }
  getAcquistoCapo(): number {
    const acquistoCapo = this.prezzoivainclusa - this.getSaldoCapo();
    return parseFloat(acquistoCapo.toFixed(2));
  }
}

fetch("https://mocki.io/v1/765b2daf-41d5-4e94-a0d5-abd918f57b8f")
  .then((resp) => resp.json())
  .then((dataObj) =>
    dataObj.forEach((element) => {
      const capo = new CapoAbbigliamento(
        element.id,
        element.codprod,
        element.collezione,
        element.capo,
        element.modello,
        element.quantita,
        element.colore,
        element.prezzoivaesclusa,
        element.prezzoivainclusa,
        element.disponibile,
        element.saldo
      );
      console.log(
        "stai acquistando il",
        capo.capo,
        "di colore",
        capo.colore,
        "a",
        capo.prezzoivaesclusa + "$ con uno sconto di",
        capo.saldo + "%, quindi lo paghi",
        capo.getAcquistoCapo()+"$"
      );
    })
  )
  .catch((err) => "Errore:" + err);
