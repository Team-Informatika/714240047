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
    document.getElementById("profile-img").src = avatar.src;
    document.getElementById("profile-img").alt = avatar.alt;

    // Render nama
    document.getElementById("profile-name").textContent = data.name;

    // Render company name (Tidak ada di JSON, diisi default)
    document.getElementById("company-name").textContent = "Freelancer MLBB";

    // Render job title
    document.getElementById("job-title").textContent = data.occupation;

    // Render email dari social_links
    const emailObj = socialLinks.find(link => link.platform === "Email");
    document.getElementById("email").textContent = emailObj ? emailObj.url.replace("mailto:", "") : "Tidak tersedia";

    // Render phone dari WhatsApp
    const phoneObj = socialLinks.find(link => link.platform === "WhatsApp");
    document.getElementById("phone").textContent = phoneObj ? phoneObj.url.replace("https://wa.me/", "") : "Tidak tersedia";

    // Render address sebagai link
    const addressObj = socialLinks.find(link => link.platform === "Alamat");
    if (addressObj) {
        document.getElementById("address").href = addressObj.url;
        document.getElementById("address").textContent = "Lihat di Maps";
    } else {
        document.getElementById("address").textContent = "Tidak tersedia";
    }

    // Render rate per pertandingan
    document.getElementById("rate").textContent = data.rate_day.price;
}
