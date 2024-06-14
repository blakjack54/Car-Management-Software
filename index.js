let car = {
  speed: 0,
  fuel: 100
};

const speedInput = document.getElementById('speedInput');
const fuelInput = document.getElementById('fuelInput');
const updateButton = document.getElementById('updateButton');
const carInfo = document.getElementById('carInfo');

function updateCarInfo() {
  carInfo.innerHTML = `
    <p>Speed: ${car.speed} km/h</p>
    <p>Fuel Level: ${car.fuel}%</p>
  `;
}

updateButton.addEventListener('click', () => {
  car.speed = parseInt(speedInput.value);
  car.fuel = parseInt(fuelInput.value);
  updateCarInfo();
});

updateCarInfo();
