// script.js
document.getElementById("login-form").addEventListener("submit", function (e) {
    e.preventDefault(); // Empêche le rechargement de la page

    // Identifiants fictifs
    const correctUsername = "admin";
    const correctPassword = "1234";

    // Récupération des valeurs saisies
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    const errorMessage = document.getElementById("error-message");

    // Vérification des identifiants
    if (username === correctUsername && password === correctPassword) {
        alert("Connexion réussie !");
        window.location.href = "PageAcceuil.html"; // Redirection vers une autre page
    } else {
        errorMessage.textContent = "Nom d'utilisateur ou mot de passe incorrect.";
    }
});
