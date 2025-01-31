
function colorChangeButton() {
    let button = document.querySelector(".color-btn");
    let colors = ["rgb(0, 123, 255)", "rgb(255, 105, 180)", "rgb(40, 167, 69)", "rgb(255, 193, 7)", "rgb(111, 66, 193)"]; 
   

    let currentColor = window.getComputedStyle(button).backgroundColor;
    let currentIndex = colors.indexOf(currentColor);
    let nextIndex = (currentIndex + 1) % colors.length;

    button.style.backgroundColor = colors[nextIndex];
}


function getAlert(){

    const userName = prompt("Please Enter Your Name")
    if(userName === null || userName.trim() === ""){
        
    }
    const currentTime = new Date();
    const currentHour = currentTime.getHours();
    let alertMessage;
    if(currentHour >= 6 && currentHour < 12){
        alertMessage = `Good Morning, ${userName} ! Stay hydrated with HydroMax!`;
    }else if (currentHour < 18){
        alertMessage = `Good Afternoon, ${userName} ! Stay hydrated with HydroMax!`;
    } else{
        alertMessage = `Good Evening, ${userName} ! Stay hydrated with HydroMax!`;
    }
    alert(alertMessage);
}

window.onload = getAlert;