// auth.js
if (localStorage.getItem("authenticated") !== "true") {
    alert("Vous devez vous connecter pour accéder à cette page.");
    window.location.href = "./index.html"; // Redirection vers la page de connexion
}
