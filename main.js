async function getJSON(url) {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        updateContent(data);
    } catch (error) {
        console.error("Error fetching JSON:", error);
    }
}

function updateContent(data) {
    document.getElementById("co").textContent = data.company || "Tidak tersedia";
    document.getElementById("email").textContent = data.email || "Tidak tersedia";
    document.getElementById("phone").textContent = data.phone || "Tidak tersedia";
    document.getElementById("address").textContent = data.address || "Tidak tersedia";
    document.getElementById("rate").textContent = data.rate || "Tidak tersedia";
}

// Panggil fungsi dengan URL JSON (ganti dengan URL yang sesuai)
getJSON("https://t.if.co.id/714240061/");
