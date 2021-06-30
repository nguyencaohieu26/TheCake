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