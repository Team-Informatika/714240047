import { getJSON } from "https://cdn.jsdelivr.net/gh/jscroot/lib@0.2.0/api.js";
import { setInner, setAttribute } from "https://cdn.jsdelivr.net/gh/jscroot/lib@0.2.0/element.js";

const apiURL = "https://t.if.co.id/json/richard.json"; // Pastikan URL ini bisa diakses di browser

// Menggunakan then() untuk menangani response
getJSON(apiURL, null, null)
    .then(response => {
        console.log('HTTP Status:', response.status);
        console.log('Response Data:', response.data);
        renderHTML(response);
    })
    .catch(error => {
        console.error("Error fetching JSON:", error);
    });

function renderHTML(response) {
    if (response.status === 200) {
        const data = response.data;

        // Set judul halaman
        setInner("page-title", data.title);

        // Set informasi profil
        setInner("profile-name", data.profile.name);
        setInner("company-name", data.profile.company);
        setInner("job-title", data.profile.job_title);
        setAttribute("profile-img", "src", data.profile.image);

        // Set informasi kontak
        setInner("email", data.contact.email);
        setInner("phone", data.contact.phone);
        setInner("address", data.contact.address);
        setInner("rate", data.contact.rate);
    } else {
        console.error("Gagal mengambil data JSON");
    }
}
