function check(){

var question1=document.quiz.question1.value;
var question2=document.quiz.question2.value;
var question3=document.quiz.question3.value;
var question4=document.quiz.question4.value;
var question5=document.quiz.question5.value;
var correct=0;

    if( question1 == "6") {
        correct++;
    }

    if(question2 == "1966"){
        correct++;
    }
    if(question3 =="spacejam"){
        correct++;
    }
    if(question4=="25"){
        correct++;
    }
    if (question5 =="2"){
        correct++;
    }
    document.getElementById("after_submit").style.visibility="visible";
    document.getElementById("number_correct").innerHTML="you got"+correct+" correct.";

}

    