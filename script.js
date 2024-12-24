document.addEventListener("DOMContentLoaded", function () {
    // Correct word
    const correctAnswer = "WOODCARVING";

    // Check answer function
    function checkAnswer() {
        const userAnswer = document
            .getElementById("answer-input")
            .value
            .trim()
            .replace(/\s+/g, " ") // Remplace les espaces multiples par un seul
            .toUpperCase();

        console.log("User Answer:", userAnswer);

        if (userAnswer === correctAnswer) {
            // Show reward section
            document.getElementById("reward-section").style.display = "block";
        } else {
            alert("Sorry, it's the wrong answer. Try again! I believe in you!");
        }
    }

    // Log input changes for debugging
    document.getElementById("answer-input").addEventListener("input", function () {
        console.log("User is typing:", this.value);
    });

    // Listen for Enter key press in the input field
    document.getElementById("answer-input").addEventListener("keypress", function (event) {
        if (event.key === "Enter") {
            // Prevent default behavior of Enter
            event.preventDefault();
            // Trigger the checkAnswer function
            checkAnswer();
        }
    });

    // Attach click event to the button
    document.querySelector("button").addEventListener("click", checkAnswer);
});
