import { getJSON } from "https://cdn.jsdelivr.net/gh/jscroot/lib@0.2.0/api.js";
import { renderHTML } from "https://cdn.jsdelivr.net/gh/jscroot/lib@0.2.0/element.js";

// Render halaman
renderHTML("root", "home.html");

// Ambil data dari JSON
getJSON("https://t.if.co.id/json/richard.json", null, null, responseFunction);

function responseFunction(response) {
    const data = response.card.details;
    const avatar = response.card.avatar;
    const socialLinks = data.social_links;

    // Render avatar
    const avatarHTML = `<img src="${avatar.src}" alt="${avatar.alt}">`;
    document.getElementById("profile-img").innerHTML = avatarHTML;

    // Render nama
    document.getElementById("profile-name").textContent = data.name;

    // Render company name (Tidak ada di JSON, bisa dikosongkan atau diisi manual)
    document.getElementById("company-name").textContent = "Freelancer MLBB";

    // Render job title
    document.getElementById("job-title").textContent = data.occupation;

    // Render email dari social_links
    const emailObj = socialLinks.find(link => link.platform === "Email");
    document.getElementById("email").textContent = emailObj ? emailObj.url.replace("mailto:", "") : "Tidak tersedia";

    // Render phone dari WhatsApp
    const phoneObj = socialLinks.find(link => link.platform === "WhatsApp");
    document.getElementById("phone").textContent = phoneObj ? phoneObj.url.replace("https://wa.me/", "") : "Tidak tersedia";

    // Render address dari social_links
    const addressObj = socialLinks.find(link => link.platform === "Alamat");
    document.getElementById("address").textContent = addressObj ? "Lihat di Maps" : "Tidak tersedia";

    // Render rate per pertandingan
    document.getElementById("rate").textContent = data.rate_day.price;
}
