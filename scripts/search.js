var searchbar = document.querySelector("#search");
function slide(){
    
    if(searchbar.classList.contains("hide")){
        searchbar.classList.remove("hide");
    }else{
         searchbar.classList.add("hide");
    }
}