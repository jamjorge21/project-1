// generate drop down from links on prospect page //
function myFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
}
// Drop down menu for driving trails //
function showDrive() {
    var driveDiv = document.getElementById("drive");
    var hikeDiv = document.getElementById("hike");
    var driveButton = document.getElementById("driveButton");
    var hikeButton = document.getElementById("hikeButton");

    driveDiv.style.display = 'block';
    driveButton.style.textDecoration = 'underline';
    driveButton.style.textDecorationColor = "#ffffff";
    driveButton.style.textDecorationStyle = "double";
    hikeDiv.style.display = 'none';
    hikeButton.style.textDecoration = 'none';
}
// drop down menu for hiking trails //
function showHike() {
    var driveDiv = document.getElementById("drive");
    var hikeDiv = document.getElementById("hike");
    var driveButton = document.getElementById("driveButton");
    var hikeButton = document.getElementById("hikeButton");
// style of drop down menu // 
    hikeDiv.style.display = 'block';
    hikeButton.style.textDecoration = 'underline';
    hikeButton.style.textDecorationColor = "#ffffff";
    hikeButton.style.textDecorationStyle = "double";
    driveDiv.style.display = 'none';
    driveButton.style.textDecoration = 'none';
}