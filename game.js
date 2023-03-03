// alert("hello world")

var buttonColours = ["red", "blue", "green", "yellow"]
var gamePattern = []
var userClickedPattern=[]

$(".btn").click(function handler()
{
    var userChosenColour=$(this).attr("id");

    userClickedPattern.push(userChosenColour);

    playSound(userChosenColour);
    animatePress(userChosenColour);
}
)




function nextSequence() {
    var randomNumber = Math.floor(Math.random()*4);


    var randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour)

    $("#"+randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
   playSound(randomChosenColour);
}


function playSound(name)
{
  var audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
}

function animatePress(currentColour)
{
    $("#"+currentColour).addClass("pressed")

    setTimeout(function(){
        $("#" + currentColour).removeClass("pressed");
    },100)

}