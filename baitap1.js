// Input:

document.getElementById('btnTinhLuong').onclick = function() {
    
    var LuongMotNgay = document.getElementById("LuongMotNgay").value; 
    var SoNgayLam = document.getElementById("SoNgayLam").value; 

// Process 
    var totalA = LuongMotNgay * SoNgayLam;
    
// Output 
    document.getElementById('totalA').innerHTML = totalA.toLocaleString();
}