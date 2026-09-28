document.getElementById("startBtn").addEventListener("click", function () {
    // Display the welcome message
    alert("Welcome to the Student Score Evaluator!");

    // Ask the user to enter their name
    let studentName = prompt("Please enter your name:");

    // Ask the user to enter their score
    let studentScore = prompt("Please enter your score:");

    // Convert the score into a number
    let score = Number(studentScore);

    // Ask if the user wants to continue
    let continueEvaluation = confirm("Do you want to continue with the evaluation?");

    if (!continueEvaluation) {
        alert("Evaluation cancelled.");
        return;
    }

    document.getElementById("nameOutput").textContent = studentName;
    document.getElementById("scoreOutput").textContent = score;
    document.getElementById("resultBox").classList.remove("hidden");
});