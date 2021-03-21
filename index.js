const name = ["Lisa", "Kaitlin", "Jan"];
function writeCards (name) {
  for (let i = 0; i < name.length; i++) {
    console.log(`Thank you, ${name[i]}, for the wonderful birthday gift!`);
    debugger;
  }
  return name;
}
writeCards(name);


let countDown = 10;
while (countDown > 0) {
    console.log(countDown--);
}

countDown;