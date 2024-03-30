function sendMail() {
  let templateParams = {
    name: document.getElementById("name").value,
    lastname: document.getElementById("lastname").value,
    company: document.getElementById("company").value,
    request: document.getElementById("request").value,
    note: document.getElementById("note").value
  };

  emailjs.send('service_6g5fnea', 'template_2ivri26', templateParams)
    .then(function() {
      // Alert Bootstrap personalizzato per indicare che il messaggio è stato inviato con successo
      let alertDiv = document.createElement("div");
      alertDiv.classList.add("alert", "alert-success");
      alertDiv.setAttribute("role", "alert");
      alertDiv.textContent = "Your message has been sent!";
      
      // Aggiungi l'alert al contenitore dell'alert (sostituisci "alertContainer" con l'ID del tuo contenitore)
      document.getElementById("alertContainer").appendChild(alertDiv);

      // Rimuovi l'alert dopo un certo periodo di tempo (opzionale)
      setTimeout(function() {
        alertDiv.remove();
      }, 5000); // Rimuovi l'alert dopo 5 secondi (5000 millisecondi)
    })
    .catch(function(error) {
      // Alert per indicare che si è verificato un errore durante l'invio del messaggio
      alert("Si è verificato un errore durante l'invio del messaggio: " + error);
    });
}

document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("myForm").addEventListener("submit", function(event) {
    event.preventDefault();
    sendMail();
  });
});
