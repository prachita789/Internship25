// index.js (add navbar functionality)
document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.navigation-menu');

    hamburger.addEventListener('click', (e) => {
        e.stopPropagation();
        hamburger.classList.toggle('active');
        navLinks.classList.toggle('active');
    });

    // Close menu when clicking outside on mobile
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.nav-container') && window.innerWidth <= 768) {
            hamburger.classList.remove('active');
            navLinks.classList.remove('active');
        }
    });
});


//change the button color on click
function colorChangeButton() {
    let button = document.querySelector(".color-btn");
    let colors = ["rgb(255, 94, 0)", "rgb(255, 105, 180)", "rgb(40, 167, 69)", "rgb(255, 193, 7)", "rgb(111, 66, 193)"]; 
   

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

    let breakfastValue = document.getElementById("breakfast").value;
    let lunchValue = document.getElementById("lunch").value;
    let dinnerValue = document.getElementById("dinner").value;
    let snacksValue = document.getElementById("snacks").value;

    if(breakfastValue === "" && lunchValue === "" && dinnerValue === "" && snacksValue === ""){
        alert("Please enter at least one meal or snack!");
        return;
    }
    breakfastValue = breakfastValue === "" ? 0 : Number(breakfastValue);
    lunchValue = lunchValue === "" ? 0 : Number(lunchValue);
    dinnerValue = dinnerValue === "" ? 0 : Number(dinnerValue);
    snacksValue = snacksValue === "" ? 0 : Number(snacksValue);

    if(breakfastValue < 0 || lunchValue < 0 || dinnerValue < 0 || snacksValue < 0)
   {
    alert("Please enter valid non-negative numbers for calories.");
    return;
   }

   const totalCalories = breakfastValue + lunchValue + dinnerValue + snacksValue;

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
