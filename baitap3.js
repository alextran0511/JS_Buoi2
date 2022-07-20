
// Input:

document.getElementById('btnQuyDoi').onclick = function() {
    
    var giaUsd = document.getElementById("giaUsd").value; 
    var soTienUsd = document.getElementById("soTienUsd").value; 

// Process 
    var totalC = giaUsd * soTienUsd;
  
// Output 
document.getElementById('totalC').innerHTML = totalC.toLocaleString();
}