// Nomor 4
function swapInteger(a,b){
    // Menggunakan destructuring assignment
    [a,b] = [b,a]
    return `a = ${a} dan b = ${b}`
}

console.log("\nTest Soal 4")
console.log(swapInteger(4,5))
console.log(swapInteger(7,2))