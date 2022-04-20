// Nomor 3
function printDigitValue(value){
    // pisahkan setiap karakter dari value
    let splitValue = value.split('');

    // buat array baru yang sudah difilter berupa angka saja
    let stringFiltered = splitValue.filter(e => !isNaN(e)).join("");

    // kemudian buat array baru untuk menyusun pattern dimana menampilkan awal angka beserta jumlah digit 0 nya
    let pattern = "";
    let arrFilteredAndDigit = splitValue.filter(e => !isNaN(e));
    for (i = 0; i < arrFilteredAndDigit.length; i++){ // baris
        for(k = 1; k < arrFilteredAndDigit.length - i; k++){ // kolom
            arrFilteredAndDigit[i] += 0
        }
        pattern += arrFilteredAndDigit[i]
        pattern += '\n'
    }
    return stringFiltered + "\n" + pattern;
}

console.log("\nTest Soal 3")
console.log(printDigitValue("9.86-A5.321"))
console.log(printDigitValue("7s9p4,23"))