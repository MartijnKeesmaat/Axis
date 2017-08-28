// Greeting
var today = new Date();
var hourNow = today.getHours();
var greeting;

// check for time
if (hourNow >= 17.5){
  greeting = 'Goedenavond';
}

else if (hourNow  >= 12){
  greeting = 'Goedemiddag';
}

else if (hourNow >= 0){
  greeting = 'Goedemorgen';
} else {
  greeting = 'Goededag';
}

$('.hero-unit__title-backdrop').text(greeting);
