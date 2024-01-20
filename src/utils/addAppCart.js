import largeAppCart from "../templates/largCart.hbs";
import addTemplates from "./addTemplates";
import getData from "./getData";

const cartBox = document.querySelector(".app_box");

export default function getAppData(value = 3) {
  getData(`http://localhost:8000/apps?_page=1&_limit=${value}`)
  .then((data) =>
    addTemplates(largeAppCart, cartBox, data)
  );
}
getAppData();
