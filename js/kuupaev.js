const now = new Date();

const paev = now.getDate();
console.log("Tänane päev" + paev + "päev");

const kuu = now.getMonth() + 1;
console.log("Kuunumber on " + kuu);

const aasta = now.getFullYear();
console.log("Aasta: " + aasta);

const nadalapaev= now.getDay();
console.log("Nadalapaev number on: " + nadalapaev);

function tana(){
    let vastus = document.getElementById("vastus");
    vastus.innerHTML = "Täna on " + paev + "." + kuu + "." + aasta;
}

const tund  = now.getHours();
const munutid = now.getMinutes();
const secundid = now.getSeconds();

function praegu(){
    let vast = document.getElementById("vast");
    vast.innerHTML = "Praegu on " + tund + ":" + munutid + ":" + secundid;
}


function konnad() {
    const now = new Date();
    const konsultatsioon = new Date(2026, 10, 2); // 2. november
    const paevi = Math.ceil((konsultatsioon - now) / (1000 * 60 * 60 * 24));
    let vastus2 = document.getElementById("vastus_kons");

    if (paevi > 0) {
        vastus2.innerHTML = "Konsultatsiooni nädalani " + paevi + " päeva";
    } else {
        vastus2.innerHTML = "Konsultatsioonipäevad on juba alanud";
        console.log("Konsultatsioonipäevad on juba alanud");
    }
}

const sunnipaev = new Date(aasta + 1, 4, 1);
const vahe2 = sunnipaev.getTime() - now.getTime();
const sun = vahe2/(1000*60*60*24);

function sunnipa() {
    let vastus2 = document.getElementById("vastus3");
    console.log("Sünnipäevani " + sun.toFixed(0) + "päeva");
    vastus2.innerHTML = "Sünnipäevani " + sun.toFixed(0) + "päeva";
}
