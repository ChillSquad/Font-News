let longread = document.querySelector(".longread");
let colorSetting = document.querySelector(".color-setting");
let backgroundSetting = document.querySelector(".background-setting");
let sizeSetting = document.querySelector(".size-setting");
let content = document.querySelector(".container-content");
let pixels = document.querySelector(".pixels");

backgroundSetting.onchange = function () {
  content.style.background = backgroundSetting.value;
};

colorSetting.onchange = function () {
  longread.style.color = colorSetting.value;
};

sizeSetting.oninput = function () {
  pixels.textContent = sizeSetting.value;
  longread.style.fontSize = sizeSetting.value + "px";
};
