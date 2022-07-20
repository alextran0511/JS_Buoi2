// Input:

document.getElementById('btnTinhTb').onclick = function() {
    
    var soThucThuNhat = document.getElementById("soThucThuNhat").value; 
    var soThucThuHai = document.getElementById("soThucThuHai").value; 
    var soThucThuBa = document.getElementById("soThucThuBa").value; 
    var soThucThuTu = document.getElementById("soThucThuTu").value; 
    var soThucThuNam = document.getElementById("soThucThuNam").value; 

// Process 
    var sum = Number(soThucThuNhat) + Number(soThucThuHai) + Number(soThucThuBa) + Number(soThucThuTu) + Number(soThucThuNam);
    console.log(sum);
    
    var totalB = sum / 5;
  
// Output 
document.getElementById('totalB').innerHTML = totalB.toFixed();
}