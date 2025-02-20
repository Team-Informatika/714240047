import { getJSON } from "https://cdn.jsdelivr.net/gh/jscroot/lib@0.2.0/api.js";
import { renderHTML } from "https://cdn.jsdelivr.net/gh/jscroot/lib@0.2.0/element.js";

// Render halaman
renderHTML("root", "home.html");

// Ambil data dari JSON
getJSON("https://t.if.co.id/json/pohan.json", null, null, responseFunction);

function responseFunction(response) {
    console.log("✅ Data JSON diterima:", response);

    if (!response || !response.data || !response.data.card) {
        console.error("❌ Data JSON tidak valid!", response);
        return;
    }

    const card = response.data.card;
    const details = card.details;
    const avatar = card.avatar;

    if (!details || !avatar) {
        console.error("❌ Struktur JSON tidak sesuai!", response);
        return;
    }

    console.log("🔍 Data terdeteksi:");
    console.log("🖼️ Gambar Profil:", avatar.src);
    console.log("👤 Nama:", details.name);
    console.log("💼 Pekerjaan:", details.occupation);
    console.log("📌 Deskripsi:", details.about[0]?.value);
    console.log("💰 Tarif:", details.rate_day.price);
    console.log("📧 Email:", details.social_links[0]?.url);
    console.log("📞 Telepon:", details.social_links[1]?.url);
    console.log("📍 Alamat:", details.social_links[2]?.url);

    // Render avatar
    const profileImgDiv = document.getElementById("profile-img");
    if (profileImgDiv) {
        profileImgDiv.innerHTML = `<img src="${avatar.src}" 
                                   alt="${avatar.alt}" 
                                   style="width: 100px; height: 100px; border-radius: 50%;">`;
    } else {
        console.error("❌ Elemen 'profile-img' tidak ditemukan di home.html!");
    }

    // Render teks
    document.getElementById("profile-name").textContent = details.name || "Nama Tidak Ditemukan";
    document.getElementById("company-name").textContent = details.occupation || "Pekerjaan Tidak Ditemukan";
    document.getElementById("job-title").textContent = details.about[0]?.value || "Deskripsi Tidak Ditemukan";
    document.getElementById("email").textContent = details.social_links[0]?.url.replace("mailto:", "") || "Email Tidak Tersedia";
    document.getElementById("phone").textContent = details.social_links[1]?.url.replace("https://wa.me/", "") || "Telepon Tidak Tersedia";
    document.getElementById("address").textContent = details.social_links[2]?.url || "Alamat Tidak Tersedia";
    document.getElementById("rate").textContent = details.rate_day.price || "Tarif Tidak Diketahui";

    console.log("✅ Semua elemen sudah diperbarui di halaman!");
}
