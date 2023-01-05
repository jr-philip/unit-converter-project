/*1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound*/


let boxEl = document.getElementById("box-el")
let convertBtn = document.getElementById("convert-btn")
let lengthEl = document.getElementById("length-el")
let volumeEl = document.getElementById("volume-el")
let massEl = document.getElementById("mass-el")

const metersToFeet = 3.281
const literToGallon = 0.264
const kilogramToPound = 2.204

convertBtn .addEventListener("click",function(){
    let answer = boxEl.value 
    lengthEl.textContent = `${Number(answer).toFixed(3)} meter = ${Number(answer * metersToFeet).toFixed(3)} feet`
  }
)

convertBtn.addEventListener("click",function(){
    let answer = boxEl.value
    volumeEl.textContent = `${Number(answer).toFixed(3)} liter = ${Number(answer *literToGallon).toFixed(3)} gallon`
  }
)

convertBtn.addEventListener("click", function(){
    let answer = boxEl.value 
    massEl.textContent = `${Number(answer).toFixed(3)}kilogram = ${Number(answer * kilogramToPound).toFixed(3)} pound`

  }
)