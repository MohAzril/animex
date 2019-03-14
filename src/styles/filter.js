var ages = [32, 33, 12, 40];

function checkAdult(age) {
  return age == document.getElementById("ageToCheck").value;
}

function myFunction() {
  document.getElementById("demo").innerHTML = ages.filter(checkAdult);
}
