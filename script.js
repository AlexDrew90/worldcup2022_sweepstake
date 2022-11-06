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
if (outputList.childElementCount < 32 && addedPerson){
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
  countriesArray = ["Argentina", "Australia", "Belgium", "Brazil", "Cameroon", "Canada", "Costa Rica", "Croatia", "Denmark", "Ecuador", "England", "France", "Germany", "Ghana", "Iran", "Japan", "Mexico", "Morocco", "Netherlands", "Poland", "Portugal", "Qatar", "Saudi Arabia", "Senegal", "Serbia", "South Korea", "Spain", "Switzerland", "Tunisia", "United States", "Uruguay", "Wales"];
  const clearHighlight = document.querySelectorAll(".highlight");
  for (let i = 0; i < clearHighlight.length; i++){
    clearHighlight[i].classList.remove("highlight");
  }
  });

submitButton.addEventListener ("click", (event) => {
  if (outputList.childElementCount > 1){
      const listItems = document.querySelectorAll(".list-inline-item");
      for (let i = 0; i < listItems.length; i++){
        listItems[i].classList.remove('list-inline-item');
        listItems[i].classList.add('new-look');
      }
    const remainder = 32 % namesArray.length;
    const times = 32;
    let count = 0;
    let delayedFunction = (i) => {
      setTimeout(function() {
        const randCountryIndex = (Math.floor(Math.random()*countriesArray.length));
        const randCountry = countriesArray[randCountryIndex];
        countriesArray.splice(randCountryIndex, 1);
        let insertedCountry = `<p>${randCountry}</p>`;
        console.log(count);
        listItems[count].insertAdjacentHTML("beforeend", insertedCountry);
       if(countriesArray.length === remainder){
        const randNum = Math.floor(Math.random()*listItems.length);
        count = randNum;
          // const newLook = document.querySelectorAll(".new-look");
          // console.log(newLook.length);
          // const averageLength = newLook[0].childElementCount;
          // const equalChildElements = newLook[0].childElementCount;
          // const fairRandom = () => {
          //   const randNum = Math.floor(Math.random()*listItems.length);
          //   const isChild = newLook[randNum].childElementCount;
          //     if(isChild === equalChildElements){
          //       count = randNum;
          //       console.log(count);
          //       console.log(listItems[count]);
          //     }else{ fairRandom();}
          //   }
          // fairRandom();
        }else if(count < listItems.length - 1){
          count +=1
        }else{
          count = 0;
        }
        const randCountryNoSpace = randCountry.replace(/ /g,'')
        const selectFlag = document.getElementById(randCountryNoSpace);
          selectFlag.classList.add('highlight');
      }, 200 * i);
    }
    for(let i = 0; i < times; i++) {
      delayedFunction(i);
    }
  }else {
    alert("You need at least two players!");
  }
    });


    // const newLook = document.querySelectorAll(".new-look");
    // console.log(newLook);
    // const fairCount = randomFair.childElementCount[randNum]
    // take down number of child elements when all are equal
