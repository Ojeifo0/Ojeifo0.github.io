

//This will output when a button is pressed
function theRest(){
  var x = document.getElementById("output0");
  if (x.innerHTML === "Output Zero Here") {
    x.innerHTML = "Output One Here";
  } 
  else if(x.innerHTML === "Output One Here"){
    x.innerHTML = "Ouput Two Here";
  }
  else {
    x.innerHTML = "Output Three Here";
  }

}