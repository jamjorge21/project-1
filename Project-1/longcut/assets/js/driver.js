// Global variables for Profile page // 
var nameInput = document.querySelector("#userName");
var routeNumber = document.querySelector("#routeNum");
var loc = document.querySelector("#location");
var emailInput = document.querySelector("#email");
var signUpButton = document.querySelector(".infoBtn");
var msgDiv = document.querySelector("#msg");
var userName = document.querySelector("#name");
var inputRoute= document.querySelector("#routes");
var currentLocation= document.querySelector("#currentLocation");
var currentEmail = document.querySelector("#currentEmail");

function displayMessage(type, message) {
  msgDiv.textContent = message;
  msgDiv.setAttribute("class", type);
}
// on click event for submit button to save profile information // 
signUpButton.addEventListener("click", function(event) {
  event.preventDefault();
  
  // create user object from submission
  var user = {
    name: nameInput.value,
    route: routeNumber.value,
    locate: loc.value,
    email: emailInput.value
  };

  console.log(user);
  
  // validate the fields
  if (user.name === "") {
    displayMessage("error", "Name cannot be blank");
  } else if (user.locate === "") {
    displayMessage("error", "Location cannot be blank");
  } else if (user.email === "") {
    displayMessage("error", "Email cannot be blank");
  }else {
    displayMessage("success", "Registered successfully");

    // set new submission
    localStorage.setItem("user", JSON.stringify(user));
    
    // get most recent submission
    function insertText(){
    var lastUser = JSON.parse(localStorage.getItem("user"));
    userName.textContent = lastUser.name;
    inputRoute.textContent ="Routes Competed: " + lastUser.route;
    currentLocation.textContent = "Location: " + lastUser.locate;
    currentEmail.textContent = "Email Address: " + lastUser.email;
    }
    insertText();
  }
});
// generate save info to profile page // 
function insertText(){
    var lastUser = JSON.parse(localStorage.getItem("user"));
    userName.textContent = lastUser.name;
    inputRoute.textContent ="Routes Competed: " + lastUser.route;
    currentLocation.textContent = "Location: " + lastUser.locate;
    currentEmail.textContent = "Email Address: " + lastUser.email;
    }
    insertText();