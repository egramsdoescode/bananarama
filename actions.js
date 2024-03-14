// Select all button elements
const buttons = document.querySelectorAll('button');

// Define the text to display on hover
const hoverText = "Get Bananas!";

// Loop through each button and add event listeners
buttons.forEach(button => {
    // Add event listener for mouseenter event
    button.addEventListener('mouseenter', function() {
        // Change the text when hovered over
        this.textContent = hoverText;
    });

    // Add event listener for mouseleave event
    button.addEventListener('mouseleave', function() {
        // Change the text back to original on mouseleave
        this.textContent = "Sign Up";
    });
});

