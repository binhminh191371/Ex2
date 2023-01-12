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
const increment = document.querySelector(".body_right-plus");
const decrement = document.querySelector(".body_right-minus");
const counterNumber = document.querySelector(".body_right-quantity");
const activeImg = document.getElementsByClassName("active");
const imgs = document.getElementsByClassName("img_product");
const imgBig = document.querySelector(".img_big");
const imgItem = document.querySelector(".body_left-imgitem");
const sliderWidth = slideitems[0].offsetWidth;
const sliderLenght = slideitems.length;
const nextSlider = 1;
const priviousSlider = -1;
let counterValue = parseInt(counterNumber.textContent);
let maxValue = 10;
let minValue = 0;
let positionX = 0;
let index = 0;

// handle slide pc
for (let index = 0; index < imgs.length; index++) {
  imgs[index].addEventListener("mouseover", function () {
    this.classList.add("active");
    imgBig.src = this.src;
  });
}

// handle slide mobile & tablet
const handleChangeSlide = (dir) => {
  if (dir === nextSlider) {
    if (index >= sliderLenght - 1) {
      index = sliderLenght - 1;
      return;
    }
    positionX -= sliderWidth;
    slideMain.style = `transform:translateX(${positionX}px)`;
    index++;
  } else if (dir === priviousSlider) {
    if (index <= 0) {
      index = 0;
      return;
    }
    positionX += sliderWidth;
    slideMain.style = `transform:translateX(${positionX}px)`;
    index--;
  } else {
    return;
  }
};

btnNext.addEventListener("click", () => handleChangeSlide(nextSlider));

btnPrevious.addEventListener("click", () => handleChangeSlide(priviousSlider));

// handle change quantity
const handleIncrementQuantity = () => {
  if (counterValue >= maxValue) {
    counterValue = maxValue;
    increment.classList.add("no-click");
  } else {
    counterValue++;
    decrement.classList.remove("no-click");
  }
  counterNumber.textContent = counterValue;
};

const handleDecrementQuantity = () => {
  if (counterValue == minValue) {
    counterValue = minValue;
    decrement.classList.add("no-click");
  } else {
    counterValue--;
    increment.classList.remove("no-click");
  }
  counterNumber.textContent = counterValue;
};

increment.addEventListener("click", handleIncrementQuantity);

decrement.addEventListener("click", handleDecrementQuantity);

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
});
