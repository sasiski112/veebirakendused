let raamat = {
    pealkiri: "Kevade",
    autor: "Oskar Luts",
    aasta: 1912,

    kirjeldus() {
        return `${this.pealkiri}, autor ${this.autor}, välja antud aastal ${this.aasta}.`;
    },

    muudaAastat(uusAasta) {
        this.aasta = uusAasta;
    }
};

let raamatukogu = {
    raamatud: [
        // George Orwell
        { pealkiri: "1984", autor: "George Orwell", aasta: 1949 },
        { pealkiri: "Loomade farm", autor: "George Orwell", aasta: 1945 },
        { pealkiri: "Birma päevad", autor: "George Orwell", aasta: 1934 },
        { pealkiri: "Hüvasti, Aspidistra", autor: "George Orwell", aasta: 1936 },

        // Jevgeni Zamjatin
        { pealkiri: "Meie", autor: "Jevgeni Zamjatin", aasta: 1924 },
        { pealkiri: "Saarlased", autor: "Jevgeni Zamjatin", aasta: 1918 },
        { pealkiri: "Koobas", autor: "Jevgeni Zamjatin", aasta: 1920 },
        { pealkiri: "Jumala piits", autor: "Jevgeni Zamjatin", aasta: 1917 },

        // Andrei Platonov
        { pealkiri: "Kotlovan", autor: "Andrei Platonov", aasta: 1930 },
        { pealkiri: "Tševengur", autor: "Andrei Platonov", aasta: 1929 },
        { pealkiri: "Noor meri", autor: "Andrei Platonov", aasta: 1934 },
        { pealkiri: "Džan", autor: "Andrei Platonov", aasta: 1935 },

        // Pärast 2000. aastat
        { pealkiri: "Puhastus", autor: "Sofi Oksanen", aasta: 2008 },
        { pealkiri: "Mees, kes teadis ussisõnu", autor: "Andrus Kivirähk", aasta: 2007 }
    ],

    kuvaRaamatud() {
        let tekst = "";
        this.raamatud.forEach(r => {
            tekst += `Pealkiri: ${r.pealkiri}, Autor: ${r.autor}, Aasta: ${r.aasta}<br>`;
        });
        return tekst;
    },

    lisaRaamat(p, a, aa) {
        this.raamatud.push({ pealkiri: p, autor: a, aasta: aa });
    },

    raamatuteArv() {
        return this.raamatud.length;
    },

    pärast2000() {
        let uued = this.raamatud.filter(r => r.aasta > 2000);
        let tekst = `Raamatuid pärast 2000. aastat (${uued.length}):<br>`;
        uued.forEach(r => {
            tekst += `- ${r.pealkiri} (${r.aasta})<br>`;
        });
        return tekst;
    },

    otsiAutoriJargi(autorNimi) {
        let tulemus = this.raamatud.filter(r => r.autor.toLowerCase().includes(autorNimi.toLowerCase()));
        if (tulemus.length > 0) {
            let tekst = "Leitud raamatud:<br>";
            tulemus.forEach(r => {
                tekst += `- ${r.pealkiri} (${r.autor}, ${r.aasta})<br>`;
            });
            return tekst;
        } else {
            return `Autori nimega "${autorNimi}" raamatuid ei leitud.`;
        }
    }
};

function kuvaKirjeldus() {
    document.getElementById("vastus1").innerHTML = raamat.kirjeldus();
}

function muudaAastat() {
    raamat.aasta = raamat.aasta + 2;
    document.getElementById("vastus2").innerHTML = "Uus aasta on: " + raamat.aasta;
}

function kuvaKaik() {
    document.getElementById("vastus_kaik").innerHTML = raamatukogu.kuvaRaamatud();
}

function lisaRaamat() {
    let pealkiri = prompt("Sisesta raamatu pealkiri:");
    let autor = prompt("Sisesta raamatu autor:");
    let aasta = Number(prompt("Sisesta raamatu aasta:"));

    if (pealkiri && autor && aasta) {
        raamatukogu.lisaRaamat(pealkiri, autor, aasta);
        document.getElementById("vastus4").innerHTML = `Uus raamat lisatud: ${pealkiri} (${autor}, ${aasta})`;
    } else {
        document.getElementById("vastus4").innerHTML = "Lisamine tühistati või andmed on puudulikud.";
    }
}

function naytaKokku() {
    document.getElementById("vastus5").innerHTML = "Raamatute koguarv: " + raamatukogu.raamatuteArv();
}

function alates2000() {
    document.getElementById("vastus6").innerHTML = raamatukogu.pärast2000();
}

function otsiAutori() {
    let nimi = document.getElementById("autoriSisend").value;
    if (nimi.trim() !== "") {
        document.getElementById("vastus7").innerHTML = raamatukogu.otsiAutoriJargi(nimi);
    } else {
        document.getElementById("vastus7").innerHTML = "Palun sisesta otsinguks autori nimi!";
    }
}