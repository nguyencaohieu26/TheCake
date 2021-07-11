// ---------------------------------
// site index.html
var owl = $(".header__img-list");
owl.owlCarousel({
  items: 1,
  loop: true,
  nav:false,
  dots:true,
  margin: 0,
  autoplay: true,
  autoplayTimeout: 4000,
  autoplayHoverPause: true,
  animateOut: "fadeOut",
});
$(".play").on("click", function () {
  owl.trigger("play.owl.autoplay", [4000]);
});
$(".stop").on("click", function () {
  owl.trigger("stop.owl.autoplay");
});
var owl1 = $(".new-product__list");
owl1.owlCarousel({
  items: 4,
  loop: true,
  margin: 20,
  autoplay: false,
  autoplayTimeout: 4000,
  autoplayHoverPause: true,
  animateOut: "fadeOut",
  responsive:{
  0:{
    items:1,
  },
  500:{
    items:2,
  },
  600:{
    items:2,
  },
  900:{
    items:4,
  }
}
});
$(".play").on("click", function () {
  owl1.trigger("play.owl.autoplay", [4000]);
});
$(".stop").on("click", function () {
  owl1.trigger("stop.owl.autoplay");
});
// ------------------------------------
// site anniversarycake detail
var owl = $(".related__product-list");
 owl.owlCarousel({
   items: 4,
   loop: true,
   margin: 15,
   autoplay: false,
   autoplayTimeout: 4000,
   autoplayHoverPause: true,
   animateOut: "fadeOut",
   nav:true,
   responsive:{
     0:{
       items:1,
     },
     500:{
       items:2,
     },
     650:{
       items:3,
     },
     800:{
       items:4,
     }
   }
 });
 $(".play").on("click", function () {
   owl.trigger("play.owl.autoplay", [4000]);
 });
 $(".stop").on("click", function () {
   owl.trigger("stop.owl.autoplay");
 });
//  ---------------------------