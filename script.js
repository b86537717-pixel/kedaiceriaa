// ==========================================================================
// DATA UTAMA & KONSTANTA
// ==========================================================================
// Simpan nomor WhatsApp satu kali dalam variabel
const NOMOR_WA = "6285646641319";

// ==========================================================================
// FUNGSI UTAMA (DIJALANKAN SAAT HALAMAN SELESAI DIMUAT)
// ==========================================================================
document.addEventListener("DOMContentLoaded", function () {
    
    // --- 1. TOGGLE MENU MOBILE (HP) ---
    const menuToggle = document.getElementById("menuToggle");
    const siteNav = document.getElementById("siteNav");

    if (menuToggle && siteNav) {
        menuToggle.addEventListener("click", function () {
            // Menambah/menghapus kelas 'active' untuk membuka/menutup menu
            siteNav.classList.toggle("active");
        });

        // Tutup menu otomatis setelah salah satu tautan diklik
        const navLinks = document.querySelectorAll(".nav-link");
        navLinks.forEach(function (link) {
            link.addEventListener("click", function () {
                siteNav.classList.remove("active");
            });
        });
    }

    // --- 2. GENERATE TAUTAN WHATSAPP UMUM ---
    // Pesan default untuk tombol WhatsApp umum
    const pesanUmum = encodeURIComponent("Halo Kedai Ceria, saya mau tanya/pesan jajanan.");
    const urlWAUtama = `https://wa.me/${NOMOR_WA}?text=${pesanUmum}`;

    // Terapkan URL ke semua tombol dengan kelas .js-wa-general
    const tombolWAUtama = document.querySelectorAll(".js-wa-general");
    tombolWAUtama.forEach(function (tombol) {
        tombol.href = urlWAUtama;
        tombol.target = "_blank";
        tombol.rel = "noopener noreferrer";
    });

    // --- 3. GENERATE TAUTAN WHATSAPP PRODUK ---
    // Pesan otomatis untuk tombol Pesan pada setiap produk
    const tombolWAProduk = document.querySelectorAll(".js-wa-product");
    tombolWAProduk.forEach(function (tombol) {
        const namaProduk = tombol.getAttribute("data-product");
        const pesanProduk = encodeURIComponent(`Halo Kedai Ceria, saya mau pesan ${namaProduk}.`);
        
        tombol.href = `https://wa.me/${NOMOR_WA}?text=${pesanProduk}`;
        tombol.target = "_blank";
        tombol.rel = "noopener noreferrer";
    });

});