/**
 *
 * @param {*} arr input là 1 mảng các dãy số N và chạy vòng lặp for để tìm số nguyến tố đầu tiên
 * @returns trả về số nguyên tố đầu tiên nếu không có trả về -1
 */

function timSoNguyenTo(arr) {
  for (var index = 0; index < arr.length; index++) {
    var soNguyenTo = true;
    for (var index1 = 2; index1 < arr[index]; index1++) {
      if (arr[index] % index1 === 0) {
        soNguyenTo = false;
        break;
      }
    }
    if (soNguyenTo && arr[index] > 1) {
      return arr[index];
    }
  }
  return -1;
}
