var drink = "";
var temperature;

//flavour
var flavour = [
  'Pumpkin Spice', 'Vanilla Bean', 'Caramel Brule', 'Eggnog', 'Gingerbread',
  'Holiday Spice', 'Chestnut Praline', 'Peppermint', 'Salted Caramel', 'Vanilla',
  'Cinnamon Dolce', 'Smoked Butterscotch'
];

//possible toppings
var topping = ["chocolate sprinkles", "caramel drizzle", "no foam", "whip", "cinnamon"];
var milks = ["skim", "one percent", "two percent", "", "soy", "almond milk", "coconut milk"];
var sizes = ["short", "tall", "grande", "venti"];

//possible added toppings
function genToppings(extraVal) {
  var selected1;
  var selected2;
  var selected3;

  if(extraVal < 4.5) {
    return "";
  } else if(extraVal >= 4.5 && extraVal < 5.5) {

    return " with " + topping[randomInt(5)];

  } else if(extraVal >= 5.5 && extraVal < 8) {

    selected1 = topping[randomInt(5)];
    selected2 = topping[randomInt(5)];
    while(!selected1.localeCompare(selected2)) {
      selected2 = topping[randomInt(5)];
    }
    return " with " + selected1 + " and " + selected2;

  } else if(extraVal >= 8) {

    selected1 = topping[randomInt(5)];
    selected2 = topping[randomInt(5)];
    selected3 = topping[randomInt(5)];
    while(!selected1.localeCompare(selected2)){
      selected2 = topping[randomInt(5)];
    }
    while(!selected1.localeCompare(selected3) && !selected1.localeCompare(selected3)){
      selected3 = topping[randomInt(5)];
    }

    return " with " + selected1 + ", " + selected2 + ", and " + selected3;

  }
}

//gives an increasingly specific random temperature
function genTemp(extraVal) {
  var temperature;
  var max;
  if(extraVal < 3){
    return "";
  } else if (extraVal < 7 && extraVal >= 3) {
    max = 3;
    temperature = ["lukewarm", "extra hot", "fairly toasty"];
    return ", " + temperature[randomInt(max)];
  } else {
    max = 71;
    temperature = [];
    for(i = 105; i <= 176; i++) {
      temperature.push(i);
    }
    return ", and could i get that at " + temperature[randomInt(max)] + " degrees?";
  }
}

//generates a random base drink considering how extra you want your drink
function genPossDrinks(extraVal){
  var possDrinks;
  var max;
  if(extraVal < 3) {
    max = 3;
    possDrinks = [
      'Americano', 'Pike Place Roast', 'Steamed Milk',
    ];
  } else {
    max = 10;
    possDrinks = [
      'Mocha', 'Latte', 'Cappuccino', 'Hot Chocolate', 'Caffe Misto',
      'Hot Chocolate', 'Chai Latte', 'London Fog', 'Green Tea Latte',
      'Breakfast Tea Latte'
    ];
    if(extraVal > 6){
      max = 12;
      possDrinks.push("Flat White", "Macchiato");
    }
  }
  return possDrinks[randomInt(max)];
}

//decides how you should ask based on extraVal
function askMethod(extraVal) {
  var askOptions;
  if(extraVal < 5) {
    askOptions = ["May I grab a ", "Could I snag a ", "Give me a ", "Please can I get a "];
  } else if(extraVal >= 5) {
    askOptions = ["Ummm... make me a ", "Hmm.. give me a ", "I would LOVE to have a ", "I am DYING for a "];
  }

  return askOptions[randomInt(4)];
}

//created a random integer function
function randomInt(upperBound) {
  return Math.floor(Math.random() *  Math.floor(upperBound));
}

//after generate is pushed
function generate() {
  var extraness = ((document.getElementById('extraness').value)/10);
  var flav;

  if(extraness <= 2){
    flav = "";
  } else {
    flav = " " + flavour[randomInt(11)];
  }

  var drink = {
    temp: genTemp(extraness),
    flava: flav,
    toppings: genToppings(extraness),
    size: document.getElementById('sizeid').value,
    milk: document.getElementById('milkTypeid').value,
    type: genPossDrinks(extraness),
    getInfo: function () {
      return askMethod(extraness) + this.size + this.milk + this.flava + " " + this.type + this.toppings + this.temp;
    }
  };

  if(extraness < 9) {
    var text = drink.getInfo() + ".";
    insert(text);
  } else {
    var text = drink.getInfo() + " ...wait no... actually ";
    drink.temp = genTemp(extraness),
    drink.flava = " " + flavour[randomInt(11)];
    drink.toppings = genToppings(extraness);
    drink.type = genPossDrinks(extraness);
    text = text + (drink.getInfo()) + ".";
    insert(text);
  }
}

//inputs our new drink onto the HTML!
function insert(text) {
  var div = document.getElementById("final-drink");
  div.innerHTML = text;
}
