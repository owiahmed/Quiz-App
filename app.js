window.onload = function(){
    show(0);
}

var questions = [{
    id: 1,
    question: "Who is the inventor of JavaScript?",
    answer: "Brendan Eich",
    options: [
        "Dennis Ritchie",
        "Brendan Eich",
        "James Gosling",
        "Guido van Rossum"
    ]


},
{
    id: 2,
    question: "Who is the inventor of Apple?",
    answer: "Steve Jobs",
    options: [
        "Dennis Ritchie",
        "Steve Jobs",
        "James Gosling",
        "Guido van Rossum"
    ]

},
{
    id: 3,
    question: "Who is the founder of Google?",
    answer: "Larry Page",
    options: [
        "Dennis Ritchie",
        "Steve jobs",
        "Larry Page",
        "Guido van Rossum"
    ]

},
{
    id: 4,
    question: "Who is the inventer of Samsung?",
    answer: "Lee Byung-chul",
    options: [
        "Dennis Ritchie",
        "Steve jobs",
        "Larry Page",
        "Lee Byung-chul"
    ]

}

]

var question_count=0;
function next(){
    question_count++
    console.log(question_count)
    show(question_count)
}

function show(e){
    var que=document.getElementById("question")
    que.innerHTML = `<h2>  ${questions[e].question} 
    </h2> <ul class="list">
    <li class="option">${questions[e].options[0]}</li>
    <li class="option">${questions[e].options[1]}</li>
    <li class="option">${questions[e].options[2]}</li>
    <li class="option">${questions[e].options[3]}</li>
</ul>`;
    Active()
}

function Active(){

    let option2=document.querySelectorAll("li.option")

    for(let i = 0; i < option2.lenght; i++){

        option2[i].onclick = function(){
            option2[i].classlist.add("active")
        }
    }

}