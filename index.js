
const inputEl = document.getElementById("input-el");
const btnEl = document.getElementById("btn-el");
const containerBottomEl = document.getElementById("container-bottom-el");

const divEl_1 = document.getElementById("div-el-1");
const divEl_2 = document.getElementById("div-el-2");
const divEl_3 = document.getElementById("div-el-3");

const lenght_h3 = document.getElementById("lenght-h3");
const volume_h3 = document.getElementById("volume-h3");
const mass_h3 = document.getElementById("mass-h3")

const lenght_p = document.getElementById("lenght-p");
const volume_p = document.getElementById("volume-p");
const mass_p = document.getElementById("mass-p");


const darkmode = document.querySelector("input[name=checkbox]");

darkmode.addEventListener('change', function() {
  if (this.checked) {
    containerBottomEl.style.setProperty('background-color', "#1F2937");
    
    divEl_1.style.setProperty('background-color', "#273549");
    divEl_2.style.setProperty('background-color', "#273549");
    divEl_3.style.setProperty('background-color', "#273549");
    
    lenght_h3.style.setProperty('color', "#CCC1FF");
    volume_h3.style.setProperty('color', "#CCC1FF");
    mass_h3.style.setProperty('color', "#CCC1FF");
    
    lenght_p.style.setProperty('color', "#FFFFFF");
    volume_p.style.setProperty('color', "#FFFFFF");
    mass_p.style.setProperty('color', "#FFFFFF");
    
  } else {
    containerBottomEl.style.setProperty('background-color', "#F4F4F4");
      
    divEl_1.style.setProperty('background-color', "#FFFFFF");
    divEl_2.style.setProperty('background-color', "#FFFFFF");
    divEl_3.style.setProperty('background-color', "#FFFFFF");
    
    lenght_h3.style.setProperty('color', "#5A537B");
    volume_h3.style.setProperty('color', "#5A537B");
    mass_h3.style.setProperty('color', "#5A537B");
    
    lenght_p.style.setProperty('color', "#353535");
    volume_p.style.setProperty('color', "#353535");
    mass_p.style.setProperty('color', "#353535");
  }
});


btnEl.addEventListener("click", function lengthConverter() {
    
    let input = inputEl.value;
    
    let feet = (input * 3.281).toFixed(2);
    let meters = (input / 3.281).toFixed(2);
    
    let liters = (input / 0.264).toFixed(2);
    let gallons = (input * 0.264).toFixed(2);
    
    let kilos = (input / 2.204).toFixed(2);
    let pounds = (input * 2.204).toFixed(2);
    
    lenght_p.textContent = `${input} meters = ${feet} feet | ${input} feet = ${meters} meters`;
    volume_p.textContent = `${input} liters = ${gallons} gallons | ${input} gallons = ${liters} liters`;
    mass_p.textContent = `${input} kilos = ${pounds} pounds | ${input} pounds = ${kilos} kilos`;
    
    inputEl.value = "";
}
)

