function playSound(event){
    event = event.toLocaleLowerCase()
    switch(event){
        case "w":
            const audio1 = new Audio("./assets/sounds/kick-bass.mp3");
            audio1.play();
            break;
        case "a":
            const audio2 = new Audio("./assets/sounds/tom-1.mp3");
            audio2.play();
            break;
        case "s":
            const audio3 = new Audio("./assets/sounds/tom-2.mp3");
            audio3.play();
            break;
        case "d":
            const audio4 = new Audio("./assets/sounds/crash.mp3");
            audio4.play();
            break;
        case "i":
            const audio5 = new Audio("./assets/sounds/crash.mp3");
            audio5.play();
            break;
        case "j":
            const audio6 = new Audio("./assets/sounds/crash.mp3");
            audio6.play();
            break;
        case "k":
            const audio7 = new Audio("./assets/sounds/snare.mp3")
            audio7.play();
            break
        case "l":
            const audio8 = new Audio("./assets/sounds/snare.mp3")
            audio8.play();
            break;
    }
}


for(var i=0;i<8;i++){
    document.querySelectorAll(".button")[i].addEventListener("click", function(){
        var mouse = this.innerHTML;
        playSound(mouse);
        animation(mouse);
    });
}

document.addEventListener("keypress", function(event) {

    playSound(event.key);
    animation(event.key)

});


function animation(item){
    var btn = document.querySelector("."+item.toLocaleLowerCase());

    btn.classList.add("animate")

    setTimeout(function() {
        btn.classList.remove("animate");
    }, 100);
}