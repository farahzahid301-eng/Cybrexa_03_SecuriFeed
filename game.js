const questions = [

    {
        question: "Which URL looks suspicious?",

        options: [
            "https://google.com",
            "http://paypa1-login.xyz",
            "https://wikipedia.org"
        ],

        answer: "http://paypa1-login.xyz"
    },


    {
        question: "What does HTTPS indicate?",

        options: [
            "Encrypted connection",
            "Virus detected",
            "Fake website"
        ],

        answer: "Encrypted connection"
    },


    {
        question: "What should you check before entering your password?",

        options: [
            "URL and domain name",
            "Website colors",
            "Number of images"
        ],

        answer: "URL and domain name"
    },


    {
        question: "Which is a phishing sign?",

        options: [
            "Urgent request to verify account",
            "Official website",
            "Secure HTTPS connection"
        ],

        answer: "Urgent request to verify account"
    }


];


let currentQuestion = 0;
let score = 0;


const questionBox = document.getElementById("question");
const optionsBox = document.getElementById("options");
const nextBtn = document.getElementById("nextBtn");



function loadQuestion(){


    let q = questions[currentQuestion];


    questionBox.innerHTML = q.question;


    optionsBox.innerHTML = "";



    q.options.forEach(option => {


        let button = document.createElement("button");


        button.className = "option";


        button.innerHTML = option;



        button.onclick = function(){


            if(option === q.answer){

                score++;

                alert("Correct ✅");

            }

            else{

                alert("Wrong ❌");

            }


        };


        optionsBox.appendChild(button);


    });



}



nextBtn.onclick = function(){


    currentQuestion++;


    if(currentQuestion < questions.length){

        loadQuestion();

    }

    else{


        alert(
            "Game Completed! Your Score: "
            + score +
            "/" +
            questions.length
        );


        currentQuestion = 0;

        score = 0;


    }



};



loadQuestion();