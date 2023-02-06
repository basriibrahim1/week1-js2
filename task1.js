/* 
Tugas 1. Buat dan jelaskanlah 10 method bawaan JavaScript (Built-in Functions) beserta
contoh penggunaannya(kecuali : split, reverse, join, foreach, map)
*/


// -------------------------------------------------------------------------------------------------

//1. Length (adalah properti bawaan (built-in) dari JavaScript yang digunakan untuk menentukan panjang (jumlah elemen) suatu array atau string. Nilai properti length selalu bernilai positive integer dan dapat digunakan untuk membatasi iterasi pada suatu array atau string.)


const number = [1,2,3,4,5,"weg",true,null,0,false]

// console.log(number.length)


// -------------------------------------------------------------------------------------------------

//2. concat = concat() adalah method bawaan dari JavaScript yang digunakan untuk menggabungkan dua atau lebih string menjadi satu string baru. Method ini tidak memodifikasi string asal, melainkan mengembalikan string baru yang hasil gabungan string asal.

const num1 = [1, 2, 3];
const num2 = [4, 5, 6];
const num3 = [7, 8, 9];

const concatNumb = num1.concat(num2, num3);

// console.log(concatNumb);


// -------------------------------------------------------------------------------------------------


// 3. toLowerCase() adalah method bawaan dari JavaScript yang digunakan untuk membuat semua huruf menjadi kecil

const str = 'SAYA BELAJAR JAVASCRIPT'

const lowerCase = str.toLowerCase()

// console.log(lowerCase)


// -------------------------------------------------------------------------------------------------

//4. toUpperCase() adalah method bawaan dari JavaScript yang digunakan untuk membuat semua huruf menjadi besar

const upperCase = lowerCase.toUpperCase()

// console.log(upperCase)


// -------------------------------------------------------------------------------------------------

// 5. Filter() merupakan method array di JavaScript yang berfungsi untuk mencari semua elemen di dalam array yang sesuai dengan kriteria tertentu.

const name = ["taylor", "angela", "zilong", "rusman"]

const filteringName = (arr, index, query) => {
    return arr.filter((element) => element.toLowerCase().includes(query.toLowerCase()))
    // return arr.filter((elements, i) => i === index)
}

// console.log(filteringName(name, 2, "tay"))

// -------------------------------------------------------------------------------------------------


// 6. pop() merupakan method array di JavaScript yang berfungsi untuk menghapus elemen terakhir dari array.

const popping = name.pop()

// console.log(name)


// -------------------------------------------------------------------------------------------------


// 7. includes() adalah method javascript yang digunakan untuk mencari apakah suatu substring berada dalam suatu string. Return value dari method ini adalah true atau false


const searchName = name.includes("taylor")

// console.log(searchName)


// -------------------------------------------------------------------------------------------------


// 8. find() find digunakan untuk mempermudah kita mencari sebuah data dalam suatu array. Method find berbeda dengan filter. Fungsi filter akan melakukan penyaringan terhadap array dan mengembalikan nilai berupa list of data (array). Sedangkan find, hanya akan mencari 1 data saja sesuai dengan kriteria yang diberikan


const weapons = [
    {weapon : "staff", damage : 20},
    {weapon : "dagger", damage : 15},
    {weapon : "1h sword", damage : 18},
    {weapon : "bow", damage : 25}
]

const findWeapon = weapons.find(({weapon}) => weapon === "staff")

// console.log(findWeapon)


// -------------------------------------------------------------------------------------------------


// 9. push() adalah menambahkan sebuah item baru di akhir sebuah array dan mengembalikan panjang array yang baru.


weapons.push({weapon: "shield", damage : 5})

// console.log(weapons)



// -------------------------------------------------------------------------------------------------


// 10. reduce() merupakan method array di JavaScript yang mengeksekusi fungsi callback pada setiap elemen array, nilai hasil kalkulasi pada elemen sebelumnya digunakan untuk melakukan kalkulasi pada elemen berikutnya.


const highestWeaponDamage = weapons.reduce((previousValue, currentValue) => {
    return previousValue.damage > currentValue.damage ? previousValue : currentValue
},{damage : 0})

// console.log(highestWeaponDamage.weapon, highestWeaponDamage.damage)


