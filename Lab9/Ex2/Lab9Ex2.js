var agee = prompt("What is your age?")

var age = Number(agee);

var cyear = new Date();

var year = cyear.getFullYear();

var byear = year - age;

prompt("You were born in " + byear);