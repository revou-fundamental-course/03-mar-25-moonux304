// Function to validate form
document.addEventListener("DOMContentLoaded", function () {
    let name = prompt("Siapa namamu?");
    if (name) {
        document.getElementById("username").textContent = name;
    }
});


function validateForm() {
    // Get value from input
    const nameInput = document.getElementById('name-input');
    const birthDate = document.getElementById('tanggal-lahir');
    const gender = document.querySelector('input[name="gender"]:checked');
    const message = document.getElementById('pesan');
    const resultDiv = document.getElementById('validation-result');

    // Reset result div tiap kali submit
    resultDiv.innerHTML = '';
    resultDiv.style.color = 'white';

    // Check validations
    let errors = [];

    if (nameInput.value.trim() === '') {
        errors.push('Nama harus diisi.');
    }
    if (birthDate.value === '') {
        errors.push('Tanggal lahir harus diisi.');
    }
    if (!gender) {
        errors.push('Jenis kelamin harus dipilih.');
    }
    if (message.value.trim() === '') {
        errors.push('Pesan tidak boleh kosong.');
    }

    // Tampilkan hasil validasi
    if (errors.length > 0) {
        resultDiv.innerHTML = errors.join('<br>');
    } else {
        resultDiv.innerHTML = `
            <strong>Form berhasil dikirim!</strong><br><br>
            <strong>Nama:</strong> ${nameInput.value}<br>
            <strong>Tanggal Lahir:</strong> ${birthDate.value}<br>
            <strong>Jenis Kelamin:</strong> ${gender.value}<br>
            <strong>Pesan:</strong> ${message.value.replace(/\n/g, '<br>')}
        `;
    }
}


let bannerIndex = 0;
showBanner();

// Function to change banner
function nextBanner() {
    bannerIndex += 1;
    showBanner();
}

// Function to show banner
function showBanner() {
    // Get all banner elements
    const banners = document.getElementsByClassName('banner-img');

    if (bannerIndex >= banners.length) {
        bannerIndex = 0;
    }

    // Loop through all banner elements
    for (let i = 0; i < banners.length; i++) {
        banners[i].style.display = 'none';
    }

    // Show first banner
    banners[bannerIndex].style.display = 'block';
}

// Set interval to change banner
setInterval(nextBanner, 3000);
