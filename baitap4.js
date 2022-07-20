
// Input:

document.getElementById('btnTinhToan').onclick = function() {
    
    var chieuDai = document.getElementById("chieuDai").value; 
    var chieuRong = document.getElementById("chieuRong").value; 

// Process 
    var sumHcn = Number(chieuDai) + Number(chieuRong);
    var totalD = sumHcn *2;
    var totalE = Number(chieuDai) * Number(chieuRong);
  
// Output 
document.getElementById('totalD').innerHTML = totalD;
document.getElementById('totalE').innerHTML = totalE;
}