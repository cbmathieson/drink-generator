var drink = "";
var temperature;

//flavour
var flavour = [
  'Pumpkin Spice', 'Vanilla Bean', 'Caramel Brule', 'Eggnog', 'Gingerbread',
  'Holiday Spice', 'Chestnut Praline', 'Peppermint', 'Salted Caramel', 'Vanilla',
  'Cinnamon Dolce', 'Smoked Butterscotch'
];

//possible toppings
var topping = ["chocolate sprinkles", "caramel drizzle", "extra foam", "no foam", "whip"];

//after generate is pushed
function generate() {
  var extraness = (document.getElementById('extraness').value)/10;
  var flav;
  var toppins;
  if(extraness < 3){
    flav = "";
  } else {
    flav = flavour[randomInt(11)];
  }
  if(extraness > 6) {
    toppins = topping[randomInt(4)];
  } else {
    toppins = "";
  }

  var drink = {
    temperature: genTemp(extraness),
    flavour: flav,
    toppings: toppins,
    size: document.getElementById('sizeid').value,
    milk: document.getElementById('milkTypeid').value,
    type: genPossDrinks(extraness)
  };
  console.log(drink.temperature);
  console.log(drink.milk);
  console.log(drink.size);
  console.log(drink.type);
  console.log(drink.toppings);
  console.log(drink.flavour);

}

//gives an increasingly specific random temperature
function genTemp(extraVal) {
  var temperature;
  var max;
  if(extraVal < 3){
    return "";
  } else if (extraVal < 6 && extraVal >= 3) {
    max = 3;
    temperature = ["lukewarm", "extra hot", "fairly toasty"];
  } else {
    max = 71;
    temperature = [];
    for(i = 105; i <= 176; i++) {
      temperature.push(i);
    }
  }
  return temperature[randomInt(max)];
}

//generates a random base drink considering how extra you want your drink
function genPossDrinks(extraVal){
  var possDrinks;
  var max;
  if(extraVal < 3) {
    max = 6;
    possDrinks = [
      'Americano', 'espresso', 'Pike Place Roast', 'Steamed Milk',
      'Steamed Apple Juice', 'espresso con panna'
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

//created a random integer function
function randomInt(upperBound) {
  return Math.floor(Math.random() *  Math.floor(upperBound));
}
