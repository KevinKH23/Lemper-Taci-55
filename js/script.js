// Toggle class active
const navbarNav = document.querySelector(".navbar-nav");

// Ketika hamburger menu di klik
document.querySelector("#hamburger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

// Klik di luar sidebar untuk menghilangkan nav

const hamburger = document.querySelector("#hamburger-menu");

document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});

// === Typing Animation ===
var typed = new Typed("#typing-text", {
  strings: ["Nikmat", "Gurih", "dan Lezat!"],
  typeSpeed: 50,
  backSpeed: 50,
  backDelay: 1000,
  loop: true,
});

// Mendapatkan elemen
const ctaButton = document.querySelector(".cta");
const popup = document.getElementById("popup-menu");
const closeBtn = document.querySelector(".popup .close");

// Menampilkan pop-up saat tombol "Pesan Sekarang" diklik
ctaButton.addEventListener("click", function (e) {
  e.preventDefault(); // Mencegah perilaku default link
  popup.style.display = "block"; // Menampilkan pop-up
});

// Menyembunyikan pop-up saat tombol close (x) diklik
closeBtn.addEventListener("click", function () {
  popup.style.display = "none";
});

// Menyembunyikan pop-up jika pengguna mengklik di luar konten pop-up
window.addEventListener("click", function (event) {
  if (event.target === popup) {
    popup.style.display = "none";
  }
});
