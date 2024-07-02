var images = ["cat1.jpg","cat2.jpg","cat3.jpg","cat4.jpg","cat5.jpg","cat6.jpg","cat7.jpg","cat8.jpg"];
var prev = document.getElementById("prev");
var next = document.getElementById("next");
var pos = 0;
var image = document.getElementById("catimage");

prev.addEventListener("click", slideLeft);
next.addEventListener("click", slideRight);


function slideRight(){
  pos++;
  if(pos >= images.length){
    pos= 0;
    image.src=images[pos];
  }
  else{
    image.src=images[pos];
  }
}

function slideLeft(){
  pos--;
  if(pos < 0){
    pos= images.length-1;
    image.src=images[pos];
  }
  else{
    image.src=images[pos];
  }
}