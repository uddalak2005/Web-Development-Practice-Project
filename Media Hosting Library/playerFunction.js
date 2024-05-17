let play = document.getElementById("vidPlayer")
play.src = localStorage.getItem('url')
let card = document.querySelector('.videoContainer')
let player = document.querySelector('.player')
card.addEventListener('click',function(){
    player.style.display="block"
})