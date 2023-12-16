function greet() {
    alert("Welcome to Vaders Media, click Ok to proceed");
}

greet();
    
    function Msgpop() {
        
        var Input = prompt('What picture do you think should win the hairstyle competition? (choose between 1-4)');
        var userNum = parseInt(Input);
        
        if (isNaN(userNum) || userNum < 1 || userNum > 4) {
            alert('Must be between 1 and 4.');
        } else {
           
            alert("You have voted for picture " + userNum+ "." + "\n\n" + "Your vote has been registered!");
        }
    }
    

