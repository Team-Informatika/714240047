import { getJSON } from "https://cdn.jsdelivr.net/gh/jscroot/lib@0.2.0/api.js";
import { setInner } from "https://cdn.jsdelivr.net/gh/jscroot/lib@0.2.0/element.js";

const apiURL = "https://t.if.co.id/json/richard.json"; // Pastikan URL ini benar dan bisa diakses

// Panggil getJSON dengan fungsi callback yang benar
getJSON(apiURL, null, null, renderHTML);

// Pastikan fungsi dideklarasikan sebelum dipanggil
function renderHTML(response) {
    if (response.status === 200) {
        console.log('HTTP Status:', response.status);
        console.log('Response Data:', response.data);
        
        const data = response.data;

        // Set judul halaman
        setInner("page-title", data.title);

        // Set informasi profil
        setInner("profile-name", data.profile.name);
        setInner("company-name", data.profile.company);
        setInner("job-title", data.profile.job_title);
        
        // Set gambar profil dengan cara yang benar
        document.getElementById("profile-img").setAttribute("src", data.profile.image);

        // Set informasi kontak
        setInner("email", data.contact.email);
        setInner("phone", data.contact.phone);
        setInner("address", data.contact.address);
        setInner("rate", data.contact.rate);
    } else {
        console.error("Gagal mengambil data JSON");
    }
}
