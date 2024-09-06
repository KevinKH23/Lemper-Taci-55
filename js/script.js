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

// Mendapatkan elemen
const minusButton = document.getElementById("minus");
const plusButton = document.getElementById("plus");
const quantityDisplay = document.getElementById("quantity");
const totalDisplay = document.getElementById("total");

let quantity = 1;
const pricePerItem = 3000;

// Fungsi untuk memperbarui tampilan total harga
function updateTotal() {
  const total = quantity * pricePerItem;
  totalDisplay.textContent = `Rp ${total.toLocaleString("id-ID")}`;
}

// Fungsi untuk mengurangi jumlah
minusButton.addEventListener("click", function () {
  if (quantity > 1) {
    quantity--;
    quantityDisplay.textContent = quantity;
    updateTotal();
  }
});

// Fungsi untuk menambah jumlah
plusButton.addEventListener("click", function () {
  quantity++;
  quantityDisplay.textContent = quantity;
  updateTotal();
});

// Perbarui total saat halaman dimuat
updateTotal();

// Button submit diklik
document.getElementById("order-form").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const date = document.getElementById("date").value;
  const quantity = quantityDisplay.textContent;

  // Format tanggal menjadi day/month/year
  const [year, month, day] = date.split("-");
  const formattedDate = `${day}/${month}/${year}`;

  const message = `Hai, apakah saya bisa memesan lemper untuk tanggal ${formattedDate} dengan jumlah ${quantity} atas nama ${name}?`;

  const encodedMessage = encodeURIComponent(message);
  const whatsappURL = `https://wa.me/6282120797071?text=${encodedMessage}`;

  window.open(whatsappURL, "_blank");
});
