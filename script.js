const nameField = document.querySelector(".form-name");
const addButton = document.querySelector(".add-button");
const clearButton = document.querySelector(".clear-button");
const submitButton = document.querySelector(".primary-cta");
const outputList = document.querySelector(".add-names");
let countriesArray = ["Argentina", "Australia", "Belgium", "Brazil", "Cameroon", "Canada", "Costa Rica", "Croatia", "Denmark", "Ecuador", "England", "France", "Germany", "Ghana", "Iran", "Japan", "Mexico", "Morocco", "Netherlands", "Poland", "Portugal", "Qatar", "Saudi Arabia", "Senegal", "Serbia", "South Korea", "Spain", "Switzerland", "Tunisia", "United States", "Uruguay", "Wales"];
let namesArray = [];

addButton.addEventListener ("click", (event) => {
  event.preventDefault()
  const addedPerson = nameField.value;
if (outputList.childElementCount < 32 && addedPerson != ""){
namesArray.push(addedPerson);
const inputtedLi = `<li class="list-inline-item"><p>${addedPerson}</p></li>`;
outputList.insertAdjacentHTML("beforeend", inputtedLi);
nameField.value ="";
} else if (addedPerson === ""){
  alert("Please write a name before pressing the 'add' button.");
}else{
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
      const listItems = document.querySelectorAll(".list-inline-item");
      for (let i = 0; i < listItems.length; i++){
        listItems[i].classList.remove('list-inline-item');
        listItems[i].classList.add('new-look');
      }
    const times = 32;
    let count = 0;
    for(let i = 0; i < times; i++) {
    const randCountryIndex = (Math.floor(Math.random()*countriesArray.length));
    const randCountry = countriesArray[randCountryIndex];
    countriesArray.splice(randCountryIndex, 1);
    let insertedCountry = `<p>${randCountry}</p>`;
    listItems[count].insertAdjacentHTML("beforeend", insertedCountry);
    if (count < listItems.length - 1){
      count +=1
    }else{
      count = 0;
    }
    }
  }else {
    alert("You need at least two players!");
  }
    });
