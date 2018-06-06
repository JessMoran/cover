const bigCar = document.getElementById('big-car');
const redCar = document.getElementById('red-car');
const blueCar = document.getElementById('blue-car');
const grayCar = document.getElementById('gray-car');
const whiteCar = document.getElementById('white-car');

redCar.addEventListener('click', changeRedCar);
blueCar.addEventListener('click', changeBlueCar);
grayCar.addEventListener('click', changeGrayCar);
whiteCar.addEventListener('click', changeWhiteCar);


function changeRedCar (){
  bigCar.src = "assets/images/march-rojo.banner.png";
}

function changeBlueCar (){
  bigCar.src = "assets/images/march-blue.banner.png";
}

function changeGrayCar (){
  bigCar.src = "assets/images/march-gray.banner.png";
}

function changeWhiteCar (){
  bigCar.src = "assets/images/march-white.banner.png";
}