//change the button color on click
function colorChangeButton() {
    let button = document.querySelector(".color-btn");
    let colors = ["rgba(255, 94, 0, 0.95)", "rgb(255, 105, 180)", "rgb(40, 167, 69)", "rgb(255, 193, 7)", "rgb(111, 66, 193)"]; 
   

    let currentColor = window.getComputedStyle(button).backgroundColor;
    let currentIndex = colors.indexOf(currentColor);
    let nextIndex = (currentIndex + 1) % colors.length;

    button.style.backgroundColor = colors[nextIndex];
}


// to display time-based greeting
function getAlert(){
    const currentTime = new Date();
    const currentHour = currentTime.getHours();
    let alertMessage;

    if(currentHour >= 5 && currentHour < 12){
        alertMessage = `🌞 Good Morning! Stay hydrated with HydroMax!`;
    }else if (currentHour >=12 && currentHour < 17){
        alertMessage = `☀️ Good Afternoon! Stay hydrated with HydroMax!`;
    } else if (currentHour >=17 && currentHour < 21){
        alertMessage = `🌆 Good Evening! Stay hydrated with HydroMax!`;
    } else {
        alertMessage = `🌙 Good Night! Stay hydrated with HydroMax!`;
    }
 
    let greeting = document.getElementById("greeting-message");
    greeting.innerHTML = alertMessage;

    greeting.style.opacity = "1";
    greeting.style.transform = "translateY(0)";

    setTimeout(() => {
        greeting.style.opacity = "0";
        greeting.style.transform = "translateY(-10px)";
    }, 5000);
}



window.onload = function() {
    setTimeout(getAlert, 3000);
};


//to calculate daily water intake based on weight
function hydroCalculator(){
    const wt = document.getElementById("weight").value;

    if(!wt || wt <= 0){
        alert("Please enter your weight!");
        return;
    }

    const dailyWaterIntake = wt * 0.03;
    document.getElementById("result").innerHTML = `You should drink <strong>${dailyWaterIntake.toFixed(1)} liters</strong> of water daily.`;
}

// function to count calorie intake
function calorieCalculator() {

    let breakfast = document.getElementById("breakfast");
    let lunch = document.getElementById("lunch");
    let dinner = document.getElementById("dinner");
    let snacks = document.getElementById("snacks");

    if(breakfast === "" && lunch === "" && dinner === "" && snacks === ""){
        alert("Please enter at least one meal or snack!");
        return;
    }
    breakfast = breakfast === "" ? 0 : Number(breakfast);
    lunch = lunch === "" ? 0 : Number(lunch);
    dinner = dinner === "" ? 0 : Number(dinner);
    snacks = snacks === "" ? 0 : Number(snacks);

    if(breakfast < 0 || lunch < 0 || dinner < 0 || snacks < 0)
   {
    alert("Please enter valid non-negative numbers for calories.");
    return;
   }

   const totalCalories = breakfast + lunch + dinner + snacks;

   document.getElementById("calorie-result").innerHTML = `Your total calorie intake today is <strong>${totalCalories} kcal</strong>.`;
}

//for switching tab
function switchTab(type){
    const sections = {
       hydration: document.getElementById("hydration-calculator"),
       calorie: document.getElementById("calorie-calculator")

    };

    const tabButton = document.querySelectorAll(".tab-btn");

    for(let key in sections){
        sections[key].style.display = "none";
    }

    tabButton.forEach(btn => btn.classList.remove("active"));

    sections[type].style.display = "block";
    document.querySelector(`.tab-btn[onclick="switchTab('${type}')"]`).classList.add("active");
} 

document.addEventListener("DOMContentLoaded", () => {
    switchTab("hydration");
});
