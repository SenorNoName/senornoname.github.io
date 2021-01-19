var img;

function dispImg(src, int) {
  img = document.createElement("img");
  img.src = src;
  img.classList.add("gallery_img");
  img.classList.add("zoom");

  var figure = document.createElement("figure");
  figure.id = "item" + int;
  figure.classList.add("gallery_item");

  document.getElementById("gal").appendChild(figure);
  document.getElementById("item" + int).appendChild(img);
}

/*for (i = 1; i < 107; i++) {
  dispImg("images/floppa" + i + ".jpg", i);
}*/

var i = 1;
while (i < 107) {
  dispImg("images/floppa" + i + ".jpg", i);
  img.onload = function() {
    i++;
  }
}
