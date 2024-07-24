let color = localStorage.getItem("color");
const backGround = document.querySelector("body");
const blobBottom = document.getElementById("blobBottom");
const blobTop = document.getElementById("blobTop");
const logo = document.getElementById("icon");
const input = document.querySelectorAll("input");
const button =document.getElementById("button");
if (color === '1') {
    backGround.style.backgroundColor = '#B27DB7';
    blobBottom.src = "Design Blueberry.png";
    blobTop.src = "Blob Blueberry.svg";
    logo.src = "/Subtract.svg";
    for(var i = 0; i < 3; i++) 
        input[i].style.backgroundColor = '#b27db7';
    button.style.backgroundColor = '#543568';
  }
  //Oreo
  if (color === '2') {
    backGround.style.backgroundColor = '#F2F1E9';
    blobBottom.src = "Design Oreo.png";
    blobTop.src = "Blob Oreo.svg";
    logo.src = "/SubtractOreo.svg";
    for(var i = 0; i < 3; i++) 
        input[i].style.backgroundColor = '#F2F1E9';
    button.style.backgroundColor = '#2C2220';
  }
  //Vanilla
  if (color === '3') {
    backGround.style.backgroundColor = '#FAF5E7';
    blobBottom.src = "Design Vanilla.png";
    blobTop.src = "Blob Vanilla.svg";
    logo.src = "/SubtractVanilla.svg";
    for(var i = 0; i < 3; i++) 
        input[i].style.backgroundColor = '#FAF5E7';
    button.style.backgroundColor = '#D5B54B';
  }
  //Strawberry
  if (color === '4') {
    backGround.style.backgroundColor = '#EDBFBA';
    blobBottom.src = "Design Strawberry.png";
    blobTop.src = "Blob Strawberry.svg";
    logo.src = "/SubtractStrawberry.svg";
    for(var i = 0; i < 3; i++) 
        input[i].style.backgroundColor = '#EDBFBA'; 
    button.style.backgroundColor = '#390000';
  }