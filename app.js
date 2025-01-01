document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("noteForm");
    const noteInput = document.getElementById("noteInput");
    const thankYouMessage = document.getElementById("thankYouMessage");

    // Check if the user has already submitted a note
    if (localStorage.getItem("hasSubmittedNote")) {
        form.style.display = "none";
        thankYouMessage.style.display = "block";
    }

    // Handle form submission
    form.addEventListener("submit", (e) => {
        e.preventDefault(); // Prevent page reload
        const note = noteInput.value.trim();

        if (note) {
            // Store the note in localStorage
            localStorage.setItem("userNote", note);
            localStorage.setItem("hasSubmittedNote", true);

            // Update the UI
            form.style.display = "none";
            thankYouMessage.style.display = "block";
        }
    });
});