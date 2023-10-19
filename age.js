// Récupérez l'élément du formulaire
const birthdayForm = document.getElementById("birthdayForm");

// Ajoutez un gestionnaire d'événement au formulaire
birthdayForm.addEventListener("submit", function(event) {
    event.preventDefault();

    // Récupérez la valeur de l'âge entrée par l'utilisateur
    const birthdateInput = document.getElementById("birthdate");
    const birthdate = new Date(birthdateInput.value);
    const today = new Date();
    const age = today.getFullYear() - birthdate.getFullYear();

    // Vérifiez si l'utilisateur est majeur (âge >= 18)
    if (age >= 18) {
        // Redirigez l'utilisateur vers votre contenu principal
        alert("Bravo ! Tu peux accéder à notre site de campagne !");
        window.location.href = "index.html";
    } else {
        // Affichez un message d'erreur
        alert("Désolé, tu dois être âgé de 18 ans ou plus pour accéder à ce site.");
    }
});
