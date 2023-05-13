
function doi() {
    let a = document.getElementById('nhap').value;
    let b = document.getElementById('fcurrency').value;
    let c = document.getElementById('tcurrency').value;
    let kq = document.getElementById('kq');
    let n = parseFloat(a);
    let m = parseFloat(b);
    let p = parseFloat(c);
    let q = n / m*p;
    kq.innerText=q;
}