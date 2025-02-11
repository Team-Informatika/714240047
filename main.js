import { getJSON } from "https://cdn.jsdelivr.net/gh/jscroot/lib@0.2.0/api.js";
import { renderHTML } from "https://cdn.jsdelivr.net/gh/jscroot/lib@0.2.0/element.js";

// Render halaman
renderHTML("root", "home.html");

// Ambil data dari JSON
getJSON("https://t.if.co.id/json/richard.json", null, null, responseFunction);

function responseFunction(response) {
    const data = response.data;

    // Render avatar
    const avatarHTML = `<img src="${data.profileImage}" alt="Profile Image">`;
    document.getElementById("profile-img").innerHTML = avatarHTML;

    // Render nama
    document.getElementById("profile-name").textContent = data.profileName;

    // Render company name
    document.getElementById("company-name").textContent = data.companyName;

    // Render job title
    document.getElementById("job-title").textContent = data.jobTitle;

    // Render email
    document.getElementById("email").textContent = data.email;

    // Render phone
    document.getElementById("phone").textContent = data.phone;

    // Render address
    document.getElementById("address").textContent = data.address;

    // Render hourly rate
    document.getElementById("rate").textContent = data.ratePerHour;
}

// Fungsi untuk membuka modal
function openModal(src) {
  const modal = document.getElementById("modal");
  const modalImage = document.getElementById("modalImage");

  modalImage.src = src;
  modal.classList.add("active");

  // Tutup modal saat pengguna mengklik di luar gambar
  modal.addEventListener("click", () => {
    modal.classList.remove("active");
    modalImage.src = ""; // Kosongkan src untuk menghindari cache
  });
}