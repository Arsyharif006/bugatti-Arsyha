// Function to toggle menu
function ToggleMenu() {
    const menu = document.querySelector('.menu');
    const nav = document.querySelector('.nav');
    menu.classList.toggle('active');
    nav.classList.toggle('active');
}

// Function to change video and model
function changeVideo(name) {
    const bgVideoList = document.querySelectorAll('.bg-video');
    const models = document.querySelectorAll('.model');

    bgVideoList.forEach(video => {
        video.classList.remove('active');
        if (video.classList.contains(name)) {
            video.classList.add('active');
        }
    });
    models.forEach(model => {
        model.classList.remove('active');
        if (model.classList.contains(name)) {
            model.classList.add('active');
        }
    });
}

document.addEventListener("DOMContentLoaded", function() {
    // Menentukan waktu penundaan (dalam milidetik)
    var delayTime = 3200; // 3 detik

    // Menyembunyikan loader setelah beberapa detik
    setTimeout(function() {
        var loader = document.getElementById('loader');
        loader.style.display = 'none';
    }, delayTime);
});
