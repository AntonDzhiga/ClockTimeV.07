import getAppData from "./addAppCart";

const more_btn = document.querySelector(".load_more_btn");

const countElements = 3;
let page_count = 3;

more_btn.addEventListener("click", (e) => {
  page_count = page_count + countElements;
  getAppData(page_count);
});
