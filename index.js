function scuberGreetingForFeet(feet){
  if (feet <= 400) {
    return 'This one is on me!';
  } else if (199 < feet && feet < 2500) {
    return "I will gladly take your thirty bucks.";
  } else {
    return "No can do.";
  }
}

function ternaryCheckCity(city) {
  if city === 'NYC' ? `Ok, sounds good.'` : 'No go.';
}
