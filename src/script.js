
// Menambahkan shadow pada navbar ketika di-scroll
window.addEventListener("scroll", function () {
  const navbar = document.querySelector("nav");
  if (window.scrollY > 10) {
    // Jika user scroll lebih dari 10px
    navbar.classList.add("shadow-lg"); // Tambahkan shadow besar
  } else {
    navbar.classList.remove("shadow-lg"); // Hapus shadow
  }
});
