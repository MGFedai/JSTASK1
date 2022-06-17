let isim = prompt("lütfen isminizi giriniz")
let isimshown= document.querySelector("#isim")
isimshown.innerHTML=(isim)
console.log(isim)

function showTime() {
    let myclock = document.querySelector('#date');
    let dte = new Date();
    let saat = dte.getHours();
    let dakika = dte.getMinutes();
    let gun = dte.getDay();
    let saniye = dte.getSeconds();

    if(gun==0){
        gun = "PAZAR";
    }else if(gun==1){
        gun = "P.TESİ";
    }else if(gun==2){
        gun = "SALI";
    }else if(gun==3){
        gun = "ÇARŞAMBA";
    }else if(gun==4){
        gun = "PERŞEMBE";
    }else if(gun==5){
        gun = "CUMA";
    }else if(gun==6){
        gun = "C.TESİ";
    }else if(gun==7){
        gun = "PAZAR";}

    setTimeout(showTime, 1000);
    myclock.innerHTML = `${saat}:${dakika}:${saniye} ${gun} ` // Saati dakikayı ve günü yazdırdığım yer

}
showTime();
// let myClock = document.querySelector("#date")
// date.innerHTML = `${ dt.getHours()}:${dt.getMinutes()}:${dt.getSeconds()}  `

// const d = new Date().toLocaleTimeString();

// console.log(d)

// const date = new date();
// let time = d.getTime();
// let showndate= document.querySelector("#date")
// showndate.innerHTML=(time)