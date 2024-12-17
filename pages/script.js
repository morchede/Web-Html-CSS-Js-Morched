// Tableau des bonnes réponses
    const correctAnswers = {
        q1: "1930", // b
        q2: "Brésil", // b
        q3: "Miroslav Klose", // b
        q4: "Afrique du Sud", // a
        q5: "Diego Maradona", // a
        q6: "France", // b
        q7: "32", // b
        q8: "2002", // b
        q9: "Uruguay", // a
        q10: "Kylian Mbappé", // a
};

// Gérer la soumission du quiz
document.getElementById('submitQuiz').addEventListener('click', function () {
    let score = 0;
    const totalQuestions = Object.keys(correctAnswers).length;
    const correctList = document.getElementById('correctAnswers');
    correctList.innerHTML = ''; // Efface les résultats précédents

    // Vérifie les réponses
    Object.keys(correctAnswers).forEach(question => {
        const selectedOption = document.querySelector(`input[name="${question}"]:checked`);
        if (selectedOption && selectedOption.value === correctAnswers[question]) {
            score++;
        } else {
            // Affiche la bonne réponse pour chaque question incorrecte
            const li = document.createElement('li');
            li.textContent = `Question ${question.slice(1)}: ${correctAnswers[question]}`;
            correctList.appendChild(li);
        }
    });
    

   // Affiche le score
   document.getElementById('score').textContent = score;

   // Afficher un message si le score est 10/10
   if (score === totalQuestions) {
       const message = document.createElement('h3');
       message.textContent = "Félicitations ! Vous êtes un expert en football, parfait sur toute la ligne ! ⚽🏆";
       correctList.appendChild(message);
   }

   // Afficher les résultats
   document.getElementById('result').style.display = 'block';
});