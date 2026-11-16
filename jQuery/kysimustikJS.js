function naita(id, tekst) {
    document.getElementById(id).innerHTML = tekst;
}

// 1. checkbox
function naitaKeeled() {
    const kastid = document.getElementsByName("keel");
    const valitud = [];

    for (let i = 0; i < kastid.length; i++) {
        if (kastid[i].checked) {
            valitud.push(kastid[i].value);
        }
    }

    if (valitud.length > 0) {
        naita("vastus1", "Sinu valitud programmeerimiskeeled: " + valitud.join(", "));
    } else {
        naita("vastus1", "");
    }
}

// 2. textarea
function naitaArvamus() {
    const tekst = document.getElementById("arvamus").value;

    if (tekst !== "") {
        naita("vastus2", "Sinu arvamus: " + tekst);
    } else {
        naita("vastus2", "");
    }
}

// 3. number
function naitaTunnid() {
    const tunnid = document.getElementById("tunnid").value;

    if (tunnid !== "") {
        naita("vastus3", "Tegeled programmeerimisega " + tunnid + " tundi nädalas.");
    } else {
        naita("vastus3", "");
    }
}

// 4. radio
function naitaMeeldib(valik) {
    if (valik === "Jah") {
        naita("vastus4", 'Programmeerimine meeldib! <span class="smile">😊</span>');
    } else {
        naita("vastus4", 'Programmeerimine ei meeldi. <span class="smile">😢</span>');
    }
}

// 5. text
function naitaTooriistad() {
    const tekst = document.getElementById("tooriistad").value;

    if (tekst !== "") {
        naita("vastus5", "Sinu nimetatud tööriistad: " + tekst);
    } else {
        naita("vastus5", "");
    }
}

// 6. select
function naitaSoov() {
    const valik = document.getElementById("soov").value;

    if (valik !== "") {
        naita("vastus6", "Sinu valik: " + valik);
    } else {
        naita("vastus6", "");
    }
}

function saada() {
    const kastid = document.getElementsByName("keel");
    const valitud = [];

    for (let i = 0; i < kastid.length; i++) {
        if (kastid[i].checked) {
            valitud.push(kastid[i].value);
        }
    }

    let keeled = valitud.join(", ");
    let arvamus = $("#arvamus").val();
    let tunnid = $("#tunnid").val();
    let tooriistad = $("#tooriistad").val();
    let soov = $("#soov").val();

    let meeldib = "";
    const nupud = document.getElementsByName("meeldib");

    for (let i = 0; i < nupud.length; i++) {
        if (nupud[i].checked) {
            meeldib = nupud[i].value;
        }
    }

    if (keeled.length < 1 || arvamus.length < 1 ||
        tunnid.length < 1 || meeldib.length < 1 ||
        tooriistad.length < 1 || soov.length < 1) {
        $(".viga").show();
        $("#kokkuvote").hide();
    } else {
        $(".viga").hide();

        document.getElementById("kokkuvote").innerHTML =
            "<h2>Kokkuvõte</h2>" +
            "<p><strong>Tead keeli:</strong> " + keeled + "</p>" +
            "<p><strong>Arvamus õppimisest:</strong> " + arvamus + "</p>" +
            "<p><strong>Tunde nädalas:</strong> " + tunnid + "</p>" +
            "<p><strong>Kas meeldib programmeerida:</strong> " + meeldib + "</p>" +
            "<p><strong>Tööriistad:</strong> " + tooriistad + "</p>" +
            "<p><strong>Tahaksid õppida:</strong> " + soov + "</p>";

        $("#kokkuvote").show();
    }
}

function puhasta() {
    $(".viga").hide();
    document.getElementById("kysimustik").reset();

    for (let i = 1; i <= 6; i++) {
        document.getElementById("vastus" + i).innerHTML = "";
    }

    document.getElementById("kokkuvote").innerHTML = "";
}