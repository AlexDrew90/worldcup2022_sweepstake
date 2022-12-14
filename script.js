const nameField = document.querySelector(".form-name");
const addButton = document.querySelector(".add-button");
const clearButton = document.querySelector(".clear-button");
const submitButton = document.querySelector(".primary-cta");
const outputList = document.querySelector(".add-names");
const toggleListen = document.querySelector(".checkbox");
let countriesArray = ["Argentina", "Australia", "Belgium", "Brazil", "Cameroon", "Canada", "Costa Rica", "Croatia", "Denmark", "Ecuador", "England", "France", "Germany", "Ghana", "Iran", "Japan", "Mexico", "Morocco", "Netherlands", "Poland", "Portugal", "Qatar", "Saudi Arabia", "Senegal", "Serbia", "South Korea", "Spain", "Switzerland", "Tunisia", "United States", "Uruguay", "Wales"];
let seedOneCountriesArray = ["Argentina", "Belgium", "Brazil", "Croatia", "Denmark", "England", "France", "Germany", "Mexico", "Netherlands", "Portugal", "Senegal", "Serbia", "Spain", "Switzerland", "Uruguay"];
let seedTwoCountriesArray = ["Australia", "Cameroon", "Canada", "Costa Rica", "Ecuador", "Ghana", "Iran", "Japan", "Morocco", "Poland", "Qatar", "Saudi Arabia", "South Korea", "Tunisia", "United States", "Wales"];
let namesArray = [];
let count = 0;
let carryOverArray = [];

const clearPage = () =>{
  outputList.innerHTML="";
  namesArray = [];
  carryOverArray = [];
  countriesArray = ["Argentina", "Australia", "Belgium", "Brazil", "Cameroon", "Canada", "Costa Rica", "Croatia", "Denmark", "Ecuador", "England", "France", "Germany", "Ghana", "Iran", "Japan", "Mexico", "Morocco", "Netherlands", "Poland", "Portugal", "Qatar", "Saudi Arabia", "Senegal", "Serbia", "South Korea", "Spain", "Switzerland", "Tunisia", "United States", "Uruguay", "Wales"];
  seedOneCountriesArray = ["Argentina", "Belgium", "Brazil", "Croatia", "Denmark", "England", "France", "Germany", "Mexico", "Netherlands", "Portugal", "Senegal", "Serbia", "Spain", "Switzerland", "Uruguay"];
  seedTwoCountriesArray = ["Australia", "Cameroon", "Canada", "Costa Rica", "Ecuador", "Ghana", "Iran", "Japan", "Morocco", "Poland", "Qatar", "Saudi Arabia", "South Korea", "Tunisia", "United States", "Wales"];
  const clearHighlight = document.querySelectorAll(".highlight");
  for (let i = 0; i < clearHighlight.length; i++){
    clearHighlight[i].classList.remove("highlight");
  }}

addButton.addEventListener ("click", (event) => {
  event.preventDefault()
  const addedPerson = nameField.value;
if(countriesArray.length === 0 || seedTwoCountriesArray.length === 0){
  alert("Clearing existing names...");
  clearPage();
}else{
  if (outputList.childElementCount < 32 && addedPerson){
  namesArray.push(addedPerson);
  const inputtedLi = `<li class="list-inline-item"><p class="name-header">${addedPerson}</p></li>`;
  outputList.insertAdjacentHTML("beforeend", inputtedLi);
  nameField.value ="";
  } else if (addedPerson === ""){
    alert("Please write a name before pressing the 'add' button.");
  }else{
    alert("32 is the maximum. No more teams left!");
    nameField.value ="";}}
return namesArray
});

clearButton.addEventListener ("click", () => {
  clearPage();
  });

const addCountries = () => {
  const randCountryIndex = (Math.floor(Math.random()*countriesArray.length));
  const listItems = document.querySelectorAll(".list-inline-item");
  const randCountry = countriesArray[randCountryIndex];
  let insertedCountry = `<p>${randCountry}</p>`;
  let sadFace = `<p>${"&#128532"}</p>`;
  if(randCountry != undefined){
  listItems[count -1].insertAdjacentHTML("beforeend", insertedCountry);
  const randCountryNoSpace = randCountry.replace(/ /g,'');
  const selectFlag = document.getElementById(randCountryNoSpace);
  selectFlag.classList.add('highlight');}
  else{listItems[count -1].insertAdjacentHTML("beforeend", sadFace);}
  countriesArray.splice(randCountryIndex, 1);}

const seededAddCountriesTwo = (count) => {
  const randCountryIndex = (Math.floor(Math.random()*seedTwoCountriesArray.length));
  const listItems = document.querySelectorAll(".list-inline-item");
  const randCountry = seedTwoCountriesArray[randCountryIndex];
  // const remainder = 32 % namesArray.length;
  const average = 32/namesArray.length;
  // const averageCeil = Math.ceil(average);
  let insertedCountry = `<p>${randCountry}</p>`;
  let sadFace = `<p>${"&#128532"}</p>`;
  console.log(randCountry);
  if(randCountry != undefined){
  listItems[count -1].insertAdjacentHTML("beforeend", insertedCountry);
  const randCountryNoSpace = randCountry.replace(/ /g,'');
  const selectFlag = document.getElementById(randCountryNoSpace);
  selectFlag.classList.add('highlight');}
  else{listItems[count -1].insertAdjacentHTML("beforeend", sadFace);}
  seedTwoCountriesArray.splice(randCountryIndex, 1);
}

const seededAddCountriesOne = () => {
  const randCountryIndex = (Math.floor(Math.random()*seedOneCountriesArray.length));
  const listItems = document.querySelectorAll(".list-inline-item");
  const randCountry = seedOneCountriesArray[randCountryIndex];
  let insertedCountry = `<p>${randCountry}</p>`;
  if(seedOneCountriesArray.length != 0){
  listItems[count -1].insertAdjacentHTML("beforeend", insertedCountry);
  const randCountryNoSpace = randCountry.replace(/ /g,'');
  const selectFlag = document.getElementById(randCountryNoSpace);
  selectFlag.classList.add('highlight');}
  if(seedOneCountriesArray.length === 0){carryOverArray.push(count);}
  seedOneCountriesArray.splice(randCountryIndex, 1);
  return carryOverArray
}

const singleLoopThrough = () => {
  let countRand = 0
  let countArray = Array.from({length: namesArray.length}, (_, i) => i + 1);
      while(countArray.length != 0){
      const randCountIndex = (Math.floor(Math.random()*countArray.length));
      countRand = countArray[randCountIndex];
      count = countRand;
      countArray.splice(randCountIndex, 1);
      // setTimeout(addCountries, 300);
      addCountries();
    }
  return count;
}

const seededSingleLoopThroughTwo = (difference, countArray) => {
  let countRand = 0
  if(difference.length != 0){
    const newRandCountIndex = (Math.floor(Math.random()*difference.length));
      countRand = difference[newRandCountIndex];
      count = countRand;
      difference.splice(newRandCountIndex, 1);
      carryOverArray.splice("newRandCountIndex, 1");
  }
     else if(countArray.length != 0){
      const randCountIndex = (Math.floor(Math.random()*countArray.length));
      countRand = countArray[randCountIndex];
      count = countRand;
      countArray.splice(randCountIndex, 1);
    }
    seededAddCountriesTwo(count);
}

const seededSingleLoopThroughOne = () => {
  let countRand = 0
  let countArray = Array.from({length: namesArray.length}, (_, i) => i + 1);
      while(countArray.length != 0){
      const randCountIndex = (Math.floor(Math.random()*countArray.length));
      countRand = countArray[randCountIndex];
      count = countRand;
      countArray.splice(randCountIndex, 1);
      seededAddCountriesOne();
    }
  return count;
}

const loopThrough = () => {
  while(countriesArray.length != 0){
    singleLoopThrough();
  }
}

const seededLoopThrough = () => {
  while(seedOneCountriesArray.length != 0){
    seededSingleLoopThroughOne();
  }
  let countArray = Array.from({length: namesArray.length}, (_, i) => i + 1);
  let difference = countArray.filter(x => carryOverArray.includes(x));
  console.log(difference);
  while(seedTwoCountriesArray.length != 0){
    if(countArray.length === 0){
      countArray = Array.from({length: namesArray.length}, (_, i) => i + 1);
      console.log('refill', countArray);
    }
    seededSingleLoopThroughTwo(difference, countArray);
  }
}

submitButton.addEventListener ("click", () => {
  addButton.disabled = true;
  submitButton.disabled = true;
  if (outputList.childElementCount > 1){
    if(toggleListen.checked === true && outputList.childElementCount <= 16){
      seededLoopThrough();
    }else if(toggleListen.checked === true && outputList.childElementCount > 16){
      alert("You can only distribute top seeded teams first with a maximum of 16 players.");
      clearPage();
    }else{loopThrough();}
  }else {
    alert("You need at least two players!");
  }
  const listItems = document.querySelectorAll(".list-inline-item");
          for (let i = 0; i < listItems.length; i++){
            listItems[i].classList.remove('list-inline-item');
            listItems[i].classList.add('new-look');
          }
  addButton.disabled = false;
  submitButton.disabled = false;
    });
