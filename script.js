const questions = [
    { 
        question: "Quem é o autor do livro Drácula?", 
        options: ["Mary Shelley", "Bram Stoker", "Edgar Allan Poe"], 
        correctAnswer: 1, 
        hint: "O autor é um escritor irlandês conhecido por suas histórias de horror gótico.",
        background: "url('imagens2/img34novo.jpg')"/* img34 é capa*/ 
    },
    { 
        question: "Qual é o nome do castelo onde Drácula vive?", 
        options: ["Castelo Transilvânia", "Castelo de Harker", "Castelo de Drácula"], 
        correctAnswer: 2, 
        hint: "Este castelo está localizado na Transilvânia.",
        background: "url('imagens2/img5.jpg')"
    },
    { 
        question: "Qual personagem inicialmente viaja para a Transilvânia para encontrar o Drácula?", 
        options: ["Dr. John Seward", "Jonathan Harker", "Arthur Holmwood"], 
        correctAnswer: 1, 
        hint: "Este personagem é um advogado inglês.",
        background: "url('imagens2/img6.jpg')" 
    },
    { 
        question: "Quem é a melhor amiga de Mina Harker que também se torna alvo de Drácula?", 
        options: ["Lucy Westenra", "Wilhelmina Murray", "Elizabeth Bathory"], 
        correctAnswer: 0, 
        hint: "Esta personagem é noiva de Arthur Holmwood.",
        background: "url('imagens2/img10.jpg')" 
    },
    { 
        question: "Qual médico e especialista em doenças raras ajuda a combater o Drácula?", 
        options: ["Dr. John Seward", "Professor Abraham Van Helsing", "Renfield"], 
        correctAnswer: 1, 
        hint: "Ele é um professor holandês e amigo de Dr. John Seward.",
        background: "url('imagens2/img11.jpg')" 
    },
    { 
        question: "Quem é o autor do livro Frankenstein?", 
        options: ["Bram Stoker", "Mary Shelley", "Edgar Allan Poe"], 
        correctAnswer: 1, 
        hint: "Esta autora é uma escritora inglesa que escreveu esta obra aos 18 anos.",
        background: "url('imagens2/img12.jpg')" 
    },
    { 
        question: "Qual é o nome do cientista que cria o monstro em Frankenstein?", 
        options: ["Henry Clerval", "Robert Walton", "Victor Frankenstein"], 
        correctAnswer: 2, 
        hint: "Ele é o personagem principal e sua criação dá nome ao livro.",
        background: "url('imagens2/img14.jpg')" 
    },
    { 
        question: "Como o monstro é frequentemente referido no livro Frankenstein?", 
        options: ["A Criatura", "O Demônio", "O Fantasma"], 
        correctAnswer: 0, 
        hint: "Este termo é usado para destacar a ausência de nome próprio.",
        background: "url('imagens2/img23.jpg')" 
    },
    { 
        question: "Onde Victor Frankenstein realiza a criação do monstro?", 
        options: ["Em seu laboratório em Londres", "Em um laboratório em Ingolstadt", "Em sua casa na Suíça"], 
        correctAnswer: 1, 
        hint: "Esta cidade está localizada na Alemanha e é onde Victor estudava.",
        background: "url('imagens2/img25.jpg')" 
    },
    { 
        question: "Qual é o motivo principal que leva Victor Frankenstein a criar o monstro?", 
        options: ["Ambição científica e desejo de superar a morte", "Vingança contra seus colegas de faculdade", "Pressão de sua família para ser bem-sucedido"], 
        correctAnswer: 0, 
        hint: "Ele está motivado por um desejo de descobrir os segredos da vida e da morte.",
        background: "url('imagens2/img26.jpg')" 
    },
    { 
        question: "Quem é o autor do livro Alice no País das Maravilhas?", 
        options: ["J.R.R. Tolkien", "Lewis Carroll", "C.S. Lewis"], 
        correctAnswer: 1, 
        hint: "O autor é conhecido pelo seu verdadeiro nome, Charles Lutwidge Dodgson.",
        background: "url('imagens2/img27.jpg')" 
    },
    { 
        question: "Qual animal Alice segue para cair na toca e chegar ao País das Maravilhas?", 
        options: ["Um coelho", "Um gato", "Um rato"], 
        correctAnswer: 0, 
        hint: "Este animal está sempre olhando para o relógio e dizendo que está atrasado.",
        background: "url('imagens2/img28.jpg')"
    },
    { 
        question: "Qual é o nome do gato que Alice encontra no País das Maravilhas?", 
        options: [" Gato de Botas", "Gato Cheshire", "Gato Félix"], 
        correctAnswer: 1, 
        hint: "Este gato é conhecido por seu sorriso enigmático.",
        background: "url('imagens2/img30.jpg')"
    },
    { 
        question: "Qual personagem é conhecida por dizer 'Cortem-lhe a cabeça!'?", 
        options: ["Rainha Vermelha", "Rainha Branca", "Rainha de Copas"], 
        correctAnswer: 2, 
        hint: "Este gato é conhecido por seu sorriso enigmático.",
        background: "url('imagens2/img31novo.jpg')"
    },
    { 
        question: "O que Alice come ou bebe para mudar de tamanho?", 
        options: ["Uma maçã e uma taça de vinho", "Um bolo e uma poção", "Uma cenoura e um copo de leite"], 
        correctAnswer: 1, 
        hint: "Ela encontra uma garrafa com um rótulo 'Beba-me' e um bolo com um rótulo 'Coma-me'.",
        background: "url('imagens2/img32.jpg')"
    },
    { 
        question: "Quem é o autor do conto O Chamado de Cthulhu?", 
        options: ["Edgar Allan Poe", "H. P. Lovecraft", "Arthur Conan Doyle"], 
        correctAnswer: 1, 
        hint: "O autor é conhecido por suas histórias de terror cósmico e mitos antigos.",
        background: "url('imagens2/img35novo.jpg')"
    },
    { 
        question: "Qual é o nome da criatura principal mencionada no conto O Chamado de Cthulhu?", 
        options: ["Nyarlathotep", "Cthulhu", "Azathoth"], 
        correctAnswer: 1, 
        hint: "Esta criatura é descrita como uma entidade cósmica com características de polvo e dragão.",
        background: "url('imagens2/img4.jpg')"
    },
    { 
        question: "Em qual cidade fictícia se encontram os registros sobre Cthulhu?", 
        options: ["Innsmouth", "Dunwich", "R'lyeh"], 
        correctAnswer: 2, 
        hint: "Esta cidade é submersa e onde Cthulhu está adormecido.",
        background: "url('imagens2/img7.jpg')" 
    },
    { 
        question: "Qual é o nome do professor que investiga os cultos e as lendas de Cthulhu?", 
        options: ["Professor Armitage", "Professor Angell", "Professor Wilmarth"], 
        correctAnswer: 1, 
        hint: "Ele é um professor da Universidade Brown que encontra um estranho ídolo de Cthulhu.",
        background: "url('imagens2/img8.jpg')" 
    },
    { 
        question: "Em que ano foi publicado o conto O Chamado de Cthulhu?", 
        options: ["1928", "1936", "1941"], 
        correctAnswer: 0, 
        hint: "O conto foi publicado na revista 'Weird Tales' durante a década de 1920.",
        background: "url('imagens2/img9.jpg')" 
    },
    { 
        question: "Quem é o autor do livro O Mágico de Oz?", 
        options: ["Lewis Carroll", "J.M. Barrie", "L. Frank Baum"], 
        correctAnswer: 2, 
        hint: "O autor é um escritor americano conhecido por sua série de livros sobre a Terra de Oz.",
        background: "url('imagens2/img13.jpg')" 
    },
    { 
        question: "Qual é o nome da protagonista que viaja para a Terra de Oz?", 
        options: ["Alice", "Wendy", "Dorothy"], 
        correctAnswer: 2, 
        hint: "Ela é uma garota do Kansas que viaja com seu cachorro Toto.",
        background: "url('imagens2/img15.jpg')" 
    },
    { 
        question: "Qual é o nome da estrada que Dorothy segue para encontrar o Mágico de Oz?", 
        options: ["Estrada de Tijolos Vermelhos", "Estrada de Tijolos Verdes", "Estrada de Tijolos Amarelos"], 
        correctAnswer: 2, 
        hint: "Esta estrada é conhecida por sua cor vibrante que leva à Cidade das Esmeraldas.",
        background: "url('imagens2/img16.jpg')" 
    },
    { 
        question: "Quem Dorothy encontra primeiro em sua jornada pela Terra de Oz?", 
        options: ["O Espantalho", "O Homem de Lata", "O Leão Covarde"], 
        correctAnswer: 0, 
        hint: "Este personagem deseja ter um cérebro.",
        background: "url('imagens2/img17.jpg')" 
    },
    { 
        question: "Qual é o desejo do Leão Covarde no livro O Mágico de Oz?", 
        options: ["Ter um coração", "Ter coragem", "Ter um cérebro"], 
        correctAnswer: 1, 
        hint: "Este personagem deseja ser valente e destemido.",
        background: "url('imagens2/img18.jpg')" 
    },
    { 
        question: "Quem é o autor do livro Psicose?", 
        options: ["Stephen King", "Robert Bloch", "Alfred Hitchcock"], 
        correctAnswer: 1, 
        hint: "O autor é um escritor americano famoso por suas histórias de terror e suspense.",
        background: "url('imagens2/img19.jpg')" 
    },
    { 
        question: "Qual é o nome do protagonista que gerencia o Bates Motel?", 
        options: ["Norman Bates", "Sam Loomis", "Marion Crane"], 
        correctAnswer: 0, 
        hint: "Este personagem tem uma relação complexa com sua mãe.",
        background: "url('imagens2/img33novo.jpg')"
    },
    { 
        question: "Quem é a primeira vítima que chega ao Bates Motel no livro Psicose?", 
        options: ["Lila Crane", "Marion Crane", "Arbogast"], 
        correctAnswer: 1, 
        hint: "Esta personagem rouba uma grande quantia de dinheiro antes de chegar ao motel.",
        background: "url('imagens2/img21.jpg')"
    },
    { 
        question: "Qual é a relação de Norman Bates com sua mãe no livro Psicose?", 
        options: ["Ela está morta, mas ele mantém seu corpo preservado", "Ela é sua cúmplice nos assassinatos", "Ela o abandonou na infância"], 
        correctAnswer: 0, 
        hint: "A mãe de Norman tem uma presença inquietante apesar de seu estado.",
        background: "url('imagens2/img22.jpg')"
    },
    { 
        question: "Em que ano foi publicado o livro Psicose?", 
        options: ["1959", "1965", "1971"], 
        correctAnswer: 0, 
        hint: "O livro foi publicado no final da década de 1950 e inspirou um famoso filme de Alfred Hitchcock.",
        background: "url('imagens2/img24.jpg')"
    },
    { 
        question: "Quem é o autor do livro A Revolução dos Bichos?", 
        options: ["Aldous Huxley", "George Orwell", "Ray Bradbury"], 
        correctAnswer: 1, 
        hint: "O autor é conhecido também pelo livro '1984'.",
        background: "url('imagens2/img29novo.jpg')" 
    },
    { 
        question: "Qual é o nome da fazenda onde se passa a história do livro A Revolução dos Bichos?", 
        options: ["Fazenda Manor", "Fazenda Green", " Fazenda Sunny"], 
        correctAnswer: 0, 
        hint: "A fazenda tem um nome associado a propriedade tradicional antes da revolução.",
        background: "url('imagens2/img36.jpg')"
    },
    { 
        question: "Qual porco lidera a revolução contra os humanos no livro A Revolução dos Bichos?", 
        options: ["Napoleão", "Bola-de-Neve", "Garganta"], 
        correctAnswer: 0, 
        hint: "Este porco se torna o líder autoritário após a revolução.",
        background: "url('imagens2/img37.jpg')"
    },
    { 
        question: "Qual é o lema que os animais adotam após a revolução no livro de George Orwell?", 
        options: ["Trabalhar e prosperar", "Todos os animais são iguais", "Liberdade e fraternidade"], 
        correctAnswer: 1, 
        hint: "Este lema é modificado ao longo da história para refletir a corrupção do poder.",
        background: "url('imagens2/img38.jpg')"
    },
    { 
        question: "Qual personagem representa a propaganda e manipulação da verdade na fazenda do livro de George Orwell?", 
        options: ["Sansão", "Garganta", "Minimus"], 
        correctAnswer: 1, 
        hint: "Este personagem é um porco conhecido por sua habilidade em discursos persuasivos.",
        background: "url('imagens2/img39.jpg')"
    },
];

let currentQuestionIndex = 0;
let score = 0;
let playerName = "";
let hintsUsed = [false, false, false];
let questionTimeout;
let showQuestionTimeout;

document.addEventListener("DOMContentLoaded", () => {
    loadQuestion();
});

document.body.style.backgroundImage = questions[0].background;

function startGame() {
    playerName = document.getElementById("player-name").value;
    if (playerName.trim() === "") {
        alert("Por favor, insira seu nome.");
        return;
    }
    document.getElementById("player-name-display").innerText = playerName;
    document.getElementById("welcome-container").style.display = "none";
    document.getElementById("quiz-container").style.display = "block";
    selectRandomQuestions(); 
    loadQuestion();
}

function selectRandomQuestions() {
    selectedQuestions = questions.sort(() => 0.5 - Math.random()).slice(0, 13);
    currentQuestionIndex = 0;
}

function loadQuestion() {
    if (currentQuestionIndex >= selectedQuestions.length) {
        endGame();
        return;
    }
    const questionContainer = document.getElementById("question");
    const options = document.querySelectorAll(".option");

    questionContainer.innerText = selectedQuestions[currentQuestionIndex].question;
    document.body.style.backgroundImage = selectedQuestions[currentQuestionIndex].background;
    questionContainer.classList.remove("fade"); // Remove the fade class to reset animation
    void questionContainer.offsetWidth; // Trigger reflow to restart the animation
    questionContainer.classList.add("fade"); // Add the fade class to start animation

    options.forEach((option, index) => {
        option.innerText = selectedQuestions[currentQuestionIndex].options[index];
        option.style.display = "inline-block"; // Reset option visibility
    });

    document.getElementById("result").innerText = "";

    clearTimeout(questionTimeout);
    questionTimeout = setTimeout(() => {
        currentQuestionIndex++;
        loadQuestion();
    }, 15000); // Move to the next question after 15 seconds

    updateHintButtons();
}

function checkAnswer(selectedOption) {
    const resultContainer = document.getElementById("result");
    if (selectedOption === selectedQuestions[currentQuestionIndex].correctAnswer) {
        score++;
        resultContainer.innerText = "Correto!";
        resultContainer.style.color = "green";
    } else {
        resultContainer.innerText = "Errado!";
        resultContainer.style.color = "red";
    }
    currentQuestionIndex++;
    setTimeout(loadQuestion, 1000); // Move to the next question after 1 second
}

function useHint(hintNumber) {
    if (hintsUsed[hintNumber - 1]) return;

    switch (hintNumber) {
        case 1:
            removeWrongOption();
            break;
        case 2:
            showQuestionAgain();
            break;
        case 3:
            showHint();
            break;
    }
    hintsUsed[hintNumber - 1] = true;
    updateHintButtons();
}

function removeWrongOption() {
    const options = document.querySelectorAll(".option");
    const correctAnswer = selectedQuestions[currentQuestionIndex].correctAnswer;
    let removed = false;
    options.forEach((option, index) => {
        if (index !== correctAnswer && !removed) {
            option.style.display = "none";
            removed = true;
        }
    });
}

function showQuestionAgain() {
    clearTimeout(questionTimeout);
    const questionContainer = document.getElementById("question");
    questionContainer.classList.remove("fade");
    questionContainer.style.opacity = "1";
    showQuestionTimeout = setTimeout(() => {
        questionContainer.style.opacity = "";
        questionContainer.classList.add("fade");
        questionTimeout = setTimeout(() => {
            currentQuestionIndex++;
            loadQuestion();
        }, 5000); // Move to the next question after 5 seconds
    }, 5000); // Show the question again for 5 seconds
}

function showHint() {
    alert(selectedQuestions[currentQuestionIndex].hint);
}

function updateHintButtons() {
    for (let i = 1; i <= 3; i++) {
        document.getElementById(`hint${i}`).disabled = hintsUsed[i - 1];
    }
}

function endGame() {
    const discount = Math.min(score, 13);
    document.getElementById("score").innerText = score;
    document.getElementById("discount").innerText = discount;
    document.getElementById("quiz-container").style.display = "none";
    document.getElementById("end-game-container").style.display = "block";
}

function resetGame() {
    currentQuestionIndex = 0;
    score = 0;
    hintsUsed = [false, false, false];
    document.getElementById("end-game-container").style.display = "none";
    document.getElementById("welcome-container").style.display = "block";
    document.getElementById("player-name").value = "";
    clearTimeout(questionTimeout);
    clearTimeout(showQuestionTimeout);
}
