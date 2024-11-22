function plusMinus(arr) {
  const n = arr.length;
  const positive = arr.filter((x) => x > 0).length / n;
  const negative = arr.filter((x) => x < 0).length / n;
  const zeros = arr.filter((x) => x === 0).length / n;

  console.log(positive.toFixed(6));
  console.log(negative.toFixed(6));
  console.log(zeros.toFixed(6));
}

// Prueba con un ejemplo
plusMinus([-4, 3, -9, 0, 4, 1]);
