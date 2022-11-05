const nameField = document.querySelector(".form-name");
const addButton = document.querySelector(".add-button");
const clearButton = document.querySelector(".clear-button");
const submitButton = document.querySelector(".primary-cta");
const outputList = document.querySelector(".add-names");
let countriesArray = ["Argentina", "Australia", "Belgium", "Brazil", "Cameroon", "Canada", "Costa Rica", "Croatia", "Denmark", "Ecuador", "England", "France", "Germany", "Ghana", "Iran", "Japan", "Mexico", "Morocco", "Netherlands", "Poland", "Portugal", "Qatar", "Saudi Arabia", "Senegal", "Serbia", "South Korea", "Spain", "Switzerland", "Tunisia", "United States", "Uruguay", "Wales"];

addButton.addEventListener ("click", (event) => {
if (outputList.childElementCount < 2){
const addedPerson = nameField.value;
const inputtedLi = `<li class="list-inline-item">${addedPerson}</li>`;
outputList.insertAdjacentHTML("beforeend", inputtedLi);
nameField.value ="";
} else {alert("32 is the maximum. No more teams left!");
return false;}
});

clearButton.addEventListener ("click", (event) => {
  outputList.innerHTML="";
  });
