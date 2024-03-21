let operator = (op) => {
    let oprt = op.innerHTML;

    let gamosaxuleba = document.getElementById("gamosaxuleba").innerHTML;

    let answer = document.getElementById("answer").innerHTML;
    console.log(gamosaxuleba);

    switch(oprt){
        case "÷":
            console.log("gayofa");
            document.getElementById("gamosaxuleba").innerHTML = answer;
            document.getElementById("gamosaxuleba").innerHTML += '/';
            document.getElementById("answer").innerHTML = "";
        break;
        case "×":
            console.log("gamravleba");
            document.getElementById("gamosaxuleba").innerHTML = answer;
            document.getElementById("gamosaxuleba").innerHTML += '*';
            document.getElementById("answer").innerHTML = "";
        break;
        case "−":
            console.log("minusi");
            document.getElementById("gamosaxuleba").innerHTML = answer;
            document.getElementById("gamosaxuleba").innerHTML += '-';
            document.getElementById("answer").innerHTML = "";
        break;
        case "+":
            console.log("pliusi");
            document.getElementById("gamosaxuleba").innerHTML = answer;
            document.getElementById("gamosaxuleba").innerHTML += '+';
            document.getElementById("answer").innerHTML = "";
        break;
        case "%":
            console.log("procenti");
            document.getElementById("gamosaxuleba").innerHTML = answer;
            document.getElementById("gamosaxuleba").innerHTML += '%';
            document.getElementById("answer").innerHTML = "";
        break;
        default:
            console.log("Aseti operatori ar arsebobs");
    }
}