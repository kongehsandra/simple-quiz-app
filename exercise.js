var quiz = {
    question : [
        "what is the name of the largest animal in the world?", "what is the largest continent in te world?"
    ],
    options : [
        "elephant","wale","giraff"
    ],
    load: function(){
        return "i am loaded";
    },
    questionIndex: 0
};
console.log(quiz.question[1]);
console.log(quiz.load());