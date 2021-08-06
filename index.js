let myhealth = document.getElementById("myhealth");

let opponenthealth = document.getElementById("opponenthealth");

let Ronniestats = { name: "Ronnie", hp: 50, attackdamage: 15, }
const ability1damage = 10;
 function ability1(){

    misschance = Math.floor(Math.random() * 101);

    document.getElementById("chattextID").innerHTML = "Chad Use Dick Dask!";
    document.getElementById("abilitiesID").style.display = "none";

    if (misschance < 90) {
        setTimeout(() => {
            document.getElementById("chattextID").innerHTML = "Dick Dask Hit";
            opponenthealth.value -= 10;

        }, 2000);
        setTimeout(() => {
            
            document.getElementById("chattextID").innerHTML = "Weebdog hit Chad";
            myhealth.value -= 10;
        }, 4000);
        setTimeout(() => {
            textback()
        }, 6000);
    } else { 
        setTimeout(() => {
            document.getElementById("chattextID").innerHTML = "Chad missed";
            document.getElementById("abilitiesID").style.display = "none";
        }, 2000);
        
        setTimeout(() => {
            document.getElementById("chattextID").innerHTML = "Weebdog hit Chad";
            myhealth.value -= 10;
        }, 4000);
        setTimeout(() => {
            textback()
        }, 6000);
    }
 }
 function ability2(){
    console.log(Ronniestats.hp);
 }
 function ability3(){

 }
 function ability4(){

 }
function textback(){
    document.getElementById("chattextID").innerHTML = "Make a move";
    document.getElementById("abilitiesID").style.display = "initial";

}
