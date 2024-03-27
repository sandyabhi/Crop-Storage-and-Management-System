export const checkSuitableCrop = (temperature, humidity) => {
  const cropsToAdd = [];

  if (temperature >= 16 && temperature <= 20 && humidity == 60) {
    cropsToAdd.push("Rice");
  }
  if (
    temperature >= 10 &&
    temperature <= 15 &&
    humidity >= 12 &&
    humidity <= 14
  ) {
    cropsToAdd.push("Wheat");
  }
  if (
    temperature >= 0 &&
    temperature <= 4.4 &&
    humidity >= 65 &&
    humidity <= 75
  ) {
    cropsToAdd.push("Onion");
  }
  if (
    temperature >= 7 &&
    temperature <= 10 &&
    humidity >= 80 &&
    humidity <= 90
  ) {
    cropsToAdd.push("Potato");
  }
  if (
    temperature >= 13 &&
    temperature <= 20 &&
    humidity >= 85 &&
    humidity <= 95
  ) {
    cropsToAdd.push("Tomato");
  }
  if (
    temperature >= 0 &&
    temperature <= 4.4 &&
    humidity >= 90 &&
    humidity <= 95
  ) {
    cropsToAdd.push("Apple");
  }
  if (
    temperature >= 38 &&
    temperature <= 48 &&
    humidity >= 90 &&
    humidity <= 95
  ) {
    cropsToAdd.push("Orange");
  }

  return cropsToAdd;
};
