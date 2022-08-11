// hamburger menu
document.getElementById("burger").addEventListener("click",burger);
function burger(){
    var x = document.getElementById("nav");
    if (x.className === "nav"){
        x.className+= " responsive";
    }
    else{
        x.className = "nav";
    }
    var burger = document.getElementById("burger");
    if (burger.innerHTML === "v"){
        burger.innerHTML = "^";
    }
    else {
        burger.innerHTML = "v";
    }
}

// for page 2 sidebar selection
const list = document.getElementsByClassName("benefitList");
const desc = document.getElementsByClassName("page2ContentDesc");
for (let i = 0; i < list.length; i++)
{
    list[i].addEventListener("click", (e)=>{
        for (let j = 0; j < desc.length; j++)
        {
            if (i != j)
            {
                list[j].classList.remove("selected");
                list[j].classList += " notSelected";
                desc[j].style.display = "none";
            }
            else
            {
                
                list[j].classList.remove("notSelected");
                list[j].classList += " selected";
                desc[j].style.display = "grid";
            }
        }
    });
}

// Bed time calculator
var h = document.getElementById("hours");
var m = document.getElementById("mins");
var td = document.getElementById("tod");
document.getElementById("calculate").addEventListener("click", calc)
function calc(){
    let timeofday = td.value;
    let bedTimeH = h.value - 8;
    let bedTimeMin = m.value - 15;
    if (bedTimeMin < 0)
    {
        bedTimeH -= 1;
        bedTimeMin += 60;
    }
    if (bedTimeH <= 0)
    {
        bedTimeH += 12;
        if (timeofday == "AM")
        {
            timeofday = "PM";
        }
        else
        {
            timeofday = "AM";
        }
    }
    document.getElementsByClassName("result")[0].innerHTML = "Results: You should be going to bed at " + bedTimeH + ":" + bedTimeMin + " " + timeofday + ". This includes the 15 minutes that you will take to fall asleep.";
}
