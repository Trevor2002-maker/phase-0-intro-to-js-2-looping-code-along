// Code your solutions in this file!
const gifts =["teddy bear","drone","doll"];

function wrapGift(gifts){
    for (let i=0;i<gifts.length;i++){
        console.log(`Wrapped ${gifts[i]} and added a bow!`);
        debugger
    }
    return gifts 
}

for (let age = 30; age < 40; age++) {
    console.log(`I'm ${age} years old. Happy birthday to me!`);
    debugger;
  }

  wrapGift(gifts);

  function writeCards(stringArray,eventName){
      const stringLength = stringArray.length;
      const newArray = []
      for(let i=0;i<stringLength;i++){
          newArray.push (`Thank you, ${stringArray[i]}, for the wonderful ${eventName} gift!`)
          console.log(newArray);
      }
      return newArray;
  }
  
  writeCards(["Guadalipe","Ollie","Aki"], "birthday");

  