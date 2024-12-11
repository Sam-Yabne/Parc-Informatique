// script.js (connexion)
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
        localStorage.setItem("authenticated", "true"); // Utiliser localStorage pour conserver la session
        alert("Connexion réussie !");
        window.location.href = "PageAcceuil.html"; // Redirection vers une autre page
    } else {
        errorMessage.textContent = "Nom d'utilisateur ou mot de passe incorrect.";
    }
});
document.getElementById("logout").addEventListener("click", function () {
    localStorage.removeItem("authenticated"); // Supprime l'état d'authentification
    alert("Vous avez été déconnecté.");
    window.location.href = "./index.html"; // Redirection vers la page d'accueil (connexion)
});

async function hashPassword(password) {
    const encoder = new TextEncoder();
    const data = encoder.encode(password);
    const hash = await crypto.subtle.digest("SHA-256", data);
    return Array.from(new Uint8Array(hash))
        .map((b) => b.toString(16).padStart(2, "0"))
        .join("");
}
