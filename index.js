var arrSo = [];
document.querySelector("#themso").onclick = function (event) {
  event.preventDefault();
  var so = document.querySelector("#number").value * 1;
  arrSo.push(so);
  document.querySelector("form.form-group").reset(); //dùng để reset lại khi ấn "thêm số"
  document.querySelector("#result").innerHTML = `
  Các số vừa nhập: [${arrSo}]`;
};
// 1
document.querySelector("#tongSoDuong").onclick = function () {
  var tong = 0;
  for (var index = 0; index < arrSo.length; index++) {
    if (arrSo[index] > 0) {
      tong += arrSo[index];
    }
  }
  document.querySelector("#result1").innerHTML = `
    Tổng các số dương vừa nhập là: ${tong}`;
};
// 2
document.querySelector("#demSoDuong").onclick = function () {
  var dem = 0;
  for (var index = 0; index < arrSo.length; index++) {
    if (arrSo[index] > 0) {
      dem++;
    }
  }
  document.querySelector("#result2").innerHTML = `
  Các số dương trong dãy: ${dem}`;
};
// 3
document.querySelector("#soNhoNhat").onclick = function () {
  var soNhoNhat = arrSo[0];
  for (var index = 0; index < arrSo.length; index++) {
    if (arrSo[index] < soNhoNhat) {
      soNhoNhat = arrSo[index];
    }
  }
  document.querySelector("#result3").innerHTML = `
  Số nhỏ nhất là: ${soNhoNhat}`;
};
// 4
document.querySelector("#soDuongNhoNhat").onclick = function () {
  var soDuongNhoNhat = arrSo[0];
  for (var index = 0; index < arrSo.length; index++) {
    if (arrSo[index] < soDuongNhoNhat && arrSo[index] > 0) {
      soDuongNhoNhat = arrSo[index];
    }
  }
  document.querySelector("#result4").innerHTML = `
  Số dương nhỏ nhất: ${soDuongNhoNhat}`;
};
// 5
document.querySelector("#soChanCuoiCung").onclick = function () {
  // nếu không có số chẵn nào trong mảng, kết quả sẽ là -1
  var soChanCuoiCung = -1;
  for (var index = 0; index < arrSo.length; index++) {
    if (arrSo[0] % 2 == 0) {
      soChanCuoiCung = arrSo[index];
    }
  }
  if (soChanCuoiCung % 2 == 0) {
    document.querySelector("#result5").innerHTML = `
  Số chẵn cuối cùng: ${soChanCuoiCung}`;
  } else {
    document.querySelector("#result5").innerHTML = `
 ${soChanCuoiCung} không có`;
  }
};
// 6
document.querySelector("#doicho").onclick = function () {
  var vitriso1 = document.querySelector("#vitriso1").value * 1;
  var vitriso2 = document.querySelector("#vitriso2").value * 1;
  so1 = arrSo[vitriso1];

  arrSo[vitriso1] = arrSo[vitriso2];
  arrSo[vitriso2] = so1;

  document.querySelector("#result6").innerHTML = `
  Các số sau khi đổi: [${arrSo}]`;
};
