function ToggleBurger(){
    let burgToggle = document.getElementById("burger");
    if(burgBool.style.display === "block"){
        burgToggle.style.display = "none";
    }
    else{
        burgToggle.style.display = "block";
    }
}