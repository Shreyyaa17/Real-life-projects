var stats = document.querySelector("h5")

var add = document.querySelector("#Add")
var check = 0


add.addEventListener("click", function(){
    if(check == 0){
    stats.innerHTML= "Friends",
    stats.style.color= "Green"
    add.innerHTML= "Remove Friend"
    check = 1
}
else{
    stats.innerHTML= "Stranger",
    stats.style.color= "Red"
    add.innerHTML= "Add Friend"

    check = 0
}

});
