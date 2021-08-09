// Function Filter gallery Image
var iso = new Isotope( '.gallery__grid', {
  itemSelector: '.element-item',
  layoutMode: 'fitRows'
});

var filtersElem = document.querySelector('.filters-button-group');
filtersElem.addEventListener( 'click', function( event ) {
  // only work with buttons
  if ( !matchesSelector( event.target, 'button' ) ) {
    return;
  }
  var filterValue = event.target.getAttribute('data-filter');
  // use matching filter function
  // filterValue = filterFns[ filterValue ] || filterValue;
  iso.arrange({ filter: filterValue });
});
// 
const fillterBtn = document.querySelectorAll(".btn-gallery");
fillterBtn.forEach(function(button){
  button.addEventListener("click",function(e){
    
  })
})

// Function show gallery Image
const gallery_ItemElement      = document.querySelectorAll(".element-item");
const btn__CloseGallery        = document.querySelector(".close-gallery-full-img");
const btn__NextGallery         = document.querySelector(".next-btn");
const btn__PrevGallery         = document.querySelector(".prev-btn");
const image__GalleryElement    = document.querySelector(".gallery-full-img img");
const content__GalleryElement  = document.querySelector(".gallery-full__content");
const zoomBtn                  = document.querySelectorAll(".gallery__zoom .fa-search");
const galleryFull              = document.querySelector(".gallery-full__size");
const btnChoseGallery          = document.querySelectorAll(".btn-gallery");
function showImg (index){
  var srcImg = gallery_ItemElement[index].querySelector("img").src;
  var textImg = gallery_ItemElement[index].querySelector("img").alt;
  image__GalleryElement.src = srcImg;
  content__GalleryElement.innerText = textImg;
}
var imgindex = 0;
function nextImg (){
  imgindex++;
  if(imgindex > gallery_ItemElement.length - 1){
    imgindex = 0;
  }
  showImg(imgindex);
}
function prevImg (){
  imgindex--;
  if(imgindex < 0){
    imgindex = gallery_ItemElement.length - 1;
  }
  showImg(imgindex);
}
zoomBtn.forEach(function(button,index){
  button.addEventListener("click",function(){
    galleryFull.style.display = 'flex';
    showImg(index)
    imgindex = index
    return;
  })
})
btn__CloseGallery.addEventListener("click",function(){
  galleryFull.style.display = 'none';
})
btn__NextGallery.addEventListener("click",nextImg);
btn__PrevGallery.addEventListener("click",prevImg)
// Chose active for button
function choseActive(index,element){
  for(var i =0;i < element.length; i++){
    element[i].classList.remove("active");
  }
  element[index].classList.add("active");
}
btnChoseGallery.forEach(function(button,index){
  button.addEventListener("click",function(){
    choseActive(index,btnChoseGallery);
  })
})