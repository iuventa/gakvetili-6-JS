let ac = () => {
    document.getElementById("answer").innerHTML = "";

    let buttons = document.querySelectorAll(".ricxvi");
    buttons.forEach(p => {
        console.log(p);
        p.setAttribute("onclick", "calc(this)");
    });
}