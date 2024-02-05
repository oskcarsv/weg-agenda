// Sidebar button
const sidebarButton = document.querySelector('#btn');
const sidebar = document.querySelector('.sidebar');

sidebarButton.onclick = function () {
    sidebar.classList.toggle('active');
};


// Contact cards
const contacts = [
    {
        "name": "Oscar",
        "lastName": "José",
        "address": "Zona 10, Guatemala",
        "email": "oscar@example.com",
        "birthDate": "22/08/2006",
        "phoneNumber": "+502 43568765"

    },
    {
        "name": "Valerie",
        "lastName": "Pacay",
        "address": "Zona 9, Guatemala",
        "email": "valerie@example.com",
        "birthDate": "22/09/2007",
        "phoneNumber": "+502 34567834"
    },
    {
        "name": "Ottoniel",
        "lastName": "Menéndez",
        "address": "Zona 7, Guatemal",
        "email": "ottoniel@example.com",
        "birthDate": "28/10/2006",
        "phoneNumber": "+502 09784576"
    }
    ,
    {
        "name": "Angel",
        "lastName": "Méndez",
        "address": "Zona 3, Guatemal",
        "email": "angel@example.com",
        "birthDate": "07-12-2005",
        "phoneNumber": "+502 45764312"
    },
    {
        "name": "José",
        "lastName": "Soto",
        "address": "Zona 1, Guatemal",
        "email": "jose@example.com",
        "birthDate": "16/11/2006",
        "phoneNumber": "+502 12345678"
    }
];


/* Contacto 1*/
const contactoDiv = document.getElementById("contacto1");

contactoDiv.addEventListener("click", function () {
    window.location.href = "/assets/pages/contactDetail.html";
});

/* Contacto 2*/
const contactoDiv2 = document.getElementById("contacto2");

contactoDiv2.addEventListener("click", function () {
    window.location.href = "/assets/pages/contactDetail2.html";
});