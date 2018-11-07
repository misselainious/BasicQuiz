$(document).ready(function () {

$("form").hide();
$("h3").hide();
$("#timer").hide();
$("#correct").hide();
$("#wrong").hide();
$("#unanswered").hide();


$("#start").click(function(){

$("form").show();
$("h3").show();
$("#timer").show();

var points = 0;
var incorrect = 0;
var unanswered = 0;


//Timer

var timeLeft = 30;
var elem = document.getElementById('timer');
var timerId = setInterval(countdown, 1000);

function countdown() {
    $("#directions").hide(); //hide directions
    $("#start").hide(); //hide start button
    if (timeLeft == -1) {
        clearTimeout(timerId);
        scoring(); //runs scoring function when time runs out
        //Hides/shows appropriate divs
        $("form").hide(); 
        $("h3").hide();
        $("#timer").hide();
        $("#correct").show();
        $("#wrong").show();
        $("#unanswered").show();
//shows scoring divs
        $("#correct").text("Number of correct answers: "+ points);
        $("#wrong").text("Incorrect answers: " + incorrect);
        $("#unanswered").text("unanswered questions: " + unanswered);
    } else { //Keeps running clock
        elem.innerHTML = timeLeft + ' seconds remaining';
        timeLeft--;
    }
}

//Scoring --- finds selected box and determines if it's correct answer
function scoring(){
    var selected = ($('input[name=check]:checked','#Q1').val());
    if(selected == "taylor"){
        points++;
    }
    else if (!selected){
        unanswered++;
    }
    else if (selected !== "taylor"){
        incorrect++;
    }
    var selected = ($('input[name=check]:checked','#Q2').val());
    if(selected == "marie"){
        points++;
    }
    else if (!selected){
        unanswered++;
    }
    else if (selected !== "marie"){
        incorrect++;
    }
    var selected = ($('input[name=check]:checked','#Q3').val());
    if(selected == "oprah"){
        points++;
    }
    else if (!selected){
        unanswered++;
    }
        else if (selected !== "oprah"){
            incorrect++;
        }
    
    var selected = ($('input[name=check]:checked','#Q4').val());
    if(selected == "meryl"){
        points++;
    }
    else if (!selected){
        unanswered++;
    }
    else if (selected !== "meryl"){
        incorrect++;
    }
    var selected = ($('input[name=check]:checked','#Q5').val());
    if(selected == "mariah"){
        points++;
    }
    else if (!selected){
        unanswered++;
    }
    else if (selected !== "mariah"){
        incorrect++;
    }
};


countdown(); //Starts the countdown and reveals questions.


});
});