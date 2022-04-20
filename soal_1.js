// Nomor 1
function factorial(num){
    // Jika yang diinput 0 atau 1
    if(num === 0 || num === 1) return 1;

    // dibuat rekursif sampai num nya 1
    return num * factorial(num - 1);
}


console.log("\nTest Soal 1")
console.log(factorial(0))
console.log(factorial(1))
console.log(factorial(4))
console.log(factorial(8))