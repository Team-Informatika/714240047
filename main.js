import { getJSON } from "https://cdn.jsdelivr.net/gh/jscroot/lib@0.2.0/api.js";
import { renderHTML} from "https://cdn.jsdelivr.net/gh/jscroot/lib@0.2.0/element.js"
const apiURL = "https://t.if.co.id/json/richard.json"; // Pastikan URL ini benar dan bisa diakses

// Panggil getJSON dengan fungsi callback yang benar
getJSON(apiURL, null, null, (response) => {
    if (response.status === 200) {
        console.log('HTTP Status:', response.status);
        console.log('Response Data:', response.data);
        
        const data = response.data;
        
        document.getElementById("page-title").textContent = data.pageTitle;
        document.getElementById("profile-img").src = data.profileImage;
        document.getElementById("profile-name").textContent = data.profileName;
        document.getElementById("company-name").textContent = data.companyName;
        document.getElementById("job-title").textContent = data.jobTitle;
        document.getElementById("email").textContent = data.email;
        document.getElementById("phone").textContent = data.phone;
        document.getElementById("address").textContent = data.address;
        document.getElementById("rate").textContent = data.ratePerHour;
    } else {
        console.error("Gagal mengambil data JSON:", response);
    }
});
