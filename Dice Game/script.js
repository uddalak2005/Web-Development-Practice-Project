let a = Math.floor(Math.random()*6+1)
let b = Math.floor(Math.random()*6+1)

let c=(a>b)?1:2
let d=(a>b)?a:b


if(a===b){
    document.getElementById("heading").innerHTML=`It's a draw! Try again!`
}
else if(a>b){
    document.getElementById("heading").innerHTML=`🏆 Player ${c} Wins `
}
else{
    document.getElementById("heading").innerHTML=`Player ${c} Wins 🏆`
}



console.log(c)
console.log(d)

if(a===2){
    document.getElementById("dot13").style.backgroundColor="white";
    document.getElementById("dot17").style.backgroundColor="white";
}
else if(a===3){
    document.getElementById("dot13").style.backgroundColor="white";
    document.getElementById("dot17").style.backgroundColor="white";
    document.getElementById("dot15").style.backgroundColor="white";
}
else if(a===4){
    document.getElementById("dot11").style.backgroundColor="white";
    document.getElementById("dot13").style.backgroundColor="white";
    document.getElementById("dot17").style.backgroundColor="white";
    document.getElementById("dot19").style.backgroundColor="white";
}
else if(a===5){
    document.getElementById("dot11").style.backgroundColor="white";
    document.getElementById("dot13").style.backgroundColor="white";
    document.getElementById("dot17").style.backgroundColor="white";
    document.getElementById("dot19").style.backgroundColor="white";
    document.getElementById("dot15").style.backgroundColor="white";
}
else if(a===6){
    document.getElementById("dot11").style.backgroundColor="white";
    document.getElementById("dot13").style.backgroundColor="white";
    document.getElementById("dot17").style.backgroundColor="white";
    document.getElementById("dot19").style.backgroundColor="white";
    document.getElementById("dot12").style.backgroundColor="white";
    document.getElementById("dot18").style.backgroundColor="white";
}
else{
    document.getElementById("dot15").style.backgroundColor="white";
}

if(b===2){
    document.getElementById("dot23").style.backgroundColor="white";
    document.getElementById("dot27").style.backgroundColor="white";
}
else if(b===3){
    document.getElementById("dot23").style.backgroundColor="white";
    document.getElementById("dot27").style.backgroundColor="white";
    document.getElementById("dot25").style.backgroundColor="white";
}
else if(b===4){
    document.getElementById("dot21").style.backgroundColor="white";
    document.getElementById("dot23").style.backgroundColor="white";
    document.getElementById("dot27").style.backgroundColor="white";
    document.getElementById("dot29").style.backgroundColor="white";
}
else if(b===5){
    document.getElementById("dot21").style.backgroundColor="white";
    document.getElementById("dot23").style.backgroundColor="white";
    document.getElementById("dot27").style.backgroundColor="white";
    document.getElementById("dot29").style.backgroundColor="white";
    document.getElementById("dot25").style.backgroundColor="white";
}
else if(b===6){
    document.getElementById("dot21").style.backgroundColor="white";
    document.getElementById("dot23").style.backgroundColor="white";
    document.getElementById("dot27").style.backgroundColor="white";
    document.getElementById("dot29").style.backgroundColor="white";
    document.getElementById("dot22").style.backgroundColor="white";
    document.getElementById("dot28").style.backgroundColor="white";
}
else{
    document.getElementById("dot25").style.backgroundColor="white";
}


// else if(d==2){
//     document.getElementById("dot13").style.display = 'block';
//     document.getElementById("dot17").style.display = 'block';
// }
