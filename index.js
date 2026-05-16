const {createInterface} = require ("node: readline");
const rl = createInterface({
  input: process.stdin,
  output: process.stdout
)}

// Data Menu Lazatto

const menu = [
    {
        id: 1,
        nama: "Ayam CLBK Dada",
        harga: 22000
    },
    {
        id: 2,
        nama: "Burger Hamer",
        harga: 13500
    },
    {
        id: 3,
        nama: "Paket Geprek Dada",
        harga: 25000
    },
    {
        id: 4,
        nama: "New Sadazz 1",
        harga: 23000
    },
    {
        id: 5,
        nama: "Nasi Putih",
        harga: 7000
    },
    {
        id: 6,
        nama: "Kentang",
        harga: 13500
    },
    {
        id: 7,
        nama: "Sambal Geprek",
        harga: 6500
    },
    {
        id: 8,
        nama: "Teh Botol Kotak Sosro",
        harga: 7500
    },
    {
        id: 9,
        nama: "Paket Bersayap Mentai",
        harga: 28000
    },
    {
        id: 10,
        nama: "Air Mineral",
        harga: 8000
    }
]

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
