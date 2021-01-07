var d = new Date();
var img = document.createElement("img");
var text = document.getElementById("time");

switch (d.getMonth()) {
  case 0:
    img.src = "images/flop_jan_2021.jpg";
    text.textContent += "January 2021";
    break;
  case 1:
    img.src = "images/flop_feb_2021.png";
    text.textContent += "February 2021"
    break;
  case 2:
    img.src = "images/flop_mar_2021.jpg";
    text.textContent += "March 2021"
    break;
  case 3:
    img.src = "images/flop_apr_2021.jpg";
    text.textContent += "April 2021"
    break;
  case 4:
    img.src = "images/flop_may_2021.png";
    text.textContent += "May 2021"
    break;
  case 5:
    img.src = "images/flop_jun_2021.png";
    text.textContent += "June 2021"
    break;
  case 6:
    img.src = "images/flop_jul_2021.png";
    text.textContent += "July 2021"
    break;
  case 7:
    img.src = "images/flop_aug_2021.png";
    text.textContent += "August 2021"
    break;
  case 8:
    img.src = "images/flop_sep_2021.png";
    text.textContent += "September 2021"
    break;
  case 9:
    img.src = "images/flop_oct_2021.png";
    text.textContent += "October 2021"
    break;
  case 10:
    img.src = "images/flop_nov_2021.png";
    text.textContent += "November 2021"
    break;
  case 11:
    img.src = "images/flop_dec_2021.png";
    text.textContent += "December 2021"
    break;
}

img.width = 600;
img.height = 600;
document.getElementById("month").appendChild(img);
