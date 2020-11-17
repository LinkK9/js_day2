// I. Toán tử
//1. Viết một chương trình cho phép nhập 2 số, tính tổng 2 số đó
// let so1 = +prompt("Nhập vàp số thứ nhất:");
// let so2 = +prompt("Nhập vào số thứ 2:");
// alert(`Tổng của hai số là: ${so1 + so2} `);

// 2. Viết một chương trình cho phép nhập 2 số, in ra kết quả của tất cả các phép toán số học giữa 2 số đó!
// let num1 = +prompt("Nhập vào số đầu tiên");
// let num2 = +prompt("Nhập vào số thứ 2");
// alert(` Tổng của hai số đó là ${num1 + num2}`);
// alert(` Hiệu của số thứ nhất cho số thứ 2 là: ${num1 - num2}`);
// alert(` Tích hai số là ${num1 * num2}`);
// alert(` Tỷ số giữa số thứ nhất và số thứ 2 là: ${num1 / num2}`);

// 3. Viết chương trình cho phép nhập chiều dài và rộng của hình chữ nhật, tính ra chu vi của nó
// let cdai = +prompt("Nhập vào chiều dài của hình chữ nhật(m):");
// let crong = +prompt("Nhập vào chiều rộng của hình chữ nhật(m):");
// alert(`Chu vi của hình chữ nhật đó là: ${(cdai + crong) * 2}(m)`);

// 4. Viết chương trình cho phép nhập chiều dài và rộng của hình chữ nhật, tính ra diện tích của nó!
// let cdai = +prompt("Nhập vào chiều dài của hình chữ nhật(m):");
// let crong = +prompt("Nhập vào chiều rộng của hình chữ nhật(m):");
// alert(`Diện tích của hình chữ nhật đó là: ${cdai * crong}(m2)`);

// 5. Viết chương trình cho phép nhập vào bán kín hình tròn, in ra kết quả đường kính, chu vi và diện tích của nó
// let rbk= +prompt("Nhập vào bán kính của hình tròn(m):");
// alert(` Đường kính của hình tròn đó = ${rbk*2}(m)`);
// alert(` Chu vi của hình tròn = ${2*3.14*2*rbk}(m)`);
// alert(` Diện tích của hình tròn = ${3.14*rbk*rbk*0.25}(m2)`);

// 6. Viết chương trình cho phép nhập vào 1 số ở đơn vị Cm, chuyển đổi và in ra giá trị ở đơn vị m và km
// let num = +prompt("Nhập vào giá trị muốn chuyển đổi(cm):");
// alert(`${num}cm --> ${num/100}m`);
// alert(`${num}cm --> ${num/10000}km`);

// 7. Viết chương trình cho phép nhập nhiệt độ có dơn vị Celsius, in ra nhiệt độ Fahrenheit
// let temp = +prompt("Nhập vào nhiệt độ cần tính đổi(°C):");
// alert(`${temp}°C --> ${temp*1.8 + 32}°F`);

// II. Cấu trúc điều khiển
// 1. Viết chương trình cho phép nhập 2 số, tìm số lớn nhất trong hai số đó.
// let num1 = +prompt(" Nhập vào số thứ nhất:");
// let num2 = +prompt("Nhập vào số thứ hai:");
// if (num1 > num2) {
//   alert(` Số thứ nhất: ${num1} là số lớn hơn`);
// } else {
//   alert(` Số thứ hai: ${num2} là số lớn hơn`);
// }

// 2. Viết chương trình cho phép nhập 3 số, tìm số lớn nhất trong 3 số đó.
// let num1 = +prompt("Nhập vào số thứ nhất:");
// let num2 = +prompt("Nhập vào số thứ hai:");
// let num3 = +prompt("Nhập vào số thứ ba:");
// if (num1 > num2 && num1 > num3){
//     alert(` Số lớn hơn trong 3 số là số thứ nhất! số: ${num1}`);
// }else if (num2 > num1 && num2 > num3){
//     alert(` Số lớn hơn trong 3 số là số thứ hai! số: ${num2}`);
// }else if (num3 > num1 && num3 > num2){
//     alert(` Số lớn hơn trong 3 số là số thứ ba! số: ${num3}`);
// }else{
//     alert("Ba số bằng nhau ah???");
// }

// 3. Viết chương trình cho phép nhập 1 số, kiểm tra xem một số là số âm, dương, hay bằng 0.
// let num = +prompt("Nhập vào số muốn kiểm tra:");
// if (num > 0) {
//   alert(` Số ${num} là số dương!`);
// } else if (num < 0) {
//   alert(` Số ${num} là số âm`);
// } else if (num === 0) {
//   alert("Rõ ràng là số 0 mà!");
// } else {
//   alert("Bạn nhập vào không phải một số rồi! Nhấn F5 nhập lại đi! ");
// }

// 4. Viết chương trình cho phép nhập 1 số, kiểm tra số đó là chẵn hay lẻ.
// let num = Number(prompt("Nhập vào số muốn kiểm tra:"));
// if ( num %2 === 0) {
//     alert(` Số ${num} là số chẵn`);
// } else if (num % 2 !== 0) {
//   alert(` Số ${num} là số lẻ`);
// }

// 5. Viết chương trình cho phép nhập 1 năm, kiểm tra số đó là năm nhuận hay không?
// let year = +prompt("Nhập năm cần kiểm tra:");
// if (year % 4 === 0 && year % 100 !== 0){
//     alert(` Năm ${year} là năm nhuận`)
// }else{
//     alert(` Năm ${year} không phải là năm nhuận`);
// }

// 6. Viết chương trình cho phép nhập 1 ký tự, kiểm tra ký tự đó có thuộc bảng alphabet hay không?
// let char = prompt("Nhập vào ký tự cần kiểm tra!");
// if ( char < "A" || char > "z"){
//     alert(` Ký tự ${char} không thuộc bảng ký tự alphabet!`);
// }else{
//     alert(`Ký tự ${char} thuộc bảng ký tự alphabet!`);
// }

// 7. Viết chương trình cho phép nhập 1 ký tự, kiểm tra ký tự đó là nguyên âm hay phụ âm?
// let char = prompt("Nhập vào ký tự cần kiểm tra:");
// (char === "a" || char === "A" || char === "e" || char === "E" || char === "o" || char === "O" || char === "i" || char === "I" || char === "u" || char === "U" )?  alert(` Ký tự ${char} là một nguyên âm!`) : alert(` Ký tự ${char} là một phụ âm!`);

// 8. Viết chương trình cho phép nhập 1 ký tự, kiểm tra ký tự đó là chữ thường hay chữ viết hoa?
// let char = prompt("Nhập vào ký tự cần kiểm tra!");
// if ( char <= "z" && char >= "a"){
//     alert(` Ký tự ${char} là chữ thường!`);
// }else if(char <= "Z" && char >= "A"){
//     alert(`Ký tự ${char} là chữ in HOA!`);
// }else{
//     alert("Bạn nhập cái *** gì vậy? F5 NHẬP LẠI!");
// }

// 9. Viết chương trình cho phép nhập 1 số là ngày trong tuần, in ra thứ tương ứng.
// let num = prompt("Nhập 1 chữ số trong phạm vi từ 1 - 7:");
// switch (num) {
//   case "1":
//     alert(` Số 1 tương ứng với thứ Hai`);
//     break;
//   case "2":
//     alert(` Số 1 tương ứng với thứ Ba`);
//     break;
//   case "3":
//     alert(` Số 1 tương ứng với thứ Tư`);
//     break;
//   case "4":
//     alert(` Số 1 tương ứng với thứ Năm`);
//     break;
//   case "5":
//     alert(` Số 1 tương ứng với thứ Sáu`);
//     break;
//   case "6":
//     alert(` Số 1 tương ứng với thứ Bảy`);
//     break;
//   case "7":
//     alert(` Số 1 tương ứng với Chủ Nhật`);
//     break;
// }

// 10. Viết chương trình cho phép nhập 3 sô a b c, in ra nghiệm phương trình bậc 2 tương ứng.
// let a = +prompt("Phương trình có dạng ax^2 + bx^2 + C; Nhập vào số a:");
// let b = +prompt("Phương trình có dạng ax^2 + bx^2 + C; Nhập vào số b:");
// let c = +prompt("Phương trình có dạng ax^2 + bx^2 + C; Nhập vào số c:");
// const delta = b**2 - 4 * a * c ;
// if (delta < 0){
//     alert("Phương trình trên vô nghiệm")
// } else if (delta > 0) {
// alert(` Phương trình có 2 nghiệm: x1=${(-b + Math.sqrt(delta))/2/a} và x2=${(-b - Math.sqrt(delta))/2/a}`);
// }else {
//     alert(` Phương trình có nghiệm kép: x1 = x2 = ${-b/2/a}`);
// }

// 11. Viết chương trình đổi điểm từ hệ số 10 sang hệ chữ cho sinh viên, điểm nhập từ bàn phím
//     Điểm < 4   --> F
//     Điểm < 5.5 --> D
//     Điểm < 7.0 --> C
//     Điểm < 8.5 --> B
//     Điểm < 10  --> A
// let diem = +prompt("Nhập vào điểm hệ số 10:");
// if (diem < 10 && diem >= 8.5){
//     alert("Chúc mừng! Bạn được điểm A!");
// }else if (diem >=7 && diem < 8.5){
//     alert("Rất tốt! Bạn được điểm B!");
// }else if (diem >=5.5 && diem < 7){
//     alert("Bạn được điểm C!");
// }else if (diem >=4 && diem <5.5 ){
//     alert("Cần cố gắng hơn! Bạn được điểm D!");
// }else {
//     alert("Toang rồi! Bạn bị điểm F! Xin tiền học lại đi thôi!")
// }

// 12. Viết chương trình cho phép nhập lương cơ bản, tính tông lương của nhân viên theo công thức: Luong = lương cơ bản + HRA + DA
//     Nếu lương cơ bản  < 2.000.000 => HRA = 20% và DA = 80% lương cơ bản.
//     Nếu lương cơ bản  < 5.000.000 => HRA = 25% và DA = 90% lương cơ bản.
//     Nếu lương cơ bản  >= 5.000.000 => HRA = 30% và DA = 100% lương cơ bản.
// let lcb = +prompt("Nhập mức lương cơ bản của bạn:");
// if ( lcb < 2000000){
//     alert(` Lương thực tế của bạn là: ${2*lcb}$`);
// } else if (lcb >= 2000000 && lcb < 5000000 ){
//     alert(` Lương thực tế của bạn là: ${2.15 * lcb}$`);
// }else{
//     alert(` Lương thực tế của bạn là: ${2.3 * lcb}$`);
// }
