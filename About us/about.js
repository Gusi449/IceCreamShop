let color = localStorage.getItem("color");
const backGround = document.querySelector("body");
const blobBottom = document.getElementById("blobBottom");
const blobTop = document.getElementById("blobTop");
const logo = document.getElementById("icon");
const photo1 = document.getElementById("photo1");
const photo2 = document.getElementById("photo2");
const photo3 = document.getElementById("photo3");
const photo4 = document.getElementById("photo4");

if (color === '1') {
    backGround.style.backgroundColor = '#B27DB7';
    blobBottom.src = "Design Blueberry.png";
    blobTop.src = "Blob Blueberry.svg";
    logo.src = "/Subtract.svg";
    photo1.src = "Member frame Blueberry.png";
    photo2.src = "Member frame Blueberry 2.png";
    photo3.src = "Member frame Blueberry 3.png";
    photo4.src = "Member frame Blueberry 4.png";
  }
  //Oreo
  if (color === '2') {
    backGround.style.backgroundColor = '#F2F1E9';
    blobBottom.src = "Design Oreo.png";
    blobTop.src = "Blob Oreo.svg";
    logo.src = "/SubtractOreo.svg";
    photo1.src = "Member frame Oreo.png";
    photo2.src = "Member frame Oreo 2.png";
    photo3.src = "Member frame Oreo 3.png";
    photo4.src = "Member frame Oreo 4.png";
  }
  //Vanilla
  if (color === '3') {
    backGround.style.backgroundColor = '#FAF5E7';
    blobBottom.src = "Design Vanilla.png";
    blobTop.src = "Blob Vanilla.svg";
    logo.src = "/SubtractVanilla.svg";
    photo1.src = "Member frame Vanilla.png";
    photo2.src = "Member frame Vanilla 2.png";
    photo3.src = "Member frame Vanilla 3.png";
    photo4.src = "Member frame Vanilla 4.png";
  }
  //Strawberry
  if (color === '4') {
    backGround.style.backgroundColor = '#EDBFBA';
    blobBottom.src = "Design Strawberry.png";
    blobTop.src = "Blob Strawberry.svg";
    logo.src = "/SubtractStrawberry.svg";
    photo1.src = "Member frame Strawberry.png";
    photo2.src = "Member frame Strawberry 2.png";
    photo3.src = "Member frame Strawberry 3.png";
    photo4.src = "Member frame Strawberry 4.png";
  }