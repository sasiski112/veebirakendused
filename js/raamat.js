let raamat = {
    pealkiri: "Kevade",
    autor: "Oskar Luts",
    aasta: 1912,

    kirjeldus() {
        return "Raamat on " + this.pealkiri + ", autor on " + this.autor + ", aasta on " + this.aasta;
    },

    muudaAastat(uus) {
        this.aasta = uus;
        return "Uus aasta on nüüd: " + this.aasta;
    }
};

function kuvaKirjeldus() {
    document.getElementById("vastus1").innerHTML = raamat.kirjeldus();
}

function muudaAastat() {
    raamat.aasta = raamat.aasta + 2;
    document.getElementById("vastus2").innerHTML = "Uus aasta on: " + raamat.aasta;
}

let raamatukogu = {
    raamatud: [
        { pealkiri: "1984", autor: "George Orwell", aasta: 1949 },
        { pealkiri: "Meie", autor: "Jevgeni Zamjatin", aasta: 1924 },
        { pealkiri: "Kotlovan", autor: "Andrei Platonov", aasta: 1930 }
    ],

    kuvaKaik() {
        let tekst = "";
        this.raamatud.forEach(r => {
            tekst += r.pealkiri + " (" + r.autor + ", " + r.aasta + ")<br>";
        });
        return tekst;
    },

    lisaRaamatSisene(p, a, aa) {
        this.raamatud.push({ pealkiri: p, autor: a, aasta: aa });
        return "Uus raamat lisatud: " + p;
    },

    naytaKokku() {
        return "Kokku raamatuid: " + this.raamatud.length;
    },

    alates2000() {
        let uued = this.raamatud.filter(r => r.aasta >= 2000);
        let tekst = "Uusi raamatuid alates 2000 on " + uued.length + ":<br>";
        uued.forEach(r => {
            tekst += "- " + r.pealkiri + "<br>";
        });
        return tekst;
    },

    otsiAutori(nimi) {
        let res = this.raamatud.filter(r => r.autor.toLowerCase().includes(nimi.toLowerCase()));
        if (res.length > 0) {
            let tekst = "Leitud raamatud:<br>";
            res.forEach(r => {
                tekst += "- " + r.pealkiri + " (" + r.autor + ")<br>";
            });
            return tekst;
        } else {
            return "Ei leitud midagi autori nimega: " + nimi;
        }
    }
};

function kuvaKaik() {
    document.getElementById("vastus3").innerHTML = raamatukogu.kuvaKaik();
}

function lisaRaamat() {
    let pealkiri = prompt("Sisesta raamatu pealkiri:");
    let autor = prompt("Sisesta raamatu autor:");
    let aasta = Number(prompt("Sisesta raamatu aasta:"));

    if (pealkiri && autor && aasta) {
        raamatukogu.lisaRaamatSisene(pealkiri, autor, aasta);
        document.getElementById("vastus4").innerHTML = "Uus raamat edukalt lisatud: " + pealkiri + " (" + autor + ", " + aasta + ")";
    } else {
        document.getElementById("vastus4").innerHTML = "Raamatu lisamine tühistati või mõni väli jäi tühjaks!";
    }
}

function naytaKokku() {
    document.getElementById("vastus5").innerHTML = raamatukogu.naytaKokku();
}

function alates2000() {
    document.getElementById("vastus6").innerHTML = raamatukogu.alates2000();
}

function otsiAutori() {
    let nimi = document.getElementById("autoriSisend").value;
    if (nimi !== "") {
        document.getElementById("vastus7").innerHTML = raamatukogu.otsiAutori(nimi);
    } else {
        document.getElementById("vastus7").innerHTML = "Sisesta enne nime otsimiseks!";
    }
}