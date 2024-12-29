// jscroot.js

// Fungsi untuk merender HTML baru ke dalam elemen tertentu
function renderHTML(elementId, htmlContent) {
    const element = document.getElementById(elementId);
    if (element) {
        element.innerHTML = htmlContent;
    }
}

// Fungsi untuk menangani event klik
function onClickHandler() {
    const newEmail = "<strong>Email:</strong> richard.newemail@example.com";
    const newPhone = "<strong>Telepon:</strong> (+62) 9876-5432";
    const newAddress = "<strong>Alamat:</strong> Jalan Merdeka No. 1, Jakarta";
    const newRate = "<strong>Rate Per Hour:</strong> 25K/Match";

    // Mengubah konten HTML elemen tertentu menggunakan innerHTML
    renderHTML('email', newEmail);
    renderHTML('phone', newPhone);
    renderHTML('address', newAddress);
    renderHTML('rate', newRate);
}

// Menambahkan event listener pada tombol untuk mengubah informasi
document.addEventListener('DOMContentLoaded', function() {
    const changeInfoBtn = document.getElementById('changeInfoBtn');
    if (changeInfoBtn) {
        changeInfoBtn.addEventListener('click', onClickHandler);
    }
});
