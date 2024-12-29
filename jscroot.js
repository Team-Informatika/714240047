// Contoh JavaScript untuk interaksi
document.addEventListener('DOMContentLoaded', () => {
    // Tambahkan efek hover ke kartu nama
    const card = document.querySelector('.card');

    card.addEventListener('mouseenter', () => {
        card.style.transform = 'scale(1.05)';
        card.style.transition = 'transform 0.3s ease';
    });

    card.addEventListener('mouseleave', () => {
        card.style.transform = 'scale(1)';
    });

    // Tampilkan pesan di console ketika elemen diklik
    card.addEventListener('click', () => {
        console.log('Hubungi (+62) 1234-5678');
        alert('Hubungi (+62) 1234-5678');
    });
});
