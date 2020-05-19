//piece of code that does one or more actions
//do not repeat yourself DRY

var 
textOverImage=document.querySelectorAll(".onClickTextOverImage div");


for(var i=0;i<textOverImages.length;i++){
    textOverImages[i].onclick=function(){
        this.classList.toggle("show");

    }
}