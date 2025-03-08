let firstNumber = prompt("Nhập số thứ 1:");
let secondNumber = prompt("Nhập số thứ 2:");
let quotient = Number(firstNumber)/Number(secondNumber);
let mod = Number(firstNumber)%Number(secondNumber);



alert ("Ta có số thứ 1 là: "+firstNumber);
alert ("Ta có số thứ 2 là: "+secondNumber);
alert ("Ta được kết quả là: " + Math.floor(quotient) + " và dư " + mod);