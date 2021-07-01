// scroll function
const header__topElement = document.querySelector(".header");
window.onscroll = function() {myFunction()};
  function myFunction() {
      var header__scroll = document.querySelector(".header__scroll");
      if (document.body.scrollTop > 150 || document.documentElement.scrollTop > 150) {
        header__scroll.classList.add("active-color")
        header__topElement.style.padding = "0"     
      } else {
        header__scroll.classList.remove("active-color");
        header__topElement.style.padding = "0 1.5rem"          
      }
}
// smooth scroll
$(document).ready(function () {
  $("a").click(function (event) {
    $("html, body").animate(
      {
        scrollTop: $($.attr(this, "href")).offset().top,
      },
      1100,
    );
    event.preventDefault();
  });
});

// Open mobile nav
const btn_OpenNav = document.querySelector(".menu__toggle");
const mobileNav = document.querySelector(".menu-mobile__nav");
btn_OpenNav.addEventListener("click", function () {
  mobileNav.classList.toggle("active");
})
// Open mobile nav-child list
const btnmobile__nav = document.querySelectorAll(".mobile__nav-link");
btnmobile__nav.forEach(function(item){
  item.addEventListener("click",function(e){
    var test = e.currentTarget;
    test.classList.toggle("active");
  })
})
// chose login form
function choseActivelogin (index,element){
  for(var i =0; i< element.length;i++){
    element[i].classList.remove("active");
  }
  element[index].classList.add("active");
}
const btn__LoginChose = document.querySelectorAll(".btn-login-chose");
const loginForm       = document.querySelectorAll(".form-login");
btn__LoginChose.forEach(function(item,index){
  item.addEventListener("click",function(e){
    e.preventDefault();
    var text = e.target.innerText;
    loginForm.forEach(function(item){
      if(text == item.getAttribute("data-form")){
        item.classList.add("active");
        return;
      }
      item.classList.remove("active");
    })
    choseActivelogin(index,btn__LoginChose)
  })
})
// ------------------------------------------
// Open login form
const FormLoginElement = document.querySelector(".login__form");
const openFormLogin    = document.querySelector(".login__icon");
const closeFormLogin   = document.querySelector(".close__login-form");
openFormLogin.addEventListener("click",function(){
  FormLoginElement.classList.add("active");
})
closeFormLogin.addEventListener("click",function(){
  FormLoginElement.classList.remove("active");
})
// ---------------------------------
// Open search
const SearchElement = document.querySelector(".seach-container");
const btn_OpenSearch = document.querySelector(".search__icon");
const closeSearch   = document.querySelector(".close__search");
btn_OpenSearch.addEventListener("click",function(){
  SearchElement.classList.add("active");
})
closeSearch.addEventListener("click",function(){
  SearchElement.classList.remove("active");
})
// ---------------------------------
const ourMenulist  = document.querySelectorAll(".our-menu-cake-list");
const btn_OpenMenu = document.querySelectorAll(".our-menu-btn-chose");
btn_OpenMenu.forEach(function(item,index){
  item.addEventListener("click",function(e){
    var text = e.currentTarget.innerText;
    ourMenulist.forEach(function(item){
      var textcheck = item.getAttribute("data-category");
      if(text == textcheck){
        item.classList.add("active");
        return;
      }
      item.classList.remove("active");
    })
    choseActivelogin(index,btn_OpenMenu);
  })
})
// ------------------------------------------------------
const cakeItemImg  = document.querySelector(".cake-inner-img img");
const cakeDetailName     = document.querySelector(".item-cake-inner-name");
const cakeDetailCode = document.querySelector(".item-cake-inner-code");
const cakeDetailType = document.querySelector(".cake-inner-type-item");
const cakeDetailPrice = document.querySelector(".item-cake-inner-price");
//---------------------
const detailItemCake  = document.querySelector(".detail-item-cake");
const open_DetailCake = document.querySelectorAll(".btn-detail-feature");
const close_DetailCake = document.querySelector(".btn-cancel-checkout");
// function fill detail
function fillDetailItem(img,name,code,type,price){
  cakeItemImg.src = img;
  cakeDetailName.innerText = name;
  cakeDetailCode.innerText = code;
  cakeDetailType.innerText =type;
  cakeDetailPrice.innerText = price;
}
open_DetailCake.forEach(function(item){
  item.addEventListener("click",function(e){
    var parentElement = e.currentTarget.parentElement.parentElement.parentElement;
    var type = parentElement.parentElement.getAttribute("data-category");  
    var img = parentElement.querySelector("img").src;
    var name = parentElement.querySelector(".menu-cake-item__name").innerText;
    var price = parentElement.querySelector(".price-cake").innerText;
    var itemcode = parentElement.querySelector(".code-item-cake").innerText;
    fillDetailItem(img,name,itemcode,type,price);
    detailItemCake.classList.add("active");
  })
})
close_DetailCake.addEventListener("click",function(){
  detailItemCake.classList.remove("active");
})
// 
const btn__ExpandImg = document.querySelectorAll(".btn-expand-feature");
const btn__CloseExpand = document.querySelector(".close__larger-item-img")
const largerImgElement = document.querySelector(".larger-img-tiem");
const largerImage      = document.querySelector(".larger-img-item-details img");
console.log(largerImage)
btn__ExpandImg.forEach(function(button){
  button.addEventListener("click",function(e){
    var target = e.currentTarget.parentElement.parentElement;
    console.log(target.querySelector("img").src)
    largerImage.src = target.querySelector("img").src;
    largerImgElement.classList.add("active");
  })
})
btn__CloseExpand.addEventListener("click",function(){
  largerImgElement.classList.remove("active");

})