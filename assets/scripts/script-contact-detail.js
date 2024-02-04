const urlParams = new URLSearchParams(window.location.search);
const contactId = urlParams.get('id');

if (contactId !== null) {
    const selectedContact = contacts[contactId];
    const nombreElement = document.getElementById("contact-name");
    const telefonoElement = document.getElementById("contact-phone");
    const emailElement = document.getElementById("contact-email"); // Agrega más elementos según sea necesario
 
    nombreElement.textContent = `${selectedContact.name} ${selectedContact.lastName}`;
    telefonoElement.textContent = selectedContact.phoneNumber;
    emailElement.textContent = selectedContact.email; // Completa los demás detalles
 } else {
    // Manejar el caso en el que no se proporciona un ID de contacto
 }
 