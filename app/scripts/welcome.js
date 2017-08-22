// Greeting
const today = new Date();
const hourNow = today.getHours();
let greeting;

// check for time
if (hourNow >= 17.5){
  greeting = 'Goedenavond ';
}

else if (hourNow  >= 12){
  greeting = 'Goedemiddag ';
}

else if (hourNow >= 0){
  greeting = 'Goedemorgen ';
}

$('.hero-unit__title-backdrop').text(greeting);
