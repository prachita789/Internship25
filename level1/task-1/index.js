
function colorChangeButton() {
    let button = document.querySelector(".color-btn");
    let colors = ["rgba(255, 94, 0, 0.95)", "rgb(255, 105, 180)", "rgb(40, 167, 69)", "rgb(255, 193, 7)", "rgb(111, 66, 193)"]; 
   

    let currentColor = window.getComputedStyle(button).backgroundColor;
    let currentIndex = colors.indexOf(currentColor);
    let nextIndex = (currentIndex + 1) % colors.length;

    button.style.backgroundColor = colors[nextIndex];
}


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

function hydroCalculator(){
    const wt = document.getElementById("weight").value;

    if(!wt){
        alert("Please enter your weight!");
        return;
    }

    const dailyWaterIntake = wt * 0.03;
    

    document.getElementById("result").innerHTML = `You should drink <strong>${dailyWaterIntake.toFixed(1)} liters</strong> of water daily.`;
}