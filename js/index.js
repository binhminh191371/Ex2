const btnClose = document.querySelector(".img_close");
const btlmenu = document.querySelector(".img_menu");
const bgHumberger = document.querySelector(".bg_humberger");
const menu = document.querySelector(".menu");
const cartList = document.querySelector(".infor_cart-list");
const iconCart = document.querySelector(".infor_cart");

btlmenu.addEventListener("click", () => {
  menu.style = `transform: translateX(0);`;
  bgHumberger.classList.remove("bg_active");
});

btnClose.addEventListener("click", () => {
  menu.style = `transform: translateX(-100%);`;
  bgHumberger.classList.add("bg_active");
});

iconCart.addEventListener("click", () => {
  cartList.classList.toggle("isactive");
});
