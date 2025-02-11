import { getJSON } from "https://cdn.jsdelivr.net/gh/jscroot/lib@0.2.0/api.js";
import { renderHTML } from "https://cdn.jsdelivr.net/gh/jscroot/lib@0.2.0/element.js";

// Render halaman home.html ke dalam #root
renderHTML("root", "home.html");

// Ambil data dari JSON
getJSON("https://t.if.co.id/json/richard.json", null, null, responseFunction);

function responseFunction(response) {
    console.log("Data JSON yang diterima:", response); // Debugging

    // Periksa apakah data ada di dalam `response.data`
    const jsonData = response.data || response; 

    if (!jsonData.card || !jsonData.card.details) {
        console.error("Error: Struktur JSON tidak sesuai!", jsonData);
        return;
    }

    const data = jsonData.card.details;
    const avatar = jsonData.card.avatar || {};
    const socialLinks = data.social_links || [];

    // Render avatar
    const profileImg = document.getElementById("profile-img");
    if (profileImg) {
        profileImg.innerHTML = `<img src="${avatar.src || 'default-avatar.png'}" alt="${avatar.alt || 'Foto Profil'}">`;
    }

    // Render nama
    document.getElementById("profile-name").textContent = data.name || "Tidak tersedia";

    // Render company name (Tidak ada di JSON, diisi default)
    document.getElementById("company-name").textContent = "Freelancer MLBB";

    // Render job title
    document.getElementById("job-title").textContent = data.occupation || "Tidak tersedia";

    // Render email dari social_links
    const emailObj = socialLinks.find(link => link.platform === "Email");
    document.getElementById("email").textContent = emailObj ? emailObj.url.replace("mailto:", "") : "Tidak tersedia";

    // Render phone dari WhatsApp
    const phoneObj = socialLinks.find(link => link.platform === "WhatsApp");
    document.getElementById("phone").textContent = phoneObj ? phoneObj.url.replace("https://wa.me/", "") : "Tidak tersedia";

    // Render address sebagai link
    const addressObj = socialLinks.find(link => link.platform === "Alamat");
    if (addressObj) {
        document.getElementById("address").innerHTML = `<a href="${addressObj.url}" target="_blank">Lihat di Maps</a>`;
    } else {
        document.getElementById("address").textContent = "Tidak tersedia";
    }

    // Render rate per pertandingan
    document.getElementById("rate").textContent = data.rate_day?.price || "Tidak tersedia";
}
