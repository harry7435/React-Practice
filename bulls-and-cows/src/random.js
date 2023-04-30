export function generateRandomNumber() {
  // 1 ~ 9까지 숫자를 이용
  const candidates = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  // 랜덤하게 섞어서 4자리 숫자만 이용
  const pickedNumbers = shuffle(candidates).slice(0, 4);

  return pickedNumbers;
}

function shuffle(array) {
  return array.sort(() => {
    return Math.random() - 0.5; // -0.5 ~ 0.5
  });
}
