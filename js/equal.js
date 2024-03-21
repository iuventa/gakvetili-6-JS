let equal = () => {
    let gamosaxuleba = document.getElementById("gamosaxuleba").innerHTML;
    console.log(gamosaxuleba);

    let number2 = parseFloat(document.getElementById("answer").innerHTML);
    console.log(number2);

    let number1 = parseFloat(gamosaxuleba.slice(0, gamosaxuleba.length-1));
    console.log(number1);

    let operatori = gamosaxuleba.slice(gamosaxuleba.length-1, gamosaxuleba.length);
    console.log(operatori);

    let pasuxi;

    switch(operatori){
        case "+":
            pasuxi = number1 + number2;
        break;
        case "-":
            pasuxi = number1 - number2;
        break;
        case "/":
            pasuxi = number1 / number2;
        break;
        case "*":
            pasuxi = number1 * number2;
        break;
        case "%":
            pasuxi = (number1 * number2)/100;
        break;
        
    }
    document.getElementById("answer").innerHTML = pasuxi;

}

