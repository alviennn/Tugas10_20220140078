const welcomeText = document.getElementById('welcomeText');
const text = "Selamat Datang";
const menuText = "Pilih Menu Dibawah";

let index = 0;
let currentText = text;

function animateText() {
    
    if (currentText === text && index < text.length) {
        welcomeText.textContent += text.charAt(index);
        index++;
        setTimeout(animateText, 100); 
    }
    
    else if (currentText === text && index === text.length) {
        setTimeout(changeText, 1500); 
    }
    
    else if (currentText === menuText && index < menuText.length) {
        welcomeText.textContent += menuText.charAt(index);
        index++;
        setTimeout(animateText, 100);
    }

    else if (currentText === menuText && index === menuText.length) {
        setTimeout(changeText, 1500); 
    }
}

function changeText() {
    if (currentText === text) {
        currentText = menuText;
    } else {
        currentText = text;
    }
    index = 0;
    welcomeText.textContent = "";
    setTimeout(animateText, 1000); 
}

animateText();

function hitungUmur() {
    var tanggalLahir = document.getElementById("tanggal_lahir").value;
    var tanggalLahirObj = new Date(tanggalLahir);
    var sekarang = new Date();
    var tahunLahir = tanggalLahirObj.getFullYear();
    var bulanLahir = tanggalLahirObj.getMonth() + 1;
    var tanggalLahir = tanggalLahirObj.getDate();
    var tahunSekarang = sekarang.getFullYear();
    var bulanSekarang = sekarang.getMonth() + 1;
    var tanggalSekarang = sekarang.getDate();

    var umur = tahunSekarang - tahunLahir;

    if (bulanSekarang < bulanLahir || (bulanSekarang == bulanLahir && tanggalSekarang < tanggalLahir)) {
        umur--;
    }

    document.getElementById("umur").value = umur;
}

function checkAnswer(answer) {
    let message;
    if (answer === 'musik') {
        message = 'Betul sekali';
    } else {
        message = 'Ngawur';
    }
    showNotification(message);
}

function showNotification(message) {
    const notification = document.getElementById('notification');
    notification.textContent = message;
    notification.style.display = 'block';
    setTimeout(() => {
        notification.style.display = 'none';
    }, 2000);
}

