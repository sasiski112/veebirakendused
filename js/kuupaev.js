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

    const konsultatsioon = new Date(2026, 10, 2);

    const vahe = konsultatsioon.getTime() - now.getTime();

    const konspaev = vahe/(1000*60*60*24);

    function konnad() {
        let vastus2 = document.getElementById("vastus2");
        console.log("Konsultatsiooni nädalani " + konspaev.toFixed(0) + "päeva");
        vastus2.innerHTML = "Konsultatsiooni nädalani " + konspaev.toFixed(0) + "päeva";
    }

const sunnipaev = new Date(aasta + 1, 4, 1);

const vahe2 = sunnipaev.getTime() - now.getTime();

const sun = vahe2/(1000*60*60*24);

function sunnipa() {
    let vastus2 = document.getElementById("vastus3");
    console.log("Sünnipäevani " + sun.toFixed(0) + "päeva");
    vastus2.innerHTML = "Sünnipäevani " + sun.toFixed(0) + "päeva";
}