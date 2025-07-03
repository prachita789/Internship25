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


// // to display time-based greeting
// function getAlert() {
//     const currentTime = new Date();
//     const currentHour = currentTime.getHours();
//     let alertMessage;

//     if (currentHour >= 5 && currentHour < 12) {
//         alertMessage = `🌞 Good Morning! Stay hydrated with HydroMax!`;
//     } else if (currentHour >= 12 && currentHour < 17) {
//         alertMessage = `☀️ Good Afternoon! Stay hydrated with HydroMax!`;
//     } else if (currentHour >= 17 && currentHour < 21) {
//         alertMessage = `🌆 Good Evening! Stay hydrated with HydroMax!`;
//     } else {
//         alertMessage = `🌙 Good Night! Stay hydrated with HydroMax!`;
//     }

//     let greeting = document.getElementById("greeting-message");
//     greeting.innerHTML = alertMessage;

//     greeting.style.opacity = "1";
//     greeting.style.transform = "translateY(0)";

//     setTimeout(() => {
//         greeting.style.opacity = "0";
//         greeting.style.transform = "translateY(-10px)";
//     }, 5000);
// }



// window.onload = function () {
//     setTimeout(getAlert, 3000);
// };

// Show time-based greeting message
function getAlert() {
    const currentTime = new Date();
    const currentHour = currentTime.getHours();
    let alertMessage;

    if (currentHour >= 5 && currentHour < 12) {
        alertMessage = `🌞 Good Morning! Stay hydrated with HydroMax!`;
    } else if (currentHour >= 12 && currentHour < 17) {
        alertMessage = `☀️ Good Afternoon! Stay hydrated with HydroMax!`;
    } else if (currentHour >= 17 && currentHour < 21) {
        alertMessage = `🌆 Good Evening! Stay hydrated with HydroMax!`;
    } else {
        alertMessage = `🌙 Good Night! Stay hydrated with HydroMax!`;
    }

    const greeting = document.getElementById("greeting-message");

    // Set the message and make it visible
    greeting.innerHTML = alertMessage;
    greeting.style.display = "block";           // Important: make sure it's not hidden
    greeting.style.opacity = "1";
    greeting.style.transform = "translateY(0)";

    // Hide after 5 seconds
    setTimeout(() => {
        greeting.style.opacity = "0";
        greeting.style.transform = "translateY(-10px)";
    }, 5000);
}

// Trigger greeting on load
window.onload = function () {
    setTimeout(getAlert, 3000); // wait 3 seconds after load
};


//to calculate daily water intake based on weight
function hydroCalculator() {
    const wt = document.getElementById("weight").value;

    if (!wt || wt <= 0) {
        alert("Please enter your weight!");
        return;
    }

    const dailyWaterIntake = wt * 0.03;
    document.getElementById("result").innerHTML = `You should drink <strong>${dailyWaterIntake.toFixed(1)} liters</strong> of water daily.`;
}
// Function to count calorie intake and compare with recommendation
function calorieCalculator() {
  let breakfastValue = document.getElementById("breakfast").value;
  let lunchValue = document.getElementById("lunch").value;
  let dinnerValue = document.getElementById("dinner").value;
  let snacksValue = document.getElementById("snacks").value;

  // Validate if all are empty
  if (breakfastValue === "" && lunchValue === "" && dinnerValue === "" && snacksValue === "") {
    alert("Please enter at least one meal or snack!");
    return;
  }

  // Convert to numbers (or default to 0)
  breakfastValue = breakfastValue === "" ? 0 : Number(breakfastValue);
  lunchValue = lunchValue === "" ? 0 : Number(lunchValue);
  dinnerValue = dinnerValue === "" ? 0 : Number(dinnerValue);
  snacksValue = snacksValue === "" ? 0 : Number(snacksValue);

  // Check for negative numbers
  if (breakfastValue < 0 || lunchValue < 0 || dinnerValue < 0 || snacksValue < 0) {
    alert("Please enter valid non-negative numbers for calories.");
    return;
  }

  // Calculate total
  const totalCalories = breakfastValue + lunchValue + dinnerValue + snacksValue;

  // Display total
  document.getElementById("calorie-result").innerHTML = `Your total calorie intake today is <strong>${totalCalories} kcal</strong>.`;

  // Recommendation logic
  const recommendedCalories = 2200; // general average
  let advice = "";

  if (totalCalories < 1800) {
    advice = "You're consuming less than average. Consider eating a bit more.";
  } else if (totalCalories > 2500) {
    advice = "You're consuming more than average. Consider balancing your diet.";
  } else {
    advice = "You're within a healthy calorie range!";
  }

  // Display recommendation
  document.getElementById("recommended-output").innerText =
    `Recommended: ~${recommendedCalories} kcal/day\n${advice}`;
}

//for switching tab
function switchTab(type) {
    const sections = {
        hydration: document.getElementById("hydration-calculator"),
        calorie: document.getElementById("calorie-calculator")

    };

    const tabButton = document.querySelectorAll(".tab-btn");

    for (let key in sections) {
        sections[key].style.display = "none";
    }

    tabButton.forEach(btn => btn.classList.remove("active"));

    sections[type].style.display = "block";
    document.querySelector(`.tab-btn[onclick="switchTab('${type}')"]`).classList.add("active");
}

document.addEventListener("DOMContentLoaded", () => {
    switchTab("hydration");
});

document.addEventListener('DOMContentLoaded', function () {
    var preorderForm = document.getElementById('preorder-form');
    var preorderSuccess = document.getElementById('preorder-success');
    if (preorderForm && preorderSuccess) {
        preorderForm.addEventListener('submit', function (e) {
            e.preventDefault();
            preorderSuccess.style.display = 'block';
            preorderForm.reset();
            setTimeout(function () {
                preorderSuccess.style.display = 'none';
            }, 4000);
        });
    }
});
