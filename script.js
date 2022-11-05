const nameField = document.querySelector(".form-name");
const addButton = document.querySelector(".add-button");
const clearButton = document.querySelector(".clear-button");
const submitButton = document.querySelector(".primary-cta");
const outputList = document.querySelector(".add-names");
let countriesArray = ["Argentina", "Australia", "Belgium", "Brazil", "Cameroon", "Canada", "Costa Rica", "Croatia", "Denmark", "Ecuador", "England", "France", "Germany", "Ghana", "Iran", "Japan", "Mexico", "Morocco", "Netherlands", "Poland", "Portugal", "Qatar", "Saudi Arabia", "Senegal", "Serbia", "South Korea", "Spain", "Switzerland", "Tunisia", "United States", "Uruguay", "Wales"];
let namesArray = [];

addButton.addEventListener ("click", (event) => {
  event.preventDefault()
if (outputList.childElementCount < 32){
const addedPerson = nameField.value;
namesArray.push(addedPerson);
const inputtedLi = `<li class="list-inline-item">${addedPerson}</li>`;
outputList.insertAdjacentHTML("beforeend", inputtedLi);
nameField.value ="";
} else {
  alert("32 is the maximum. No more teams left!");
  nameField.value ="";
}
return namesArray
});

clearButton.addEventListener ("click", (event) => {
  outputList.innerHTML="";
  });

submitButton.addEventListener ("click", (event) => {
  if (outputList.childElementCount > 1){
    countriesArray.forEach((event) => {
    const randCountry = countriesArray[Math.floor(Math.random()*countriesArray.length)];

    })
  }else {
    alert("You need at least two players!");
  }
    });
