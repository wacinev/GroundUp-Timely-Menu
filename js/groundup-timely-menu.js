// alert("hello from JS")
let dateTime = new Date()
console.log('data type of dateTime:', typeof(dateTime));
let hour = dateTime.getHours(); //get current hour 0-23
//set the meal based on current hour
// hour = 23;
let meal = ""
if (hour < 4) {
    meal = "Fourth Meal";
} else if(hour < 11) {
    meal="Breakfast";
} else if(hour < 15){
    meal = "Lunch"
} else if (hour < 17){
    meal = "Dinner"
} else {
    meal = "Fourth Meal"
}
// make the a tag as a concatenated string:
let mealLink = '<a class="button" href="' + meal + '.html">' + meal + '</a>';
console.log(mealLink);
//output the meal link to the current menu div
let currentMenuDiv = document.getElementById('current-menu');currentMenuDiv.innerHTML = mealLink;

// function runs when Dark mode checkbox is checked or unchecked
// get the check box
let checkbox = document.querySelector('#cb');

checkbox.addEventListener('change', toggleDarkMode);

function toggleDarkMode() {
    //log whether or not checkbox is checked
    console.log(this.checked);

    if(this.checked) {
        document.body.style.backgroundColor = "";
        document.body.style.color = "#ffc793";
    } else{
        document.body.style.backgroundColor = "#ffe";
        document.body.style.color = "#3d1c07";
    }
}

let heroH3 = document.querySelector('div h3');
let timelyGreeting = "";
let timeNow = dateTime.toLocaleTimeString('en-US');
console.log(timeNow);
if (hour < 4) {
    timelyGreeting = 'Hey Night Owl!';
}else if (hour < 12) {
    timelyGreeting = 'Good Morning!';
} else if (hour < 17) { 
    timelyGreeting = 'Good Afternoon!';
} else {
    timelyGreeting = 'Good Evening'; }

timelyGreeting += "<br>Time is now: " + timeNow;
heroH3.innerHTML = timelyGreeting;

//make an array of the 25 food quotes

let foodQuotes = [
"One cannot think well, love well, sleep well, if one has not dined well. - Virginia Woolf",
"Let food be thy medicine and medicine be thy food. - Hippocrates",
"People who love to eat are always the best people. - Julia Child",
"The only way to get rid of a temptation is to yield to it. - Oscar Wilde",
"Food is our common ground, a universal experience. - James Beard",
"Life is uncertain. Eat dessert first. - Ernestine Ulmer",
"All you need is love. But a little chocolate now and then doesn't hurt. - Charles M. Schulz",
"Tell me what you eat, and I will tell you what you are. - Jean Anthelme Brillat-Savarin",
"A party without cake is just a meeting. - Julia Child",
"First we eat, then we do everything else. - M.F.K. Fisher",
"Cooking is like love. It should be entered into with abandon or not at all. - Harriet Van Horne",
"Food, in the end, in our own tradition, is something holy. It's not about nutrients and calories. It's about sharing. It's about honesty. It's about identity. - Louise Fresco",
"If you really want to make a friend, go to someone's house and eat with him... the people who give you their food give you their heart. - Cesar Chavez",
"Cooking is at once child's play and adult joy. And cooking done with care is an act of love. - Craig Claiborne",
"One cannot think well, love well, sleep well if one has not dined well. - M.F.K. Fisher",
"Food is art, and food is love. And we should show love and appreciation for those who cook it by eating it with relish. - Mark Bittman",
"The only time to eat diet food is while you're waiting for the steak to cook. - Julia Child",
"Food should be fun. - Thomas Keller",
"We all eat, and it would be a sad waste of opportunity to eat badly. - Anna Thomas",
"Laughter is brightest in the place where the food is. - Irish Proverb",
"Food is symbolic of love when words are inadequate. - Alan D. Wolfelt",
"There is no love sincerer than the love of food. - George Bernard Shaw",
"The secret of success in life is to eat what you like and let the food fight it out inside. - Mark Twain",
"Food is not rational. Food is culture, habit, craving, and identity. - Jonathan Safran Foer",
"Food is memories. - José Andrés",
]
console.log(foodQuotes[9]);
let r = Math.floor(Math.random() * foodQuotes.length);
console.log(r);
console.log(foodQuotes[r]); //random quote
let quoteH4 = document.querySelector('div h4');
quoteH4.textContent = foodQuotes[r];


let luckyNumP = document.querySelector('.hero p');
luckyNumP.textContent = "Today's Lucky Numbers: ";

// for(let i=0; i<5; i++){
//     let luckyNum = Math.ceil(Math.random() * 69);
//     luckyNumP.textContent += luckyNum + " ";
// }


let fruits = ['apple', 'banana', 'blueberry', 'cherry', 'grape', 'grapefruit', 'kiwi', 'lemon', 'lime', 'mango'];
let randomFruit = "";
while(randomFruit != 'kiwi'){
    let r = Math.floor(Math.random() * fruits.length);
    randomFruit = fruits[r];
    console.log('randomFruit:',randomFruit);
}


let luckyNumsArr = [];
while(luckyNumsArr.length <5) {
    let luckyNum = Math.ceil(Math.random() *69);
    if(!luckyNumsArr.includes(luckyNum)){
        luckyNumsArr.push(luckyNum);
    }
    console.log(luckyNumsArr);
}
        
luckyNumsArr.sort();
luckyNumsArr.sort(function(a,b) {
    return a - b;
});
console.log('sorted:', luckyNumsArr);

let powerball = Math.ceil(Math.random() * 26);

console.log('includes powerball:', powerball);

let luckyNumStr = luckyNumsArr.join(", ");
// console.log('This is luckynums str', luckyNumStr);
// luckyNumP.textContent += luckyNumStr;
// console.log('this is luckynump', luckyNumP);
let powerballSpan = '<span style="color:pink;">' + powerball + '</span>'

luckyNumP.innerHTML += luckyNumStr + '  ' + powerballSpan;


// luckyNumsArr.sort();
// luckyNumsArr.sort(function)