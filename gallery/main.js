var index;
var flag = false;

function dispImg(src, int) {
  var img = document.createElement("img");
  img.src = src;
  img.classList.add("gallery_img");
  img.classList.add("zoom");
  img.id = "img" + int;

  var figure = document.createElement("figure");
  figure.id = "item" + int;
  figure.classList.add("gallery_item");

  document.getElementById("gal").appendChild(figure);
  document.getElementById("item" + int).appendChild(img);
}

for (i = 1; i < 17; i++) {
  dispImg("images/floppa" + i + ".jpg", i);
  index = 17;
}

function back() {
  if (flag == true) {
    for (i = 13; i < 17; i++) {
      var image = document.createElement("img");
      image.classList.add("gallery_img");
      image.classList.add("zoom");
      image.id = "img" + i;
      document.getElementById("item" + i).appendChild(image);
    }
    flag = false;
    index++;
  }
  if (index != 17) {
    index -= 32;
    for (i = 1; i < 17; i++) {
      var newImg = document.getElementById("img" + i);
      newImg.src = "images/floppa" + index + ".jpg";
      document.getElementById("item" + i).appendChild(newImg);
      index++;
    }
  }
}

function forward() {
  if (index <= 193) {
    if (index == 193) {
      for (i = 1; i < 13; i++) {
        var newImg = document.getElementById("img" + i);
        newImg.src = "images/floppa" + index + ".jpg";
        document.getElementById("item" + i).appendChild(newImg);
        index++;
      }
      for (i = 13; i < 17; i++) {
        document.getElementById("img" + i).remove();
      }
      flag = true;
      index = 208;
    } else {
      for (i = 1; i < 17; i++) {
        var newImg = document.getElementById("img" + i);
        newImg.src = "images/floppa" + index + ".jpg";
        document.getElementById("item" + i).appendChild(newImg);
        index++;
      }
    }
  }
}