
var word_list = ["touchdown","goal","offsides","pass","basketball","football","soccer","hockey","puck","kickoff","dunk"];

var word =word_list[Math.floor(Math.random() * word_list.length)];

console.log(word);

//Create an array of underscores to use to reveal the word 
var word_fill=[];
for(i=0; i<word.length; i++){
    word_fill.push("_");
};


function index(x){
    for(var i=0; i<word.length;i++) {
        if (word[i] === x){
            word_fill[i] = x;
        } 
        else{
            word_fill[i]=word_fill[i];
        }
    };
    return word_fill.join(" ");
};

 



var correct = [];
var incorrect = [];
var guesses_remaining = 7;


$(document).ready(function() {
    $("#mystery-word").text(word_fill.join(" "));
    $("#guesses").text("Guesses remaining: " + guesses_remaining);

    $("#reset").on("click", function() {
        console.log("RESET");
        word =word_list[Math.floor(Math.random() * word_list.length)];
        word_fill=[];
        for(i=0; i<word.length; i++){
            word_fill.push("_");
        };
        correct = [];
        incorrect = [];
        guesses_remaining = 7; 
        $("#mystery-word").text(word_fill.join(" "));
        $("#guesses").text("Guesses remaining: " + guesses_remaining);
        $("#my-img").attr('src',"");
        $("#letters-guessed").text("");
        $("#outcome").text("");
    });
   
});


    $(document).keypress(function(){
        console.log(event.key);

        if(guesses_remaining<=0){
            $("#my-img").attr('src',"assets/images/cutler.png");
            $("#outcome").text("Looser!");
        }
        if(!word_fill.includes("_")){
            $("#my-img").attr('src',"assets/images/rodgers.jpeg");
            $("#outcome").text("Winner!");
        }
        else if(jQuery.inArray(event.key, incorrect) !=-1 || jQuery.inArray(event.key, correct) !=-1){
            alert("Aready guessed that!");

        } else if(word.includes(event.key)){
            correct.push(event.key);
            console.log(event.key);
            console.log(index(event.key));
            $("#mystery-word").text(index(event.key));
            $("#guesses").text("Guesses remaining: " + guesses_remaining);
    
            $("#letters-guessed").prepend(", " +event.key);
            console.log(guesses_remaining);
            if(!word_fill.includes("_")){
                $("#my-img").attr('src',"assets/images/rodgers.jpeg");
                $("#outcome").text("Winner!");
            }

        } else{
            incorrect.push(event.key);
            guesses_remaining --;
            $("#guesses").text("Guesses remaining: " + guesses_remaining);
            $("#letters-guessed").prepend(", " +event.key);;
            console.log(guesses_remaining);
            if(guesses_remaining==0){
                $("#my-img").attr('src',"assets/images/cutler.png");
                $("#outcome").text("Loser!");
            }

        } 

    });
    




