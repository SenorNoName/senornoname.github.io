var i = 1;

function dispImg(src, int, _callback) {
  var img = document.createElement("img");
  img.src = src;
  img.classList.add("gallery_img");
  img.classList.add("zoom");

  var figure = document.createElement("figure");
  figure.id = "item" + int;
  figure.classList.add("gallery_item");

  document.getElementById("gal").appendChild(figure);
  document.getElementById("item" + int).appendChild(img);
  img.onload = _callback();
}

while (i < 205) {
  dispImg("images/floppa" + i + ".jpg", i, function() {
    i++;
  });
}