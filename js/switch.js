function ragaca(){
    //1. vnaxot ra weria switch div-shi
    //2. magis mixedvit shecvalot css-is root-is cvladebis mnishvnelobebi

    let icon = document.getElementById("switch").innerHTML;

    console.log(icon);

    if(icon == '<i class="fa-solid fa-toggle-off" aria-hidden="true"></i>'){
        document.getElementById("switch").innerHTML = '<i class="fa-solid fa-toggle-on"></i>';
        document.documentElement.style.setProperty('--white', '#000000');
        document.documentElement.style.setProperty('--black', '#ffffff');
        document.documentElement.style.setProperty('--image', 'url(../img/black.jpg)');

    }
    else{
        document.getElementById("switch").innerHTML = '<i class="fa-solid fa-toggle-off"></i>';
        document.documentElement.style.setProperty('--white', '#ffffff');
        document.documentElement.style.setProperty('--black', '#000000');
        document.documentElement.style.setProperty('--image', 'url(../img/white.jpg)');
    }
    
}