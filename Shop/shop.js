let color = localStorage.getItem("color");
const backGround = document.querySelector("body");
const blobBottom = document.getElementById("blobBottom");
const blobTop = document.getElementById("blobTop");
const logo = document.getElementById("icon");

if (color === '1') {
    backGround.style.backgroundColor = '#B27DB7';
    blobBottom.src = "Design Blueberry.png";
    blobTop.src = "Blob Blueberry.svg";
    logo.src = "/Subtract.svg";
  }
  //Oreo
  if (color === '2') {
    backGround.style.backgroundColor = '#F2F1E9';
    blobBottom.src = "Design Oreo.png";
    blobTop.src = "Blob Oreo.svg";
    logo.src = "/SubtractOreo.svg";
  }
  //Vanilla
  if (color === '3') {
    backGround.style.backgroundColor = '#FAF5E7';
    blobBottom.src = "Design Vanilla.png";
    blobTop.src = "Blob Vanilla.svg";
    logo.src = "/SubtractVanilla.svg";
  }
  //Strawberry
  if (color === '4') {
    backGround.style.backgroundColor = '#EDBFBA';
    blobBottom.src = "Design Strawberry.png";
    blobTop.src = "Blob Strawberry.svg";
    logo.src = "/SubtractStrawberry.svg";
  }