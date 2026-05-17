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

// Function Tampilkan Menu
function tampilkanMenu() {
    console.log("\n=================================")
    console.log("      MENU RESTO LAZATTO")
    console.log("=================================")

    for (let i = 0; i < menu.length; i++) {
        console.log(
            `${menu[i].id}. ${menu[i].nama} - Rp ${menu[i].harga}`
        )
    }
    console.log("=================================")
}

// Function Cari Menu
function cariMenu(id) {
    for (let i = 0; i < menu.length; i++) {
        if (menu[i].id === id) {
            return menu[i]
        }
    }
    return null
}

let totalHarga = 0
// Function Tampilkan Struk
function tampilkanStruk() {
    console.log("\n=================================")
    console.log("         STRUK PEMBELIAN")
    console.log("=================================")

    // tampilkan pesanan
    for (let i = 0; i < pesanan.length; i++) {

        console.log(`${i + 1}. ${pesanan[i].nama}`)
        console.log(`   Harga    : Rp ${pesanan[i].harga}`)
        console.log(`   Jumlah   : ${pesanan[i].jumlah}`)
        console.log(`   Subtotal : Rp ${pesanan[i].subtotal}`)
    }

    console.log("=================================")
    console.log(`TOTAL BAYAR : Rp ${totalHarga}`)
    console.log("\nSilahkan ditunggu dan lakukan pembayaran terlebih dahulu!")
}

// Pembayaran
function bayar() {
    rl.question("Masukkan jumlah bayar: Rp ", function (bayar) {
        if (bayar < totalHarga) {
            console.log("Uang kurang, silahkan bayar lagi!")
            bayar()
        } else if (bayar > totalHarga) {
            let kembalian = bayar - totalHarga
            console.log(`Kembalian: Rp ${kembalian}`)
            console.log(`Terima kasih sudah membeli di Lazatto!"`)
            rl.close()
        } else {
            console.log("Terima kasih sudah membeli di Lazatto!")
            rl.close()
        }

    })
}

let pesanan = []
// Function Pesan Makanan
function pesanMakanan() {

    // tampilkan menu
    tampilkanMenu()

    // pilih menu makanan atau minuman yang ingin dibeli
    rl.question("\nPilih menu (id): ", function (pilih) {

        // pilih berapa jumlah yang ingin dibeli
        rl.question("Jumlah beli: ", function (jumlah) {

            let makanan = cariMenu(Number(pilih))
            if (makanan !== null) {

                let subtotal = makanan.harga * Number(jumlah)
                totalHarga += subtotal

                // simpan ke array pesanan
                pesanan.push({
                    nama: makanan.nama,
                    harga: makanan.harga,
                    jumlah: Number(jumlah),
                    subtotal: subtotal
                })

                console.log("\nPesanan berhasil ditambahkan!")
                console.log(`Menu     : ${makanan.nama}`)
                console.log(`Jumlah   : ${jumlah}`)
                console.log(`Subtotal : Rp ${subtotal}`)

            } else {

                console.log("\nMenu tidak ditemukan!")
            }

            // tanya lagi
            rl.question("\nTambah pesanan lagi? (ya/tidak): ", function (jawab) {

                if (jawab.toLowerCase() === "ya" || jawab.toLowerCase() === "y") {

                    pesanMakanan()

                } else {

                    tampilkanStruk()
                    bayar()

                }

            })

        })

    })

}
// Jalankan Program
pesanMakanan()
