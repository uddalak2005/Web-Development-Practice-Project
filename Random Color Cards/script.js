function getRandomletters(arr) {
  let num = Math.floor(Math.random() * arr.length);
  return arr[num];
}

function genRandomColorCodes() {
  const color_letters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f",];

  let color_string = "#";

  for (let i = 0; i < 6; i++) {
    color_string = color_string.concat(getRandomletters(color_letters));
  }

  return color_string;
}

function searchRepeat(n,arr){
  for(let i=0;i<arr.length;i++){
    if(n===arr[i]){
      return true
    }
  }
  return false
}



let boxes = document.getElementsByClassName("box");
let colors = document.getElementsByClassName("colorName")
let generatedColors=[]

for(let index=0;index<boxes.length;index++){
  let n= genRandomColorCodes()

  // TO CHECK THAT ONE COLOR DOES NOT GET REPEATED
  while(searchRepeat(n,generatedColors)){
    n=genRandomColorCodes()
    console.log(n)
  }

  generatedColors.push(n)
  boxes[index].style.backgroundColor=n
  colors[index].innerHTML=n

  //New Knowledge used to copy color codes to user clip board
  colors[index].onclick = function(){
    navigator.clipboard.writeText(n)
    alert(`Color Code ${n} Successfully Copied to Clipboard`)
  }

}
console.log(generatedColors)
