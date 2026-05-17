const {createInterface} = require ("node: readline");
const rl = createInterface({
  input: process.stdin,
  output: process.stdout
)}

// Data Menu Lazatto
const friedChicken = [
    { id: 1, nama: "Ayam Dada", harga: 18000 },
    { id: 2, nama: "Ayam Paha Atas", harga: 18000 },
    { id: 3, nama: "Ayam Paha Bawah", harga: 14000 },
    { id: 4, nama: "Ayam Sayap", harga: 23000 }
];
const geprek = [
    { id: 1, nama: "Ayam Geprek Dada", harga: 22000 },
    { id: 2, nama: "Ayam Geprek Paha Atas", harga: 22000 },
    { id: 3, nama: "Ayam Geprek Paha Bawah", harga: 19500 },
    { id: 4, nama: "Ayam Geprek Sayap", harga: 18000 }
];
const sadazz = [
    { id: 1, nama: "Sadazz Dada", harga: 23000 },
    { id: 2, nama: "Sadazz Paha Atas", harga: 23000 },
    { id: 3, nama: "Sadazz Paha Bawah", harga: 23000 },
    { id: 4, nama: "Sadazz Sayap", harga: 23000 }
];
const ayamCLBK = [
    { id: 1, nama: "Ayam CLBK Dada", harga: 22000 },
    { id: 2, nama: "Ayam CLBK Paha Atas", harga: 22000 },
    { id: 3, nama: "Ayam CLBK Paha Bawah", harga: 22000 },
    { id: 4, nama: "Ayam CLBK Sayap", harga: 22000 }
];

const paketChicken = [
    { id: 1, nama: "Paket Dada", harga: 22000 },
    { id: 2, nama: "Paket Paha Atas", harga: 22000 },
    { id: 3, nama: "Paket Paha Bawah", harga: 19500 },
    { id: 4, nama: "Paket Sayap", harga: 18000 }
];

const paketGeprek = [
    { id: 1, nama: "Paket Geprek Dada", harga: 22000 },
    { id: 2, nama: "Paket Geprek Paha Atas", harga: 22000 },
    { id: 3, nama: "Paket Geprek Paha Bawah", harga: 19500 },
    { id: 4, nama: "Paket Geprek Sayap", harga: 18000 }
];

const sideDish = [
    { id: 1, nama: "Nasi Putih", harga: 7000 },
    { id: 2, nama: "Kentang", harga: 5000 },
    { id: 3, nama: "Spaghetti", harga: 5000 }
];

const minuman = [
    { id: 1, nama: "Air Mineral", harga: 8000 },
    { id: 2, nama: "S-Tee", harga: 7000 },
    { id: 3, nama: "Teh Botol Kotak Sosro", harga: 7500 }
];

const menu = [
    { id: 1, nama: "Fried Chicken" },
    { id: 2, nama: "Geprek" },
    { id: 3, nama: "Sadazz" },
    { id: 4, nama: "Ayam CLBK" },
    { id: 5, nama: "Paket Chicken" },
    { id: 6, nama: "Paket Geprek" },
    { id: 7, nama: "Side Dish" },
    { id: 8, nama: "Minuman" }
];

// Function Tampilkan Menu
function tampilkanMenu() {

    console.log("\n=================================");
    console.log("        MENU RESTO LAZATTO");
    console.log("=================================");

    for (let i = 0; i < menu.length; i++) {
        console.log(`${menu[i].id}. ${menu[i].nama}`);
    }

    console.log("=================================");

    rl.question("\nPilih menu (id): ", function (pilih) {

        switch (Number(pilih)) {

            case 1:
                pesanMakanan(friedChicken, "Fried Chicken");
                break;

            case 2:
                pesanMakanan(geprek, "Geprek");
                break;

            case 3:
                pesanMakanan(sadazz, "Sadazz");
                break;

            case 4:
                pesanMakanan(ayamCLBK, "Ayam CLBK");
                break;

            case 5:
                pesanMakanan(paketChicken, "Paket Chicken");
                break;

            case 6:
                pesanMakanan(paketGeprek, "Paket Geprek");
                break;

            case 7:
                pesanMakanan(sideDish, "Side Dish");
                break;

            case 8:
                pesanMakanan(minuman, "Minuman");
                break;

            default:
                console.log("\nMenu tidak tersedia!");
                tampilkanMenu();
                break;
        }
    });
}

function cariMenu(dataMenu, id) {
    for (let i = 0; i < dataMenu.length; i++) {
        if (dataMenu[i].id === id) {
            return dataMenu[i];
        }
    }
    return null;
}

let pesanan = []
let totalHarga = 0;

function pesanMakanan(dataMenu, kategori) {

    console.log(`\n===== ${kategori} =====`);

    for (let i = 0; i < dataMenu.length; i++) {
        console.log(
            `${dataMenu[i].id}. ${dataMenu[i].nama} - Rp.${dataMenu[i].harga}`
        );
    }

    rl.question("\nPilih makanan (id): ", function (idMakanan) {
        rl.question("Jumlah beli: ", function (jumlah) {
            let makanan = cariMenu(dataMenu, Number(idMakanan));
            if (makanan !== null) {
                let subtotal = makanan.harga * Number(jumlah);
                totalHarga += subtotal;

                if (!pesanan.some(item => item.nama === makanan.nama)) {
                    pesanan.push({
                        nama: makanan.nama,
                        harga: makanan.harga,
                        jumlah: Number(jumlah),
                        subtotal: subtotal
                    });
                } else {
                    for (let i = 0; i < pesanan.length; i++) {
                        if (pesanan[i].nama === makanan.nama) {
                            pesanan[i].jumlah += Number(jumlah);
                            pesanan[i].subtotal += subtotal;
                            break;
                        }
                    }
                }
                console.log("\nPesanan berhasil ditambahkan!");
                console.log(`Menu     : ${makanan.nama}`);
                console.log(`Jumlah   : ${jumlah}`);
                console.log(`Subtotal : Rp ${subtotal}`);
            } else {

                console.log("\nMenu tidak ditemukan!");
            }
            tanyaLagi();
        });
    });
}
// Pembayaran
function bayar() {
    rl.question("Masukkan jumlah bayar: Rp ", function (nominal) {
        if (nominal == totalHarga) {
            console.log("\nTerima kasih sudah belanja di Lazatto!");
            rl.close();
        } else if (nominal > totalHarga) {
            let kembalian = nominal - totalHarga;
            console.log(`\nKembalian: Rp ${kembalian}`);
            console.log(`Terima kasih sudah belanja di Lazatto!"`);
            rl.close();
        } else {
            console.log("\nMasukkan jumlah bayar yang sesuai!");
            bayar();
        }
    });
}

function tanyaLagi() {
    rl.question("\nApakah ingin pesan lagi? (y/t): ", function (jawaban) {
        if (jawaban.toLowerCase() === "y" || jawaban.toLowerCase() === "ya") {
            tampilkanMenu();
        } else if (jawaban.toLowerCase() === "t" || jawaban.toLowerCase() === "tidak") {
            tampilkanStruk();
            bayar();
        } else {
            console.log("\nJawaban tidak valid!");
            tanyaLagi();
        }
    });
}

function tampilkanStruk() {
    console.log("\n=================================");
    console.log("         STRUK PEMBELIAN");
    console.log("=================================");

    for (let i = 0; i < pesanan.length; i++) {
        console.log(`${i + 1}. ${pesanan[i].nama}`);
        console.log(`   Harga    : Rp ${pesanan[i].harga}`);
        console.log(`   Jumlah   : ${pesanan[i].jumlah}`);
        console.log(`   Subtotal : Rp ${pesanan[i].subtotal}`);
    }

    console.log("=================================");
    console.log(`TOTAL BAYAR : Rp ${totalHarga}`);

    console.log("\nSilahkan ditunggu dan lakukan pembayaran terlebih dahulu!");
}
// Jalankan Program
tampilkanMenu();
