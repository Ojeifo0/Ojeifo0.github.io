  function calc(calculation) {
    var box1 = Number(document.getElementById('box1').value);
    
    var box2 = Number(document.getElementById('box2').value);
    
    var output;

    if (calculation === '+') {
      output = box1 + box2;
    } 
    else if (calculation === '-') {
      output = box1 - box2;
    } 
    else if (calculation === '*') {
      output = box1 * box2;
    } 
    else if (calculation === '/') {
      output = box1 / box2;
    } 
    else {
      output = 'NaN';
    }
  
    document.getElementById('output').innerHTML = output;
    
  }