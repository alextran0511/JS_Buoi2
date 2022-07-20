
// Input:

document.getElementById('btnTinhGiaTri').onclick = function() {
    
    var soHaiChuSo = document.getElementById("soHaiChuSo").value; 

// Process 
    var tagDonVi = soHaiChuSo % 10;
    var tagChuc = Math.floor(soHaiChuSo / 10);
    var totalF = tagDonVi + tagChuc;
    
// Output 
    document.getElementById('totalF').innerHTML = totalF.toLocaleString();
}