// Show Setting Box 
let setting = document.querySelector(".settings-box")

document.querySelector(".settings-box .fa-gear").onclick = function () {
    // Add Fa-Spin Class Name To Icon
    this.classList.toggle("fa-spin")

    // Add Class Name To Setting Box And Remove It
    setting.classList.toggle("open")
}


// Select Landing Page Elements
const landingPage = document.querySelector('.landing-page');

// Get Array Of Images
let imgsArray = [
    "Landing01.jpg",
    "Landing02.jpg",
    "Landing03.jpg",
    "Landing04.jpg", 
    "Landing05.jpg", 
    "Landing06.jpg"
];

// Change Background Image URL
landingPage.style.backgroundImage = 'url("imgs/Landing03.jpg")';

setInterval(() => {
    // Get Random Number
    let randomNumber = Math.floor(Math.random() * imgsArray.length);
    
    // Change Background Image URL
    landingPage.style.backgroundImage = 'url("imgs/' + imgsArray[randomNumber] + '")';

}, 5000);