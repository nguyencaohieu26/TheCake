const btns_viewLarger        = document.querySelectorAll(".btns-view-larger");
const productCakeDetailImage = document.querySelector(".product-cake-detail-image");
const btns_closeLarger       = document.querySelector(".close__larger-item-img");
const ImglargerCake          = document.querySelector(".image-detail__cake img"); 
btns_viewLarger.forEach(function(item){
  item.addEventListener("click",function(e){
    var src1 = e.currentTarget.parentElement.querySelector("img").src;
    ImglargerCake.src = src1;
    productCakeDetailImage.classList.add("active");
  })
})
btns_closeLarger.addEventListener("click",function(){
  productCakeDetailImage.classList.remove("active");
})
// ------------------------------
// ----addcart
const addCartButton = document.querySelectorAll(".btn-addto-cart");
const closeaddCart  = document.querySelector(".close__addcart");
const cartImg       = document.querySelector(".addcart__img img");
const cartName      = document.querySelector(".product-cart");
const cartCode      = document.querySelector(".card-item-code");
const cartPrice     = document.querySelector(".cart-item-price");
const addcartForm   = document.querySelector(".addcart-form");
function fillInfoCart(name,src,price,code){
  cartImg.src = src;
  cartName.innerText = name;
  cartPrice.innerText = price;
  cartCode.innerText = code;
}
addCartButton.forEach(function(button){
  button.addEventListener("click",function(e){
    e.preventDefault();
    var parent = e.currentTarget.parentElement.parentElement;
    var name   = parent.querySelector(".product-cake-item__name").innerText;
    var src    = parent.querySelector("img").src;
    var price  = parent.querySelector(".product-cake-item__price").innerText;
    var code   = parent.querySelector(".product-cake-item__code").innerText
    fillInfoCart(name,src,price,code);
    addcartForm.classList.add("active");
  })
})
closeaddCart.addEventListener("click",function(){
  addcartForm.classList.remove("active");
})
const btn_cartSize = document.querySelectorAll(".btn-cart-size");
const promotion__item = document.querySelectorAll(".promotion__item");
btn_cartSize.forEach(function(button,index){
  button.addEventListener("click",function(e){
    console.log(e.currentTarget)
    choseActivelogin(index,btn_cartSize)
  })
})
promotion__item.forEach(function(button,index){
  button.addEventListener("click",function(){
    choseActivelogin(index,promotion__item);
  })
})
// 
const btn__TangQuanity = document.querySelector(".btn-add-more");
const btn__GiamQuanity = document.querySelector(".btn-add-less");
const quanity__Value   = document.querySelector(".quanity-value-cart");
var stepNumber = 1;
btn__TangQuanity.addEventListener("click",function(){
  stepNumber++;
  quanity__Value.innerText = stepNumber;
})
btn__GiamQuanity.addEventListener("click",function(){
  stepNumber--;
  if(stepNumber < 1){
    stepNumber =1;
  }
  quanity__Value.innerText = stepNumber;
})