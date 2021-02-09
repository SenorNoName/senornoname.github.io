var points = [0, 0, 0, 0, 0, 0, 0, 0];
var sum = 0;
var flag = true;

function appendPoints(num, pts) {
    for (i = 0; i < 4; i++) {
        document.getElementById("b" + num + i).style.backgroundColor = "#FFFFFF";
    }
    document.getElementById("b" + num + pts).style.backgroundColor = "#001bb4";
    points[num - 1] = pts;
}

function results() {
    if (flag) {
        sum = 0;
        for (i = 0; i < 8; i++) {
            sum += points[i];
        }

        var h1 = document.createElement("h1");
        var img = document.createElement("img");
        img.id = "end";
        img.height = 400;
        img.width = 400;
        var p1 = document.createElement("p1");
        if (sum == 0) {
            h1.innerHTML = "Actually Bingus";
            img.src = "images/actually_bingus.jpg";
            img.classList.add("end_pic");
            p1.innerHTML = "You are literally Bingus himself. How did you even score this low???";
        } else if (sum <= 6) {
            h1.innerHTML = "Flerpa (Bingus Fan)";
            img.src = "images/flerpa.jpg";
            img.classList.add("end_pic");
            p1.innerHTML = "You're a bingus supporter (yucky). How could you betray Big Floppa like this :(";
        } else if (sum <= 12) {
            h1.innerHTML = "Floppa Rookie";
            img.src = "images/floppa_rookie.jpg";
            img.classList.add("end_pic");
            p1.innerHTML = "I appreciate you for supporting Floppa, even if you're a bit new to this.";
        } else if (sum <= 18) {
            h1.innerHTML = "Floppa Enjoyer";
            img.src = "images/floppa_enjoyer.jpg";
            img.classList.add("end_pic");
            p1.innerHTML = "You're a respectable member of the Floppa community but you still have a ways to go.";
        } else if (sum < 24) {
            h1.innerHTML = "Floppa Jr.";
            img.src = "images/floppa_jr.jpg";
            img.classList.add("end_pic");
            p1.innerHTML = "You seem like a pretty dedicated person to Floppa culture. I'd probably give you Floppa Jr. on the bigfloppa.net discord.";
        } else if (sum == 24) {
            h1.innerHTML = "BIG FLOPPA HIMSELF";
            img.src = "images/big_floppa_himself.jpg";
            img.classList.add("end_pic");
            p1.innerHTML = "NO WAY!! You're actually Big Floppa himself. I see no differences between the two of you.";
        }
        document.getElementById("end").appendChild(h1);
        document.getElementById("end").appendChild(p1);
        document.getElementById("endpic").appendChild(img);

        window.scrollTo(0, document.body.scrollHeight);
        flag = false;
    }
 }