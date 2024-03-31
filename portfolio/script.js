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

      let alertDiv = document.createElement("div");
      alertDiv.classList.add("alert", "alert-success");
      alertDiv.setAttribute("role", "alert");
      alertDiv.textContent = "Your message has been sent!";
      
     )
      document.getElementById("alertContainer").appendChild(alertDiv);

      setTimeout(function() {
        alertDiv.remove();
      }, 5000);
    })
    .catch(function(error) {

      alert("Si è verificato un errore durante l'invio del messaggio: " + error);
    });
}

function toggleMenu() {
  var menu = document.getElementById("navbarNav");
  if (menu.classList.contains("menu-collapsed")) {
      menu.classList.remove("menu-collapsed");
      menu.classList.add("menu-expanded");
  } else {
      menu.classList.remove("menu-expanded");
      menu.classList.add("menu-collapsed");
  }
}

document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("myForm").addEventListener("submit", function(event) {
    event.preventDefault();
    sendMail();
  });
});
