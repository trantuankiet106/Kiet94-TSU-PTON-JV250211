let sloGan1 = "wellcome to Rikkei Academy.";
let sloGan2 = "Quyết tâm học lập trình javascript";
let sloGan3 = "Chào mừng bạn đến với học viện Rikkei Academy";
let sloGan4 = "Bạn đã đủ 18 tuổi chưa!";

console.log(sloGan1);
document.write(sloGan2);
alert(sloGan3);

if (confirm(sloGan4) == true) {
    text = "Bạn đã đủ tuổi, mời bạn tiếp tục";
} else {text = "Bạn chưa đủ tuổi, xin lỗi.";}
alert(text)