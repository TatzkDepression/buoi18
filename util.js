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
/**
 *
 * @param {*} arr Dùng để nhận biết đó là số âm hay số dương
 * @returns
 */
function nhanBietSoAmDuong(arr) {
  if (arr === 0) {
    return 0; // không dương cũng không âm
  } else if (arr > 0) {
    return true; // dương
  } else {
    return false; //âm
  }
}
