// Sidebar button
const sidebarButton = document.querySelector('#btn');
const sidebar = document.querySelector('.sidebar');

sidebarButton.onclick = function () {
    sidebar.classList.toggle('active');
};



/* Contacto 1*/
const contactoDiv = document.getElementById("contacto");

contactoDiv.addEventListener("click", function () {
    window.location.href = "/assets/pages/contactDetail.html";
});

/* Contacto 2*/
const contactoDiv1 = document.getElementById("contacto1");

contactoDiv1.addEventListener("click", function () {
    window.location.href = "/assets/pages/contactDetail1.html";
});

/* Contacto 3*/
const contactoDiv2 = document.getElementById("contacto2");

contactoDiv2.addEventListener("click", function () {
    window.location.href = "/assets/pages/contactDetail2.html";
});

/* Contacto 4*/
const contactoDiv3 = document.getElementById("contacto3");

contactoDiv3.addEventListener("click", function () {
    window.location.href = "/assets/pages/contactDetail3.html";
});

/* Contacto 5*/
const contactoDiv4 = document.getElementById("contacto4");

contactoDiv4.addEventListener("click", function () {
    window.location.href = "/assets/pages/contactDetail4.html";
});