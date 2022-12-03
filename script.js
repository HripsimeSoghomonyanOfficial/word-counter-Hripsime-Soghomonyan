function atLeastTwoCharacters(text) {
  const letters = text.match(/[a-z]/gi) || [];
  return letters.length >= 2;
}

function abscenceOfThreeConsecutiveCharacters(text) {
  for (const character of text) {
    const occurrences = Array.from(text).filter((v) => v === character).length;

    if (occurrences >= 3) {
      return false
    }
  }

  return true;
}

const checks = [atLeastTwoCharacters, abscenceOfThreeConsecutiveCharacters];
const textInput = document.querySelector(".text__input");
const wordCountElement = document.querySelector(".word__count");
const letterCountElement = document.querySelector(".letter__count");
const changeBackgroundColor = document.querySelector(".container__button");
const container = document.querySelector(".container");

textInput.addEventListener("input", () => {
  const splitted = textInput.value.trim().split(/[\s-]/);
  const letterCount = (textInput.value.match(/[a-z]/gi) || []).length;
  let wordCount = 0;

  outer:
   for (const text of splitted) {
    for (const check of checks) {
      if (!check(text)) {
        continue outer;
      }
    }

    wordCount++;
  }

  wordCountElement.textContent = wordCount;
  letterCountElement.textContent = letterCount;
});

function randomColor() {
    return "#" + Math.floor(Math.random()*16777215).toString(16);
}

changeBackgroundColor.addEventListener("click", () => {
  container.style.background = randomColor();
})