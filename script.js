// script.js

document.addEventListener("DOMContentLoaded", function () {
    const searchInput = document.querySelector('form[role="search"] input');
    const plantCards = document.querySelectorAll(".plant-card");

    searchInput.addEventListener("input", function () {
        const query = searchInput.value.toLowerCase().trim();

        plantCards.forEach(card => {
            const plantName = card.querySelector("h2").textContent.toLowerCase();
            if (plantName.includes(query)) {
                card.style.display = "";
            } else {
                card.style.display = "none";
            }
        });
    });
});
