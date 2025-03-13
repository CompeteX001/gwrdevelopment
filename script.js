document.getElementById('menu-icon').addEventListener('click', function() {
    document.getElementById('menu-overlay').style.width = '100%';
});

document.getElementById('close-btn').addEventListener('click', function() {
    document.getElementById('menu-overlay').style.width = '0';
});