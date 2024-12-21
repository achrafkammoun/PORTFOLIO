function calculateScore() {
    const answers = {
        q1: "1",
        q2: "1",
        q3: "2", 
        q4: "0", 
        q5: "2", 
        q6: "1", 
        q7: "0",
        q8: "1", 
        q9: "0", 
        q10: "2",
        q11: "1", 
        q12: "0", 
    };

    let score = 0;
    const totalQuestions = Object.keys(answers).length;


    for (let [key, value] of Object.entries(answers)) {
        const question = document.querySelectorAll(`input[name="${key}"]`);
        let correctAnswerElement;

        question.forEach((option) => {
            option.parentElement.classList.remove("correct", "incorrect");
            if (option.value === value) {
                correctAnswerElement = option.parentElement; 
            }
            if (option.checked) {
                if (option.value === value) {
                    option.parentElement.classList.add("correct");
                    score++;
                } else {
                    option.parentElement.classList.add("incorrect");
                }
            }
        });

        if (!correctAnswerElement.classList.contains("correct")) {
            correctAnswerElement.classList.add("correct");
        }
    }

    const resultDiv = document.getElementById("result");
    resultDiv.innerHTML = `Votre score : ${score} / ${totalQuestions}`;
    if (score === totalQuestions) {
        resultDiv.innerHTML += " 🎉 Excellent travail !";
    } else if (score > totalQuestions / 2) {
        resultDiv.innerHTML += " 😊 Bon travail !";
    } else {
        resultDiv.innerHTML += " 😔 Vous pouvez faire mieux !";
    }
}

