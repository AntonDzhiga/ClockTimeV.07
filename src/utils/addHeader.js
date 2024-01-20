import headerTpl from "../templates/header.hbs";
const headerBox = document.querySelector(".header");

function addHeader() {
  const headerTplEl = headerTpl();
  headerBox.innerHTML = headerTplEl;
}
addHeader();
