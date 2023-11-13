var start = new Date();
 

function stopTime(){
 var stop = new Date();
var segg = (stop.getTime() - start.getTime())/600;
alert("You have been on the page for: " + segg  + "seconds");
}


