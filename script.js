const carousel = document.querySelector(".carousel");
const slides = document.querySelectorAll(".slide");
const controlLinks = document.querySelectorAll(".controls a");
const control = document.getElementById("controls");
const backGround = document.querySelector("body");
const blob = document.getElementById("blob");
const type = document.getElementById("type");
const typeMob = document.getElementById("typeMob");
const logo = document.getElementById("icon");
const menuMob = document.getElementById("hideMob")
const menuMobColor = document.getElementById('menuMob');
const choose = document.getElementById("choose-the-taste");

document.getElementById('hideMob').addEventListener('click', function() {
  const menu = document.getElementById('menuMob');
  if (menu.style.display === 'none' || menu.style.display === '') {
      menu.style.display = 'block'; // Arată meniul
      typeMob.style.display = 'none';
      choose.style.display = 'none';
      carousel.style.display = 'none';
      control.style.display = 'none';
      
  } else {
      menu.style.display = 'none'; // Ascunde meniul
      typeMob.style.display = 'block';
      choose.style.display = 'inline-block';
      carousel.style.display = 'flex';
      control.style.display = 'block';
  }
});

localStorage.setItem("color", 1 );
let i = 0,
  j = 1,
  intervalId;

controlLinks.forEach((control) => {
  control.addEventListener("click", () => {
    clearInterval(intervalId);
    carousel.style.rotate = `-${
      (i - j + Number(control.dataset.index)) * 90
    }deg`;

    document.querySelector(".slide.active").classList.remove("active");
    const activeSlide = document.querySelector(
      `.slide:nth-child(${control.dataset.index})`
    );
    activeSlide.classList.add("active");
  
    
    //Blueberry
    if (Number(control.dataset.index) === 1) {
      backGround.style.backgroundColor = '#B27DB7'; //Culoarea fundal
      carousel.style.border = '22vw solid #6C4176'; //Culoarea cercului
      blob.src = "Blob 5.svg";                      //Culoarea la blob
      type.src = "Blueberry.svg"                    //Textul gustului
      type.style.top = "14.8vw";                       //Pozitia pe verticala(Textul gustului)
      type.style.left = "23vw";                      //Pozitia pe orizontala(Textul gustului)
      type.style.position = "absolute";
      type.style.width = "30vw";
      logo.src = "Subtract.svg";

      typeMob.src = "Blueberry.svg" 
      typeMob.style.top = "53vw";                       //Pozitia pe verticala(Textul gustului)
      typeMob.style.left = "8vw";                      //Pozitia pe orizontala(Textul gustului)
      typeMob.style.position = "absolute";
      typeMob.style.width = "50vw";
      menuMob.src = "mobileMenu.png";
      menuMobColor.style.backgroundColor = '#B27DB7'; 
    }
    //Oreo
    if (Number(control.dataset.index) === 2) {
      backGround.style.backgroundColor = '#F2F1E9';
      carousel.style.border = '22vw solid #3D2B29';
      blob.src = "Blob 6.svg";
      type.src = "Oreo.svg"
      type.style.top = "14.8vw";                       
      type.style.left = "31vw";                      
      type.style.position = "absolute";
      type.style.width = "15vw";
      logo.src = "SubtractOreo.svg";

      typeMob.src = "Oreo.svg"
      typeMob.style.top = "53vw";                       //Pozitia pe verticala(Textul gustului)
      typeMob.style.left = "18vw";                      //Pozitia pe orizontala(Textul gustului)
      typeMob.style.position = "absolute";
      typeMob.style.width = "30vw";
      menuMob.src = "mobileMenuOreo.png";
      menuMobColor.style.backgroundColor = '#F2F1E9';  
    }
    //Vanilla
    if (Number(control.dataset.index) === 3) {
      backGround.style.backgroundColor = '#FAF5E7';
      carousel.style.border = '22vw solid #D6C186';
      blob.src = "Blob 7.svg";
      type.src = "Vanilla.svg";
      type.style.top = "14.8vw";
      type.style.left = "27vw";
      type.style.width = "22vw";
      logo.src = "SubtractVanilla.svg";

      typeMob.src = "Vanilla.svg";
      typeMob.style.top = "53vw";                       //Pozitia pe verticala(Textul gustului)
      typeMob.style.left = "12vw";                      //Pozitia pe orizontala(Textul gustului)
      typeMob.style.position = "absolute";
      typeMob.style.width = "40vw";
      menuMob.src = "mobileMenuVanilla.png";
      menuMobColor.style.backgroundColor = '#FAF5E7';   
    }
    //Strawberry
    if (Number(control.dataset.index) === 4) {
      backGround.style.backgroundColor = '#EDBFBA';
      carousel.style.border = '22vw solid #E47270';
      blob.src = "Blob 8.svg";
      type.src = "Strawberry.svg"
      type.style.top = "14.8vw";                       
      type.style.left = "23vw"; 
      type.style.width = "30vw";
      logo.src = "SubtractStrawberry.svg";

      typeMob.src = "Strawberry.svg";
      typeMob.style.top = "53vw";                       //Pozitia pe verticala(Textul gustului)
      typeMob.style.left = "3vw";                      //Pozitia pe orizontala(Textul gustului)
      typeMob.style.position = "absolute";
      typeMob.style.width = "60vw";
      menuMob.src = "mobileMenuStrawberry.png";
      menuMobColor.style.backgroundColor = '#EDBFBA';   
    }
    
    localStorage.setItem("color",Number(control.dataset.index) );

    document.querySelector("a.active").classList.remove("active");
    control.classList.add("active");
  });
});


