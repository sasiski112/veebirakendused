function joon() {
    //joon - линия
    const canvas = document.querySelector('#canvas');
    if (canvas.getContext) {
        let tx = canvas.getContext('2d'); //2 tasand
        tx.beginPath();
        tx.strokeStyle = "green";
        tx.lineWidth = 3;
        tx.moveTo(120, 120); //algus
        tx.lineTo(450, 410); //lõpp
        tx.stroke();
    }
}
function puhasta() {
    const canvas = document.querySelector('#canvas');
    if(canvas.getContext) {
        let tx = canvas.getContext('2d');
        tx.clearRect(0,0,500,500);
    }
}
    function kolmnurk() {
        const canvas = document.querySelector('#canvas');
        if (canvas.getContext) {
            let tx = canvas.getContext('2d'); //2 tasand
            tx.beginPath();
            tx.strokeStyle = "green";
            tx.fillStyle = "yellow";
            tx.lineWidth = 3;
            tx.moveTo(120, 120); //algus
            tx.lineTo(450, 410); //lõpp
            tx.lineTo(50, 410);
            tx.lineTo(120, 120);
            tx.stroke();
            tx.fill();
        }
    }
        function ristkulik() {
            const canvas = document.querySelector('#canvas');
            const l=document.getElementById('laius');
            const k=document.getElementById('korgus');
            if(canvas.getContext) {
                let tx = canvas.getContext('2d');
                tx.beginPath();
                tx.strokeStyle = "black";
                tx.fillStyle = "pink";
                tx.fillRect(45,50,l.value,k.value);
                tx.stroke();
                tx.fill();
            }
    }
    function ring() {
    const canvas = document.querySelector('#canvas');
    const r=document.getElementById('raadius');
    if(canvas.getContext) {
        let tx = canvas.getContext('2d');
        tx.beginPath();
        tx.strokeStyle = "black";
        tx.fillStyle = "red";
        tx.arc(390,120,r.value,0, 2*Math.PI,true);
        tx.fill();
        tx.stroke();
    }
    }
    function pilt() {
    const canvas = document.getElementById('canvas');
    if(canvas.getContext) {
        let tx = canvas.getContext('2d');
        const fail=new Image();
        fail.src="https://picsum.photos/200/300";
        fail.onload=()=>{
            tx.drawImage(fail, 280, 280, 200, 200);
        }
    }
    }
    function rat1(){
    const canvas = document.getElementById('canvas');
    if(canvas.getContext) {
        let tx = canvas.getContext('2d');
        tx.beginPath();
        tx.strokeStyle = "grey";
        tx.stroke.width = 2;
        tx.fillStyle = "black";
        tx.arc(150,300,30,0, 2*Math.PI,true);
        tx.fill();
        tx.stroke();
        ratins1()
    }
}
    function ratins1(){
    const canvas = document.getElementById('canvas');
    if(canvas.getContext) {
        let tx = canvas.getContext('2d');
        tx.beginPath();
        tx.strokeStyle = "black";
        tx.fillStyle = "grey";
        tx.arc(150,300,18,0, 2*Math.PI,true);
        tx.fill();
        tx.stroke();
    }
    }
function rat2(){
    const canvas = document.getElementById('canvas');
    if(canvas.getContext) {
        let tx = canvas.getContext('2d');
        tx.beginPath();
        tx.strokeStyle = "grey";
        tx.fillStyle = "black";
        tx.arc(350,300,30,0, 2*Math.PI,true);
        tx.fill();
        tx.stroke();
        ratins2()
    }
}
function ratins2(){
    const canvas = document.getElementById('canvas');
    if(canvas.getContext) {
        let tx = canvas.getContext('2d');
        tx.beginPath();
        tx.strokeStyle = "black";
        tx.fillStyle = "grey";
        tx.arc(350,300,18,0, 2*Math.PI,true);
        tx.fill();
        tx.stroke();
    }
}
function kere(){
    const canvas = document.getElementById('canvas');
    if(canvas.getContext) {
        let tx = canvas.getContext('2d');
        tx.beginPath();
        tx.fillStyle = "red";
        tx.fillRect(100,210,300,80);
        tx.fill();
    }
}
function topkere(){
    const canvas = document.getElementById('canvas');
    if(canvas.getContext) {
        let tx = canvas.getContext('2d');
        tx.beginPath();
        tx.fillStyle = "red";
        tx.lineWidth = 3;
        tx.moveTo(140, 210);
        tx.lineTo(220, 150);
        tx.lineTo(350, 150);
        tx.lineTo(380, 210);
        tx.fill();
    }
}
function tuled(){
    const canvas = document.getElementById('canvas');
    if(canvas.getContext) {
        let tx = canvas.getContext('2d');
        tx.beginPath();
        tx.strokeStyle="yellow";
        tx.lineWidth = 3;
        tx.moveTo(20, 220)
        tx.lineTo(90, 230);
        tx.moveTo(15, 235)
        tx.lineTo(90, 240);
        tx.moveTo(15, 250)
        tx.lineTo(90, 248);
        tx.moveTo(20, 265)
        tx.lineTo(90, 257);
        tx.stroke();
    }
}
function details(){
    const canvas = document.getElementById('canvas');
    if(canvas.getContext) {
        let tx = canvas.getContext('2d');
        aken();
        fara();
    }
}
function fara(){
    const canvas = document.getElementById('canvas');
    if(canvas.getContext) {
        let tx = canvas.getContext('2d');
        tx.beginPath();
        tx.fillStyle = "yellow";
        tx.strokeStyle = "black";
        tx.lineWidth = 2;
        tx.fillRect(100,230,35,30);
        tx.stroke();
        tx.fill();
    }
}
function aken(){
    const canvas = document.getElementById('canvas');
    if(canvas.getContext) {
        let tx = canvas.getContext('2d');
        tx.beginPath();
        tx.fillStyle = "blue";
        tx.strokeStyle = "black";
        tx.moveTo(165, 210);
        tx.lineTo(230, 160);
        tx.lineTo(340, 160);
        tx.lineTo(365, 210);
        tx.fill();
    }
}
function auto(){
    const canvas = document.getElementById('canvas');
    if(canvas.getContext) {
        let tx = canvas.getContext('2d');
        tx.beginPath();
        kere()
        topkere()
        rat1()
        rat2()
        tuled()
        details()
    }
}