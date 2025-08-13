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

function shareWebsite() {
    if (navigator.share) {
        navigator.share({
            title: document.title,
            text: "Check out this amazing website!",
            url: window.location.href
        })
        .then(() => console.log("Website shared successfully"))
        .catch(err => console.error("Error sharing:", err));
    } else {
        alert("Sharing is not supported on your browser. Copy this link: " + window.location.href);
    }
}

function toggleBookmark(plantName) {
    let bookmarks = JSON.parse(localStorage.getItem("bookmarkedPlants")) || [];

    if (bookmarks.includes(plantName)) {
        bookmarks = bookmarks.filter(name => name !== plantName);
        alert(`${plantName} removed from bookmarks`);
    } else {
        bookmarks.push(plantName);
        alert(`${plantName} added to bookmarks`);
    }

    localStorage.setItem("bookmarkedPlants", JSON.stringify(bookmarks));
}


document.addEventListener("DOMContentLoaded", function () {
    const searchInput = document.getElementById("search");
    const cards = document.querySelectorAll(".plant-card");

    // Detect if we are on bookmark page
    const isBookmarkPage = window.location.pathname.includes("bookmarks.html");

    searchInput.addEventListener("input", function () {
        const query = searchInput.value.toLowerCase();

        cards.forEach(card => {
            const plantName = card.querySelector("h3").textContent.toLowerCase();
            // If bookmark page → search in bookmarked plants only
            if (isBookmarkPage) {
                card.style.display = plantName.includes(query) ? "block" : "none";
            } else {
                // Home page → search in all plants
                card.style.display = plantName.includes(query) ? "block" : "none";
            }
        });
    });
});

document.addEventListener("DOMContentLoaded", function() {
    let bookmarks = JSON.parse(localStorage.getItem("bookmarkedPlants")) || [];
    let container = document.getElementById("bookmarksList");

    if (bookmarks.length === 0) {
        container.innerHTML = "<p>No bookmarks yet.</p>";
        return;
    }

    bookmarks.forEach(name => {
        let card = `
            <div class="col-md-4">
                <div class="card p-3 m-2 shadow">
                    <h3>${name}</h3>
                    <button class="btn btn-danger" onclick="removeBookmark('${name}')">Remove</button>
                </div>
            </div>
        `;
        container.innerHTML += card;
    });
});

function removeBookmark(plantName) {
    let bookmarks = JSON.parse(localStorage.getItem("bookmarkedPlants")) || [];
    bookmarks = bookmarks.filter(name => name !== plantName);
    localStorage.setItem("bookmarkedPlants", JSON.stringify(bookmarks));
    location.reload();
}
