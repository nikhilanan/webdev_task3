function toggleMenu() {
    document.querySelector('.nav-links').classList.toggle('active');
}

document.addEventListener("DOMContentLoaded", () =>{
    //quiz data
    const quizData=[
        {
            question:"What does HTML stand for?",
            options: ["Hyper Text Markup Language", "High-level Text Management Language", "Hyper Transfer Markup Language", "Hyperlink Text Management Language"],
            answer: "Hyper Text Markup Language"
        },
        {
            question: "Which language is used for web development?",
            options: ["Python", "JavaScript", "C++", "Java"],
            answer: "JavaScript"
        },
        {
            question: "Which CSS property is used to change the text color of an element?",
            options: ["text-color", "color", "font-color", "background-color"],
            answer: "color"
        },
        {
            question: "Which HTML tag is used to create a hyperlink?",
            options: ["<link>", "<href>", "<a>", "<url>"],
            answer: "<a>"
        },
        {
            question: "What is the purpose of the <meta> tag in HTML?",
            options: ["Defines a table", "Stores metadata about the document", "Creates a hyperlink", "Adds an image"],
            answer: "Stores metadata about the document"
        }
    ];

    let currentQuestion = 0;
    let score = 0;
    const questionElement = document.getElementById("question");
    const answerButtons = document.querySelectorAll(".answers button");
    const nextButton = document.getElementById("next");

    function loadQuiz() {
        if (currentQuestion < quizData.length) {
            const currentData = quizData[currentQuestion];
            questionElement.innerText = currentData.question;

            answerButtons.forEach((button, index) => {
                if (index < currentData.options.length) {
                    button.innerText = currentData.options[index].trim();
                    button.style.backgroundColor = "";
                    button.style.display = "block";
                    button.onclick = () => checkAnswer(button, currentData.options[index], currentData.answer);
                } else {
                    button.style.display = "none";
                }
            });

            nextButton.style.display = "block"; // Ensure the Next button is visible
        } else {
            // End Quiz
            document.querySelector(".quiz-box").innerHTML = `<h1 style="text-align:center" >Quiz Completed!🎉</h1>
                <h2 style="text-align:center">Your Score: ${score} / ${quizData.length}</h2>`;
            nextButton.style.display = "none"; // Hide Next button at the end
        }
    }

    function checkAnswer(button, selected, correct) {
        if (selected === correct) {
            button.style.backgroundColor = "green";
            score++;
        } else {
            button.style.backgroundColor = "red";
        }
    }

    nextButton.onclick = () => {
        currentQuestion++;
        loadQuiz();
    };

    loadQuiz();
})
