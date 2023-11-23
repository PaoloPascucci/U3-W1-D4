var CapoAbbigliamento = /** @class */ (function () {
    function CapoAbbigliamento(_id, _codprod, _collezione, _capo, _modello, _quantita, _colore, _prezzoivaesclusa, _prezzoivainclusa, _disponibile, _saldo) {
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
    CapoAbbigliamento.prototype.getSaldoCapo = function () {
        return (this.prezzoivainclusa * this.saldo) / 100;
    };
    CapoAbbigliamento.prototype.getAcquistoCapo = function () {
        var acquistoCapo = this.prezzoivainclusa - this.getSaldoCapo();
        return parseFloat(acquistoCapo.toFixed(2));
    };
    return CapoAbbigliamento;
}());
fetch("https://mocki.io/v1/765b2daf-41d5-4e94-a0d5-abd918f57b8f")
    .then(function (resp) { return resp.json(); })
    .then(function (dataObj) {
    return dataObj.forEach(function (element) {
        var capo = new CapoAbbigliamento(element.id, element.codprod, element.collezione, element.capo, element.modello, element.quantita, element.colore, element.prezzoivaesclusa, element.prezzoivainclusa, element.disponibile, element.saldo);
        console.log("stai acquistando il", capo.capo, "di colore", capo.colore, "a", capo.prezzoivaesclusa + "$ con uno sconto di", capo.saldo + "%, quindi lo paghi", capo.getAcquistoCapo() + "$");
    });
})
    .catch(function (err) { return "Errore:" + err; });
