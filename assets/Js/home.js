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
// 