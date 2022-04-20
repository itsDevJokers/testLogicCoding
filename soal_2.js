//  Nomor 2
function reverseString(str) {
    //  buat variabel string yang terbalik dengan nilai awal string kosong
    let reverseStr = "";
    // akses string yang paling akhir hingga awal
    for(i = str.length - 1; i >= 0; i--){
        // setiap elemen string dimasukkan ke dalam reverseStr
        reverseStr += str[i]
    }
    // hasil dari reverseStr dikembalikan
    return reverseStr;
}

console.log("\nTest Soal 2")
console.log(reverseString("abcde"));
console.log(reverseString("qwerty"));
