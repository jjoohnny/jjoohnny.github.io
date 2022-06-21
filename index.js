document.getElementById("explosion").style.visibility = "hidden";
document.getElementById("explosion2").style.visibility = "hidden";
function myFunction() {
  alert("noooooo")
  document.getElementById("explosion").style.visibility = "visible";
  document.getElementById("explosion2").style.visibility = "visible";
  }

function ugaredirect() {
    location.replace("index.html")
}

function clickCounter() {
    if (typeof(Storage) !== "undefined") {
      if (localStorage.clickcount) {
        localStorage.clickcount = Number(localStorage.clickcount)+1;
      } else {
        localStorage.clickcount = 1;
      }
      localStorage.multiplier = 2;
      
      document.getElementById("result").innerHTML = "You have clicked the button " + localStorage.clickcount * localStorage.multiplier + " time(s).";
    } else {
      document.getElementById("result").innerHTML = "Sorry, your browser does not support web storage...";
    }
  }