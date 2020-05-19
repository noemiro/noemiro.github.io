//piece of code that does one or more actions
//do not repeat yourself DRY

var textOverImages = document.getElementsByClassName("onClickTextOverImage");
var previousTextOverImage;
for (var i = 0; i < textOverImages.length; i++) {
  textOverImages[i].onclick = function() {
    var classes = this.classList;
    if (classes.contains("show")) {
      classes.remove("show");
    } else {
      if (previousTextOverImage != null)
        previousTextOverImage.classList.remove("show");
      previousTextOverImage = this;
      classes.add("show");
    }
  }
}

function stopPropagation(event){
  event.stopPropagation();
}

//search bar//
var searchbar = document.querySelector("#search");
function slide(){
    
    if(searchbar.classList.contains("hide")){
        searchbar.classList.remove("hide");
    }else{
         searchbar.classList.add("hide");
    }
}