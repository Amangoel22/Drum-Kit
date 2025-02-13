//Detecting button click

var numberofDrums=document.querySelectorAll(".drum").length //to include all drums

for(var i=0; i<numberofDrums; i++){  //for loop is used to add event listener to all buttons 
    //as it returns array and it will be applied to single element
    document.querySelectorAll(".drum")[i].addEventListener("click",function(){
        var buttonHTML=this.innerHTML;   //this checks which button was pressed
        makeSound(buttonHTML);   //make sound function is called on the clicked HTML
        buttonAnimation(buttonHTML);
    });
}

//Detecting keyboard press
document.addEventListener("keydown",function(event){
    makeSound(event.key);   //event.key gives the key that was pressed and then the function is called on that
    buttonAnimation(event.key);
});

//Sound making function for both click and keypress
function makeSound(key){   //key is the property of keydown and not a random input
    switch(key){
        case "w":
            var tom1=new Audio("./sounds/tom-1.mp3");
            tom1.play();
        break;
        case "a":
            var tom2=new Audio("./sounds/tom-2.mp3");
            tom2.play();
        break;
        case "s":
            var tom3=new Audio("./sounds/tom-3.mp3");
            tom3.play();
        break;
        case "d":
            var tom4=new Audio("./sounds/tom-4.mp3");
            tom4.play();
            break;
        case "j":
            var snare=new Audio("./sounds/snare.mp3");
            snare.play();
        break;
        case "k":
            var crash=new Audio("./sounds/crash.mp3");
            crash.play();
        break;
        case "l":
            var kickbass=new Audio("./sounds/kick-bass.mp3");
            kickbass.play();
        break;
        
        default: console.log();
            
    }
}

function buttonAnimation(currentkey){
    var buttonPressed=document.querySelector("."+currentkey);
    buttonPressed.classList.add("pressed");  //adds the css class to pressed button for animation
    setTimeout(function(){
        buttonPressed.classList.remove("pressed");
    },100);  //adding time-parameter
}
