// If

const Nilai_Kuis = 30 ;

if (Nilai_Kuis < 60)
    console.log("Kurang.");

//If else

const umur = 17;
if (umur > 17) {
    console.log("Dewasa.");
} else {
    console.log("Anak Anak.");
}

//Program nested if

const Nilai = 85;

if (Nilai < 60) {
    console.log("Kurang.");
} else if (Nilai < 65) {
    console.log("cukup.");
} else if (Nilai < 75) {
    console.log("Baik.");
} else {
    console.log("Sangat Baik.");
}

//Swich Case

 const hp =  "Xiaomi"
 switch (hp){
    case "Xiaomi":
        console.log("Ini adalah Hp merk Xiaomi Grade c.");
        break;
    case "samsung":
        console.log("Ini Adalah Hp Samsung Grade B");
        break;
    case "iphone":
        console.log("Ini adalah Hp Iphone Grade A.");
        break;
    default:
        console.log("Jenis hp tidak diketahui.");
}

//For statement

for(let i = 0; i < 10; i++){
    document.write("Mobil ke-" + i)
}

//While

let Rangking = 0

while (Rangking<10) {
    Rangking ++
    console.log("Rangking ke-"+Rangking)
}

//Do While

let Rangking_Kelas = 0

do {
    Rangking_Kelas ++
    console.log(Rangking_Kelas)
} while (Rangking_Kelas < 5 );


//Fuction
/*Perkalian*/
function Kalikan(s, n) {
    return s * n;
}

// Memanggil fungsi 
const hasil = Kalikan(10, 13);
console.log("Hasil perkalian:", hasil);