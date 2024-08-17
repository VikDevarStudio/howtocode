document.getElementById('menu-button').addEventListener('click', function (event) {
    var menu = document.getElementById('menu');
    if (menu.style.maxHeight === '0px' || menu.style.opacity === '0') {
        menu.style.maxHeight = '500px'; // Adjust this value based on your menu content
        menu.style.opacity = '1';
    } else {
        menu.style.maxHeight = '0px';
        menu.style.opacity = '0';
    }
});

document.querySelectorAll('.submenu-button').forEach(function (button) {
    button.addEventListener('click', function (event) {
        event.stopPropagation(); // Prevents the main menu button event from triggering
        var submenu = this.parentElement.nextElementSibling;
        if (submenu.style.display === 'block') {
            submenu.style.display = 'none';
            this.classList.remove('open');
        } else {
            submenu.style.display = 'block';
            this.classList.add('open');
        }
    });
});

document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('.hidden-content').forEach(function (el) {
        el.style.display = 'none';
    });
});

