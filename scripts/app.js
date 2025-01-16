document.addEventListener("DOMContentLoaded", () => {
    const typewriterElement = document.getElementById("typewriter");
    const typewriterContainer = document.querySelector(".typewriter-container");
    const text = "THINK FORWARD"; // Text to animate
    let index = 0;

    function typeWriter() {
        if (index < text.length) {
            typewriterElement.innerHTML += text.charAt(index);
            index++;
            setTimeout(typeWriter, 50); // Adjust typing speed here
        } else {
            setTimeout(() => {
                createWhooshingEffect(); // Trigger the whooshing effect after typing finishes
            }, 1000); // Pause for 1 second before triggering the effect
        }
    }

    function createWhooshingEffect() {
        // Add a "whooshing" block animation
        const whooshBlock = document.createElement("div");
        whooshBlock.classList.add("whoosh-block");
        typewriterContainer.appendChild(whooshBlock);

        // Animate the block and restart typing
        setTimeout(() => {
            whooshBlock.remove(); // Remove the block after animation
            resetTypewriter(); // Restart typing
        }, 1000); // Match duration of animation in CSS
    }

    function resetTypewriter() {
        typewriterElement.innerHTML = ""; // Clear the existing text
        index = 0; // Reset typing index
        typeWriter(); // Restart typing animation
    }

    typeWriter(); // Start the typewriter effect
});
