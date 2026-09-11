// Get the form from the HTML
const form = document.querySelector("form");

// Get all of the picture descriptions
const descriptions = document.querySelectorAll("#pictures p");

// Get the button for showing and hiding descriptions
const descriptionButton = document.querySelector("#showDescriptions");

// Hide the descriptions when the page first loads
descriptions.forEach(function(description) {
    description.style.display = "none";
});

// Change the button text
descriptionButton.textContent = "Show Picture Descriptions";

// Function that shows the thank you message
function showThankYou() {
    form.innerHTML = "<h3>Thanks for your response!</h3>";
}

// Event listener for submitting the form
form.addEventListener("submit", function(event) {
    event.preventDefault();
    showThankYou();
});

// Event listener for showing and hiding picture descriptions
descriptionButton.addEventListener("click", function() {
    descriptions.forEach(function(description) {

        if (description.style.display === "none") {
            description.style.display = "block";
            descriptionButton.textContent = "Hide Picture Descriptions";
        } else {
            description.style.display = "none";
            descriptionButton.textContent = "Show Picture Descriptions";
        }
    });
});