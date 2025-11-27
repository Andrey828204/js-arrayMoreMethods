function getMostFuelEfficientCars(cars, brand) {
  // Перевіряємо чи всі авто мають витрату < 6
  for (let i = 0; i < cars.length; i++) {
    if (cars[i].fuelConsumption >= 6) {
      return [];
    }
  }

  // Фільтруємо авто за брендом
  const brandCars = cars.filter(car => car.brand === brand);

  if (brandCars.length === 0) return [];

  // Сортуємо за витратою палива
  brandCars.sort((a, b) => a.fuelConsumption - b.fuelConsumption);

  return brandCars;
}

module.exports = getMostFuelEfficientCars;
