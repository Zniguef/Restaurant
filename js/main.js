                        //   Start Menu active links
const currentLocation = location.href;
const menuItem = document.querySelectorAll("a");
const menuLength = menuItem.length;
for (let i = 0; i < menuLength; i++) {
    if(menuItem[i].href === currentLocation) {
        menuItem[i].className = "active";
    }
}
                        //   End Menu active links


// Select Landing Page Element
let landingPage = document.querySelector('.landing-page');

// Get Array of Imgs
let imgsArray = ["bac-1.jpg", "bac-2.jpg", "bac-3.jpg", "bac-4.jpg", "bac-5.jpg", "bac-6.jpg", "bac-7.jpg"];

setInterval(() => {

    // Get Random Number
    let randomNumber = Math.floor(Math.random() * imgsArray.length);

    //  Change Bac Img Url
    landingPage.style.backgroundImage = 'url("imgs/' + imgsArray[randomNumber] +'")';
}, 2000);


// Create popup with the img
let ourGallery = document.querySelectorAll(".gallery img");
ourGallery.forEach( img => {
    img.addEventListener("click", (e) => {
        // Creat Overllay Element
        let overllay = document.createElement("div");
        overllay.className = "popup-overllay";
        // Append Overllay to the body
        document.body.appendChild(overllay);
        // create the popup box
        let popupBox = document.createElement("div");
        //  create class to the popup box
        popupBox.className = "popup-box";

        if ( img.alt !== null) {
            // create heading
            let imgHeading = document.createElement("h3");
            // create text for heading
            let imgText = document.createTextNode(img.alt);
            // append the text to the heading
            imgHeading.appendChild(imgText);
            // append the heading to the popup box
            popupBox.appendChild(imgHeading);
        }

        //  create the img
        let popupImage = document.createElement("img");
        // set img src
        popupImage.src = img.src;
        // add img to the popup box
        popupBox.appendChild(popupImage);
        //  appen dthe popup to the body
        document.body.appendChild(popupBox);

        // create the close span
        let closeButton = document.createElement("span");
        // create the close button text
        let closeButtonText = document.createTextNode("X");
        // append text to close button
        closeButton.appendChild(closeButtonText);
        // add class to close button
        closeButton.className = 'close-button';
        // add close button to the popup box
        popupBox.appendChild(closeButton);

    });
});

// close popup
document.addEventListener("click", function(e) {
    if(e.target.className == 'close-button') {
        // remove the current popup
        e.target.parentNode.remove();

        // remove overllay
        document.querySelector(".popup-overllay").remove();
    }
});


                        //    start button scrol to top

//Get the button:
mybutton = document.getElementById("myBtn");


window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}


function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
                        // End button scrol to top

                        //  Toggle Menu

let toggleBtn = document.querySelector(".toggle-menu");
let tLinks = document.querySelector(".links");

toggleBtn.onclick = function (e) {
  // stop propagation
  e.stopPropagation();
  this.classList.toggle("menu-active");
  tLinks.classList.toggle("open");

};

document.addEventListener("click", (e) => {
  if(e.target !== toggleBtn && e.target !== tLinks) {

    if (tLinks.classList.contains("open")) {
      toggleBtn.classList.toggle("menu-active");
      tLinks.classList.toggle("open");
    }

  }
});

//  stop propagation on menu
tLinks.onclick = function (e) {
  e.stopPropagation();
}