// alert("hello world")

var buttonColours = ["red", "blue", "green", "yellow"]
var gamePattern = []


function nextSequence() {
    var randomNumber = Math.random();
    randomNumber = randomNumber * 4;
    randomNumber = Math.floor(randomNumber)

    var randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour)

    $("#"+randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
    var audio = new Audio("sounds/"+ randomChosenColour +".mp3");
    audio.play();

    $(".btn").click(function handler()
    {
        var userChosenColour=
    }
    
    )

}


