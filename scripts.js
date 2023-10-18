class Kitablar {
  constructor(kitabinAdi, yazarAdi, yazildigiIl, qiymet) {
    this.kitabinAdi = kitabinAdi;
    this.yazarAdi = yazarAdi;
    this.yazildigiIl = yazildigiIl;
    this.qiymet = qiymet;
  }

  QiymetiIste(endirimFaizi) {
    const endirimliQiymet = this.qiymet - (this.qiymet / 100) * endirimFaizi;
    return endirimliQiymet;
  }
}

const libraff = new Kitablar("Alpay'in heyati", "Alpay Abdullayev", 2023, 131);

console.log(`Dunyanin en gozle Kitabinin adı: ${libraff.kitabinAdi},
Meshur Yazarin Adi :${libraff.yazarAdi},
yazildigi il: ${libraff.yazildigiIl},
qiymet ; ${libraff.qiymet} ,
Endirimli Qiymet %: ${libraff.QiymetiIste(50)}`);
