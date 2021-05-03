let myhealth = document.getElementById("myhealth");
let opponenthealth = document.getElementById("opponenthealth");

 const ability1damage = 10;

 function ability1(){
    misschance = Math.floor(Math.random() * 101);
    if (misschance < 90) {
        opponenthealth.value -= 10;
        document.getElementById("chattextID").innerHTML = "Chad hit Weeb Dog";
        setTimeout(() => {
            textback()
        }, 20000);
    } else {
        document.getElementById("chattextID").innerHTML = "Chad missed";
        setTimeout(() => {
            textback()
        }, 100);
    }
 }
 function ability2(){

 }
 function ability3(){

 }
 function ability4(){

 }
function textback(){
    document.getElementById("chattextID").innerHTML = "Make a move";
}