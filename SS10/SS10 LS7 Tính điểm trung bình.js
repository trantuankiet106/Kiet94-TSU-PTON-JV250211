let math = prompt("Nhập điểm môn Toán: ")
let physics = prompt("Nhập điểm môn Vật lý: ")
let chemistry = prompt("Nhập điểm môn Hóa học: ")
let average = ((Number(math) + Number(physics) + Number(chemistry))/3);

alert ("Điểm trung bình của bạn là: " + average.toFixed(2));