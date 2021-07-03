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