import { getJSON } from "https://cdn.jsdelivr.net/gh/jscroot/lib@0.2.0/api.js";
import { renderHTML } from "https://cdn.jsdelivr.net/gh/jscroot/lib@0.2.0/element.js";

// Render halaman home.html ke dalam #root
renderHTML("root", "home.html");

// Tunggu hingga home.html dimuat sebelum mengambil data JSON
setTimeout(() => {
    getJSON("https://t.if.co.id/json/richard.json", null, null, responseFunction);
}, 1000); // Tunggu 1 detik agar home.html selesai dimuat

function responseFunction(response) {
    console.log("Data JSON yang diterima:", response); // Debugging

    const jsonData = response.data || response; 

    if (!jsonData.card || !jsonData.card.details) {
        console.error("Error: Struktur JSON tidak sesuai!", jsonData);
        return;
    }

    const data = jsonData.card.details;
    const avatar = jsonData.card.avatar || {};
    const socialLinks = data.social_links || [];

    // Fungsi untuk menghindari error jika elemen tidak ditemukan
    function setText(id, value) {
        const element = document.getElementById(id);
        if (element) {
            element.textContent = value || "Tidak tersedia";
        } else {
            console.warn(`⚠️ Elemen dengan ID "${id}" tidak ditemukan.`);
        }
    }

    function setHTML(id, value) {
        const element = document.getElementById(id);
        if (element) {
            element.innerHTML = value || "Tidak tersedia";
        } else {
            console.warn(`⚠️ Elemen dengan ID "${id}" tidak ditemukan.`);
        }
    }

    // Render avatar
    setHTML("profile-img", `<img src="${avatar.src || 'default-avatar.png'}" alt="${avatar.alt || 'Foto Profil'}">`);

    // Render teks informasi
    setText("profile-name", data.name);
    setText("company-name", "Freelancer MLBB");
    setText("job-title", data.occupation);

    // Render email
    const emailObj = socialLinks.find(link => link.platform === "Email");
    setText("email", emailObj ? emailObj.url.replace("mailto:", "") : "Tidak tersedia");

    // Render phone
    const phoneObj = socialLinks.find(link => link.platform === "WhatsApp");
    setText("phone", phoneObj ? phoneObj.url.replace("https://wa.me/", "") : "Tidak tersedia");

    // Render address sebagai link
    const addressObj = socialLinks.find(link => link.platform === "Alamat");
    if (addressObj) {
        setHTML("address", `<a href="${addressObj.url}" target="_blank">Lihat di Maps</a>`);
    } else {
        setText("address", "Tidak tersedia");
    }

    // Render rate per pertandingan
    setText("rate", data.rate_day?.price);
}
