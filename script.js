const quizData = [{
    question: "Which of the following is a client site language?",
    a: "Java",
    b: "C",
    c: "Python",
    d: "JavaScript",
    correct: "d",
},
{
    question: "What does HTML stand for?",
    a: "Hypertext Markup Language",
    b: "Cascading Style Sheet",
    c: "Jason Object Notation",
    d: "Helicopters Terminals Motorboats Lamborginis",
    correct: "a",
},
{
    question: "What year was JavaScript launched?",
    a: "1996",
    b: "1995",
    c: "1994",
    d: "none of the above",
    correct: "b",
},
{
    question: "Inside which HTML element do we put the JavaScript?",
    a: "<js>",
    b: "<scripting>",
    c: "<script>  ",
    d: "<javascript>",
    correct: "c",
},
{
    question: "What is the correct JavaScript syntax to change the content of the HTML element below? <p id=\"demo\">This is a demonstration.</p>",
    a: "document.getElementById(\"demo\").innerHTML = \"Hello World!\";  ",
    b: "document.getElement(\"p\").innerHTML = \"Hello World!\";",
    c: "document.getElementByName(\"p\").innerHTML = \"Hello World!\";",
    d: "#demo.innerHTML = \"Hello World!\";",
    correct: "a",
},
{
    question: "Where is the correct place to insert a JavaScript?",
    a: "Both the <head> section and the <body> section are correct",
    b: "The <body> section",
    c: "Jason Object Notation",
    d: "The <head> section",
    correct: "a",
},
{
    question: "How do you create a function in JavaScript?",
    a: "function myFunction{}  ",
    b: "function = myFunction()",
    c: "function:myFunction()",
    d: "function myFunction() ",
    correct: "d",
},
{
    question: "How do you call a function named \"myFunction\"?",
    a: "myFunction()  ",
    b: "call myFunction()",
    c: "call function myFunction()",
    d: "myFuction(num)",
    correct: "a",
},
{
    question: "How do you round the number 7.25, to the nearest integer?",
    a: "Math.rnd(7.25)",
    b: "round(7.25)",
    c: "Math.round(7.25)  ",
    d: "rnd(7.25)",
    correct: "c",
}
];
let index = 0;
let correct = 0,
incorrect = 0,
total = quizData.length;
let questionBox = document.getElementById("questionBox");
let allInputs = document.querySelectorAll("input[type='radio']")
const loadQuestion = () => {
if (total === index) {
    return quizEnd()
}
reset()
const data = quizData[index]
questionBox.innerHTML = `${index + 1}) ${data.question}`
allInputs[0].nextElementSibling.innerText = data.a
allInputs[1].nextElementSibling.innerText = data.b
allInputs[2].nextElementSibling.innerText = data.c
allInputs[3].nextElementSibling.innerText = data.d
}

document.querySelector("#submit").addEventListener(
"click",
function() {
    const data = quizData[index]
    const ans = getAnswer()
    if (ans === data.correct) {
        correct++;
    } else {
        incorrect++;
    }
    index++;
    loadQuestion()
}
)

const getAnswer = () => {
let ans;
allInputs.forEach(
    (inputEl) => {
        if (inputEl.checked) {
            ans = inputEl.value;
        }
    }
)
return ans;
}

const reset = () => {
allInputs.forEach(
    (inputEl) => {
        inputEl.checked = false;
    }
)
}

const quizEnd = () => {
// console.log(document.getElementsByClassName("container"));
document.getElementsByClassName("container")[0].innerHTML = `
    <div class="col">
        <h3 class="w-100"> Hii, you've scored ${correct} / ${total} </h3>
    </div>
`
}
loadQuestion(index);