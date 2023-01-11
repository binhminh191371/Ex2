const btnClose = document.querySelector(".img_close");
const btlmenu = document.querySelector(".img_menu");
const bgHumberger = document.querySelector(".bg_humberger");
const menu = document.querySelector(".menu");
const cartList = document.querySelector(".infor_cart-list");
const iconCart = document.querySelector(".infor_cart");
const btnNext = document.querySelector(".next");
const btnPrevious = document.querySelector(".previous");
const slideMain = document.querySelector(".bodymobile_sliderMain");
const slideitems = document.querySelectorAll(".bodymobile_sliderItem");
const sliderWidth = slideitems[0].offsetWidth;
const sliderLenght = slideitems.length;
let positionX = 0;
let index = 0;
const increment = document.querySelector(".body_right-plus");
const decrement = document.querySelector(".body_right-minus");
const counterNumber = document.querySelector(".body_right-quantity");
let maxValue = 10;
let minValue = 0;
let counterValue = parseInt(counterNumber.textContent);
let activeImg = document.getElementsByClassName("active");
let imgs = document.getElementsByClassName("img_product");
let imgBig = document.querySelector(".img_big");
let imgItem = document.querySelector(".body_left-imgitem")

// handle slide pc
for (let i = 0; i < imgs.length; i++) {
  imgs[i].addEventListener("mouseover", function()  {
    this.classList.add("active");
    imgBig.src = this.src;
    
  });
}

// handle slide mobile & tablet
const handleChangeSlide = (dir) => {
  if (dir === 1) {
    if (index >= sliderLenght - 1) {
      index = sliderLenght - 1;
      return;
    }
    positionX = positionX - sliderWidth;
    slideMain.style = `transform:translateX(${positionX}px)`;
    index++;
    console.log(slideMain);
  } else if (dir === -1) {
    if (index <= 0) {
      index = 0;
      return;
    }
    positionX = positionX + sliderWidth;
    slideMain.style = `transform:translateX(${positionX}px)`;
    index--;
  }
};

btnNext.addEventListener("click", () => handleChangeSlide(1));

btnPrevious.addEventListener("click", () => handleChangeSlide(-1));

// handle change quantity
increment.addEventListener("click", () => {
  counterValue >= maxValue ? maxValue : counterValue++;
  counterValue >= maxValue
    ? increment.classList.add("no-click")
    : decrement.classList.remove("no-click");
  counterNumber.textContent = counterValue;
});

decrement.addEventListener("click", () => {
  counterValue == minValue ? minValue : counterValue--;
  counterValue == minValue
    ? decrement.classList.add("no-click")
    : increment.classList.remove("no-click");
  counterNumber.textContent = counterValue;
});

//  handle menu mobile
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
  console.log("click");
});
