/* Ürünlerin fiyatlarını içeren bir array oluştur.
Kullanıcıdan bir indirim oranı al ve her ürün için indirimli fiyatı hesapla. */

const products = [
  {
    urun: "Spor Ayakkabi",
    fiyat: "3500",
  },
  {
    urun: "Mont",
    fiyat: "2500",
  },
];

const indirimOrani = Number(
  prompt("Bana bir indirim orani ver. (%15, %30....)")
);
for (const product of products) {
  product.fiyat = Number(product.fiyat);
  const indirimliFiyat = product.fiyat - (product.fiyat * indirimOrani) / 100;
  product.indirimliFiyat = indirimliFiyat;
}
console.log(products);
