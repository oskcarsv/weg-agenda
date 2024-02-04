// Sidebar button
const sidebarButton = document.querySelector('#btn');
const sidebar = document.querySelector('.sidebar');

sidebarButton.onclick = function() {
  sidebar.classList.toggle('active');
};


// Contact cards
const contacts = [
  {
    "name": "Ana",
    "lastName": "Pérez",
    "address": "Calle Mayor 123",
    "email": "ana.perez@ejemplo.com",
    "birthDate": "1980-01-01",
    "phoneNumber": "+502 43568765"

  },
  {
    "name": "Juan",
    "lastName": "García",
    "address": "Calle del Sol 456",
    "email": "juan.garcia@ejemplo.com",
    "birthDate": "1985-02-02",
    "phoneNumber": "+502 12345678"
  },
  {
    "name": "Pedro",
    "lastName": "López",
    "address": "Calle de la Luna 789",
    "email": "pedro.lopez@ejemplo.com",
    "birthDate": "1990-03-03",
    "phoneNumber": "+502 12345678"
  }
];

const contactsContainer = document.getElementById("contactos");

function showContact(contact, index) {
    const contactCard = document.createElement("div");
    contactCard.classList.add("tarjeta-contacto", "tarjeta-contacto--animacion");
    contactCard.dataset.id = index;
  
    const nombreCompleto = document.createElement("h3");
    nombreCompleto.textContent = `${contact.name} ${contact.lastName}`;
  
    const telefono = document.createElement("p");
    telefono.textContent = `Teléfono: ${contact.phoneNumber}`;
  
    contactCard.appendChild(nombreCompleto);
    contactCard.appendChild(telefono);
  
    contactsContainer.appendChild(contactCard);
  }
  
  contacts.forEach(showContact);