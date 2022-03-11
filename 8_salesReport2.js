const dataPenjualanNovel = [
    {
      idProduct: 'BOOK002421',
      namaProduk: 'Pulang - Pergi',
      penulis: 'Tere Liye',
      hargaBeli: 60000,
      hargaJual: 86000,
      totalTerjual: 150,
      sisaStok: 17,
    },
    {
      idProduct: 'BOOK002351',
      namaProduk: 'Selamat Tinggal',
      penulis: 'Tere Liye',
      hargaBeli: 75000,
      hargaJual: 103000,
      totalTerjual: 171,
      sisaStok: 20,
    },
    {
      idProduct: 'BOOK002941',
      namaProduk: 'Garis Waktu',
      penulis: 'Fiersa Besari',
      hargaBeli: 67000,
      hargaJual: 99000,
      totalTerjual: 213,
      sisaStok: 5,
    },
    {
      idProduct: 'BOOK002941',
      namaProduk: 'Laskar Pelangi',
      penulis: 'Andrea Hirata',
      hargaBeli: 55000,
      hargaJual: 68000,
      totalTerjual: 20,
      sisaStok: 56,
    },
  ];

const getInfoPenjualan = (dataPenjualan) => {

    const modal = dataPenjualan.map(a => newArr = a.hargaBeli * a.totalTerjual)
    .reduce((acc, curr) => acc + curr);
    const pendapatan = dataPenjualan.map(a => newArr = a.hargaJual * a.totalTerjual)
    .reduce((acc, curr) => acc + curr);
    const modal2 = `Rp. ` + modal;
    const labaBersih = `Rp. `+ (pendapatan - modal);
    const labaPersen = ((modal / pendapatan) * 100).toFixed(2) + '%';
    

 
    const novelArr = dataPenjualan.map(a => newArr = a.totalTerjual);
    const greatestNovel = Math.max(...novelArr);
    const novelTerlaris = dataPenjualan.filter(a => a.totalTerjual == greatestNovel)
    .map(a => a.namaProduk).toString();

    const penulisTerlaris = dataPenjualan.filter(a => a.totalTerjual == greatestNovel)
    .map(a => a.penulis).toString();

    const obj = {
        totalKeuntungan : labaBersih,
        totalModal : modal2,
        laba : labaPersen,
        bukuTerlaris : novelTerlaris,
        novelTerlaris : penulisTerlaris
    }

    return obj;
}

console.log(getInfoPenjualan(dataPenjualanNovel))
