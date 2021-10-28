const productContainer = document.querySelectorAll(".product-container");
const productCardfirstChild = document.querySelector(
  ".product-card:first-child"
);
const productCardlastChild = document.querySelector(".product-card:last-child");
const nxtBtn = document.querySelector(".nxt-btn");
const preBtn = document.querySelector(".pre-btn");

const options = {
  root: null,
  threshold: 1,
  rootMargin: "0px",
};

const callBack = (entries, observer) => {
  entries.forEach((entry) => {
    if (entry.target === productCardfirstChild) {
      // console.log(entry);
      if (entry.isIntersecting) {
        preBtn.classList.add("pre-btn-hidden");
      } else {
        preBtn.classList.remove("pre-btn-hidden");
      }
    }
    if (entry.target === productCardlastChild) {
      // console.log(entry);
      if (entry.isIntersecting) {
        nxtBtn.classList.add("nxt-btn-hidden");
      } else {
        nxtBtn.classList.remove("nxt-btn-hidden");
      }
    }
  });
};

const observer = new IntersectionObserver(callBack, options);
observer.observe(productCardfirstChild);
observer.observe(productCardlastChild);

console.log(productContainer);
productContainer.forEach((item, i) => {
  let containerDimensions = item.getBoundingClientRect();
  console.log(containerDimensions);
  let containerWidth = containerDimensions.width;

  nxtBtn.addEventListener("click", () => {
    item.scrollLeft += containerWidth;
  });

  preBtn.addEventListener("click", () => {
    item.scrollLeft -= containerWidth;
  });
});
