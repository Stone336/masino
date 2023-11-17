// ================================================
const productItems = document.querySelectorAll(".product-item a");
productItems.forEach((item) => {
  item.addEventListener("click", function (e) {
    e.preventDefault();
    productItems.forEach((productItem) => {
      productItem.classList.remove("active");
    });
    item.classList.add("active");
  });
});

// ===========================================================

const minPriceInput = document.getElementById("min-price");
const maxPriceInput = document.getElementById("max-price");
const minPriceOutput = document.getElementById("min-price-output");
const maxPriceOutput = document.getElementById("max-price-output");

const priceRange = document.getElementById("price-range");
noUiSlider.create(priceRange, {
  start: [0, 2620],
  connect: true,
  step: 10,
  range: {
    min: 0,
    max: 2620,
  },
});

priceRange.noUiSlider.on("update", function (values, handle) {
  if (handle === 0) {
    minPriceInput.value = Math.round(values[0]);
    minPriceOutput.textContent = `Min: $${Math.round(values[0])}`;
  }
  if (handle === 1) {
    maxPriceInput.value = Math.round(values[1]);
    maxPriceOutput.textContent = `Max: $${Math.round(values[1])}`;
  }
});

minPriceInput.addEventListener("change", function () {
  priceRange.noUiSlider.set([this.value, null]);
});

maxPriceInput.addEventListener("change", function () {
  priceRange.noUiSlider.set([null, this.value]);
});
// ============================================

var header = document.getElementById("myDIV");
var btns = header.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function () {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}
