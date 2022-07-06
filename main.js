var d = new Date();
var img = document.createElement("img");
var text = document.getElementById("time");

switch (d.getMonth()) {
  case 0:
    img.src = "images/flop_jan_2021.jpg";
    text.textContent += "January " + (d.getYear()+1900);
    break;
  case 1:
    img.src = "images/flop_feb_2021.png";
    text.textContent += "February " + (d.getYear()+1900);
    break;
  case 2:
    img.src = "images/flop_mar_2021.jpg";
    text.textContent += "March " + (d.getYear()+1900);
    break;
  case 3:
    img.src = "images/flop_apr_2021.jpg";
    text.textContent += "April " + (d.getYear()+1900);
    break;
  case 4:
    img.src = "images/flop_may_2021.png";
    text.textContent += "May " + (d.getYear()+1900);
    break;
  case 5:
    img.src = "images/flop_jun_2021.png";
    text.textContent += "June " + (d.getYear()+1900);
    break;
  case 6:
    img.src = "images/flop_jul_2021.png";
    text.textContent += "July " + (d.getYear()+1900);
    break;
  case 7:
    img.src = "images/flop_aug_2021.png";
    text.textContent += "August " + (d.getYear()+1900);
    break;
  case 8:
    img.src = "images/flop_sep_2021.png";
    text.textContent += "September " + (d.getYear()+1900);
    break;
  case 9:
    img.src = "images/flop_oct_2021.png";
    text.textContent += "October " + (d.getYear()+1900);
    break;
  case 10:
    img.src = "images/flop_nov_2021.png";
    text.textContent += "November " + (d.getYear()+1900);
    break;
  case 11:
    img.src = "images/flop_dec_2021.png";
    text.textContent += "December " + (d.getYear()+1900);
    break;
}

img.classList.add("flop_month_img")
img.width = 350;
img.height = 350;
document.getElementById("month").appendChild(img);

var facts = ["Caracals can jump more than 10 feet in the air!",
"Caracals can be found in the wild in Africa, India, and the Middle East.", 
"The average caracal weighs about 20-40 pounds.", 
"Male caracals are typically much larger than females.", 
"Caracals are also known as the Persian lynx.", 
"Caracals are also known as the gazelle cat.", 
"Caracals stand out from other wild cats due to the long tufts of black hair on their ears.", 
"The function of their ear tufts is unknown.", 
"Caracal ear tufts may be used to keep bugs and the sun out of their eyes.", 
"Caracal ear tufts may be used to communicate with other caracals.", 
"Caracal fur coats can be solid black, which is very rare.", 
"Caracals have long, sturdy legs that let them spring into the air and capture birds.", 
"Caracal hind legs are stronger than the front legs.", 
"Caracals can use their tails as a rudder when they're in the air.", 
"Caracals eat birds, rodents, rabbits, reptiles, and large bugs.", 
"Caracals can take on prey larger than themselves.", 
"Caracals are nocturnal.", 
"Caracals' agility makes them great hunters", 
"Caracals are highly territorial and will mark their territories with claw marks.", 
"Caracals keep track of other caracals in the area by their scent.", 
"After caracals mate, the female will drive the male away.", 
"Caracals usually give birth to 2-4 kittens.", 
"When caracals are born, their eyes and ears closed.", 
"Newborn caracals need 3 weeks for their ears to uncurl.", 
"The caracal was an important part of ancient Egyptian and Chinese culture.", 
"In ancient times, caracals were tamed and given as gifts to the noble.", 
"In ancient times, caracals were used for pidgeon catching competitions.", 
"Caracals can be owned as pets in some places.", 
"The name caracal means black ear."];

var fact = document.getElementById("fact");
var rand = Math.random() * (facts.length);
fact.textContent += facts[Math.floor(rand)];