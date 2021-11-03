// 1- JavaScript ile istediğiniz kadar sayı parametre gönderebileceğiniz bir fonksiyon yazınız. Bu fonksiyona gönderdiğiniz her sayı için çıktı olarak asal olup olmadığını yazınız. (Araştırma konusu : şart blokları : if )

// Örnek kullanım : findPrime(2,5,8,21, 13) findPrime(3,5)

function checkPrime(n){ // asallıklarını kontrol eden fonksiyon
    if (n > 0) {
        for(let x = 2; x < n; x++) {
        if((n % x) == 0) return false;
        }
    }
    return true;
}    

function findPrime(...numbers){
    for(let i = 0; i < numbers.length; i++) {
        if (checkPrime(numbers[i])) {
            console.log(`${numbers[i]} sayısı bir asal sayıdır.`)
        } else {
            console.log(`${numbers[i]} sayısı bir asal sayı değildir.`)
        }
    }
}



// 2- Parametre olarak girilen iki sayının arkadaş sayılar olup olmadığını bulan programı yazınız. (Arkadaş sayılar için google)

function dividersSum(n){ // pozitif tam bölenleri bulup toplayan fonksiyon
    let sum = 0;
    if (n > 0) {
        for(let x = 1; x < n; x++) {
        if((n % x) == 0)  sum+=x;
        }
    }
    return sum
}

function amicableNumbers(x,y) {
    //dividersSum fonksiyonu kullanılmıştır.
    if(dividersSum(x) == y || dividersSum(y) == x) {
        console.log(`${x} ve ${y} sayıları arkadaş sayılardır.`)
    } else {
        console.log(`${x} ve ${y} sayıları arkadaş sayı değillerdir.`)
    }
}

// 3- 1000'e kadarki tüm mükemmel sayıları listeleyen programı yazınız.

let mukemmelSayilar = []
function mukemmelSayi() {
    //dividersSum fonksiyonu kullanılmıştır.
    for(let i = 1; i <= 1000; i++) {
        if(dividersSum(i) == i) mukemmelSayilar.push(i)
    }
    console.log(mukemmelSayilar)
}

// 4- 1000'e kadarki tüm asal sayıları listeleyen programı yazınız.

//Çözüm 1
let nonPrimeNums = [];
let allNums = [];
for(let i = 1; i <= 1000; i++){
    allNums.push(i)
    if (i > 0){
        for(let x = 2; x < i; x++){
            if((i % x) == 0) {
                nonPrimeNums.push(i)
                break;
          }
        }
    }
}

var primeNums = allNums.filter(x => nonPrimeNums.indexOf(x) === -1) 
// Oluşturulan iki arraylerden biri tüm sayıları(allNums),
// prime olmayan sayılardan(nonPrimeNums) filtreleyerek primeNums array'i elde ediliyor.
// console.log(primeNums)

//Çözüm 2

let primeNumbers = []
for(let i = 2; i <= 1000; i++) {
    if(checkPrime(i)) primeNumbers.push(i)
    //checkPrime fonksiyonu 1. soruda tanımlanmıştı.
}
//console.log(primeNumbers)
