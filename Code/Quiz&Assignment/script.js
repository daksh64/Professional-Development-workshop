// JavaScript code for handling quiz and assignment submissions

document.addEventListener("DOMContentLoaded", function () {
    const quizForm = document.getElementById("quiz-form");
    const assignmentForm = document.getElementById("assignment-form");

    quizForm.addEventListener("submit", function (e) {
        e.preventDefault();
        const selectedAnswer = document.querySelector('input[name="quiz-answer"]:checked');
        if (selectedAnswer) {
            alert("Quiz submitted with answer: " + selectedAnswer.value);

            // add code here to send the answer to a server for grading.

        } else {
            alert("Please select an answer before submitting.");
        }
    });

    assignmentForm.addEventListener("submit", function (e) {
        e.preventDefault();
        const assignmentAnswer = document.getElementById("assignment-answer").value;
        if (assignmentAnswer.trim() !== "") {
            alert("Assignment submitted with answer: " + assignmentAnswer);

            //add code here to send the assignment answer to a server for evaluation.

        } else {
            alert("Please provide an answer before submitting.");
        }
    });
});
