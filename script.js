const questions = [

 {phrase: ".. De semaines inutiles en futiles dimanches ..",options: ["J'en parlerai au diable", "Rien à personne", "J'oublierai ton nom"],correctAnswer: "J'oublierai ton nom"},
 {phrase: ".. Pour faire bouger mes doigts pour faire vibrer mon corps ..",options: ["Je T'attends", "J'ai oublié de vivre", "Tous ensemble"],correctAnswer: "J'ai oublié de vivre"},
 {phrase: ".. A force de mots sans qu’on les écoute ..",options: ["Un cri", "L'envie", "Je T'attends"],correctAnswer: "Je T'attends"},
 {phrase: ".. Car dans tes mains je meurs chaque soir ..",options: ["Gabrielle", "Bonne chance", "Tous ensemble"],correctAnswer: "Gabrielle"},
 {phrase: ".. Les pleurs qu'on garde sur le cœur et des regrets et des rancœurs",options: ["Chanter pour toi", "Derrière l'amour", "Deux étrangers"],correctAnswer: "Derrière l'amour"},
 {phrase: ".. Moulée dans un t-shirt et un vieux jean usé..",options: ["Comme un fou", "Un cri", "Comme un roc"],correctAnswer: "Comme un fou"},
 {phrase: ".. Elle aguiche mes amis, même les plus petits..",options: ["La loi", "Elle est terrible", "Gabrielle"],correctAnswer: "Elle est terrible"},
 {phrase: ".. Cette fille, cette fille, entre mes bras m'offre la joie..",options: ["Fille de la nuit", "Fou d'amour", "Excuse-moi partenaire"],correctAnswer: "Excuse-moi partenaire"},
 {phrase: ".. Déchire tes papiers brûle tes vêtements et tes souliers..",options: ["Etreintes fatales", "Equipe de nuit", "Il faut boire à la source"],correctAnswer: "Il faut boire à la source"},
 {phrase: ".. Un espoir décimé sur les pages blanches d'un monde aussi pressé..",options: ["Je ne suis qu'un homme", "Comme un fou", "Je pars demain"],correctAnswer: "Je ne suis qu'un homme"},
 {phrase: ".. Il y a longtemps sur des guitares des mains noires ..",options: ["Le rock'n'roll est né", "La musique que j'aime", "Le coeur du Rock'n'roll"],correctAnswer: "La musique que j'aime"},
 {phrase: ".. Où les hommes comme des chiens se tuent pour des mots, pour du pain ..",options: ["Le ghetto", "La prison", "Le penitencier"],correctAnswer: "Le ghetto"},
 {phrase: ".. Sans abri ni foi ni loi ce qui m’a fait vivre était en moi ..",options: ["Laisse-moi tomber", "Laura", "Les filles du paradis"],correctAnswer: "Laura"},
 {phrase: ".. Dans un bruit de tonnerre à deux pas du soleil ..",options: ["Le mirage", "Les chevaliers du ciel", "Plus haut"],correctAnswer: "Les chevaliers du ciel"},
 {phrase: ".. Et la fille qui l'attend, qui l'aime comme un enfant ..",options: ["Twist à Saint-Tropez", "Les larmes de gloire", "Le chanteur abandonné"],correctAnswer: "Le chanteur abandonné"},
 {phrase: ".. Tu triches au jeu et dans le pays on te surnomme partout Le maudit ..",options: ["Les bras en croix", "Laisse-moi une chance", "Le temps passe"],correctAnswer: "Les bras en croix"},
 {phrase: ".. La terre brûle sous mes pieds et je ne sais, je ne sais pas m'arrêter ..",options: ["La ruée vers l'or", "Laisse un peu d'amour", "La Terre promise"],correctAnswer: "La Terre promise"},
 {phrase: ".. Qu'ailleurs ils aillent se faire pendre ..",options: ["Pour Exister", "Le pénitencier", "Requiem pour un fou"],correctAnswer: "Requiem pour un fou"},
 {phrase: ".. Et que tu deviens chienne ..",options: ["Que Je T'aime", "Quand Un Homme Devient Fou", "Sally"],correctAnswer: "Que Je T'aime"},
 {phrase: ".. J'ai pas toujours trouvé les mots pour bercer tes rêves d'enfants ..",options: ["Sans une larme", "S'il n'est pas trop tard", "Sang pour sang"],correctAnswer: "Sang pour sang"},

   
];

let score = 0;
let currentQuestionIndex = 0;

function displayQuestion() {
  const currentQuestion = questions[currentQuestionIndex];
  document.getElementById('phrase').innerText = currentQuestion.phrase;
  document.getElementById('option1').innerText = currentQuestion.options[0];
  document.getElementById('option2').innerText = currentQuestion.options[1];
  document.getElementById('option3').innerText = currentQuestion.options[2];
}

function checkAnswer(selectedOptionId) {
  const currentQuestion = questions[currentQuestionIndex];
  const selectedAnswer = document.getElementById(selectedOptionId).innerText;
  
  if (selectedAnswer === currentQuestion.correctAnswer) {
    score++;
    alert("Bonne réponse !");
  } else {
    alert("Mauvaise réponse.");
  }
  
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    displayQuestion();
  } else {
    showFinalScore();
  }
}

function showFinalScore() {
  document.getElementById('question-container').classList.add('hidden');
  document.getElementById('score-container').classList.remove('hidden');
  document.getElementById('final-score').innerText = `Votre score final est : ${score} sur ${questions.length}`;
}

function restartQuiz() {
  score = 0;
  currentQuestionIndex = 0;
  document.getElementById('question-container').classList.remove('hidden');
  document.getElementById('score-container').classList.add('hidden');
  displayQuestion();
}

// Initialiser le quiz
displayQuestion();