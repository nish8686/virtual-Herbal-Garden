document.addEventListener("DOMContentLoaded", () => {
    const searchBox = document.getElementById("searchBox");
    const searchBtn = document.getElementById("searchBtn");
    const cards = document.querySelectorAll(".plant-card");
    const noResultMessage = document.getElementById("noResultMessage");

    function filterPlants() {
        let query = searchBox.value.toLowerCase();
        let found = false;

        cards.forEach(card => {
            let text = card.textContent.toLowerCase();
            if (text.includes(query)) {
                card.style.display = "";
                found = true;
            } else {
                card.style.display = "none";
            }
        });

        // if result not found
        if (!found) {
            noResultMessage.style.display = "block";
        } else {
            noResultMessage.style.display = "none";
        }
    }

    // Search 
    searchBox.addEventListener("input", filterPlants);

    // Search when button clicked
    searchBtn.addEventListener("click", filterPlants);
});
