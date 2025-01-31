import { getJSON } from "https://cdn.jsdelivr.net/gh/jscroot/lib@0.2.0/api.js";
import { setInner } from "https://cdn.jsdelivr.net/gh/jscroot/lib@0.2.0/element.js";

// const apiURL = "richard.json"; // Ambil dari file JSON lokal

getJSON("https://t.if.co.id/json/richard.json", null, null, responseFunction);

function responseFunction(response) {
    console.log('HTTP Status:', response.status);
    console.log('Response Data:', response.data);

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
