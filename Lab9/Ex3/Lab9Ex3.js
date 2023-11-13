function addNum() {
    
    var num1 = Number(document.getElementById('num1').value);

    var num2 = Number(document.getElementById('num2').value);

    var total = num1 + num2;

    document.getElementById('Output').textContent = total;
}