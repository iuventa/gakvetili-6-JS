let plsmns = () => {
    let a = document.getElementById("answer").innerHTML;

    console.log(a);

    if(a > 0){
        let minus = "-";
        minus += a;
        document.getElementById("answer").innerHTML = minus;
    }
    else if(a < 0){
        let number = document.getElementById("answer").innerHTML;
        // console.log(number.slice(0, 1));
        let plusnumber = number.slice(1, number.length)
        console.log(plusnumber);
        document.getElementById("answer").innerHTML = plusnumber;
    }
    else{
        console.log("ricxvi = 0");
    }
}
