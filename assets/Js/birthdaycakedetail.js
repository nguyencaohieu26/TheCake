    
    const listdetailcakeshow   = document.querySelectorAll(".birthdaycake__item-img-list img");
    const imgCakeShow          = document.querySelector(".birthdaycake__item-main-img");
    const listdetailCake       = document.querySelector(".birthdaycake__item-img-list");
    const btn_sizeCake         = document.querySelectorAll(".btns .birthdaycake__item-size");
    // 
    const quanityCake          = document.querySelector(".quanity_value");
    const increase_Numbercake  = document.querySelector(".quanity .fa.fa-plus");
    const decrease_Numbercake  = document.querySelector(".quanity .fa.fa-minus");
    // 
    const btnFeature__chose           = document.querySelectorAll(".btn-feature__chose");
    const birthdaycake__FeaturesItem  = document.querySelectorAll(".birthdaycake__features-item")
//-----------------------------------
    // chose image
    listdetailcakeshow.forEach(function(item,index){
      item.addEventListener("click",function(e){
        var element = e.currentTarget.src;
          imgCakeShow.src = element;
          choseActivelogin(index,listdetailcakeshow);
        })
    })
// ----------------------------------
    // chose active cake
    btn_sizeCake.forEach(function(item,index){
      item.addEventListener("click",function(){
        choseActivelogin(index,btn_sizeCake)
      })
    })
// ---------------------------------------------
    // inscrease/ descrease
    increase_Numbercake.addEventListener("click",function(){
      var quanity1 = quanityCake.innerText;
      var numbertang = parseInt(quanity1) + 1;
      quanityCake.innerText = numbertang;
    }) 
    decrease_Numbercake.addEventListener("click",function(){
      var quanity2 = quanityCake.innerText;
      var numbergiam = parseInt(quanity2) - 1;
      if(numbergiam < 1){
        numbergiam = 1;
      }
      quanityCake.innerText = numbergiam;
    })
    const closeBirthdaycake__item = document.querySelector(".close__birthdaycake__item");
    const largerBirthdaycake      = document.querySelector(".birthdaycake__item-large");
    const ImageBirthdayCakeLarger = document.querySelector(".birthdaycake__item-large-inner img");

   var numberImg = 1;
    imgCakeShow.addEventListener("click",function(e){
      var src = e.currentTarget.src;
      listdetailcakeshow.forEach(function(item,index){
        if(item.src == src){
          numberImg = index + 1;
        }
      })
        largerBirthdaycake.classList.add("active");
        ImageBirthdayCakeLarger.src = src;
    })
    closeBirthdaycake__item.addEventListener("click",function(){
      largerBirthdaycake.classList.remove("active");
    })
    // 
    const btn_NextImg = document.querySelector(".btn-next-largerimg");
    const btn_PrevImg = document.querySelector(".btn-prev-largerimg");
    btn_NextImg.addEventListener("click",function(){
      numberImg++;
      if(numberImg > listdetailcakeshow.length ){
        numberImg = 1;
      }
      showLargerImg(numberImg);
    })
    btn_PrevImg.addEventListener("click",function(){
      numberImg--;
      if(numberImg < 1 ){
        numberImg = listdetailcakeshow.length;
      }
      showLargerImg(numberImg);
    })
    function showLargerImg(number){
      if(number == 5){
      ImageBirthdayCakeLarger.src = `assets/image/cakedetail/cakedetail${number}.gif`
    return;    
    }
      ImageBirthdayCakeLarger.src = `assets/image/cakedetail/cakedetail${number}.jpg`
    }
//---------------------------------------------- 
    // chose feature
    btnFeature__chose.forEach(function(item,index){
      item.addEventListener("click",function(e){
        var text = e.currentTarget.innerText
        birthdaycake__FeaturesItem.forEach(function(item){
          var textcheck = item.getAttribute("data-features");
          if(text == textcheck){
            item.classList.add("active");
            return;
          }
          item.classList.remove("active");
        })
        choseActivelogin(index,btnFeature__chose)
      })
    })
// -----------------
const formCommentEmail = document.querySelector(".form-comment input[type='email']");
const formCommentInput = document.querySelector(".form-comment input[type='text']");
const formCommentTextarea = document.querySelector(".form-comment textarea");
const appendForm = document.querySelector(".birthdaycake__review-list");
const btn__SumbitComment = document.querySelector(".form-comment button");
function clearInput(){
  formCommentEmail.value ="";
  formCommentInput.value ="";
  formCommentTextarea.value ="";
}
btn__SumbitComment.addEventListener("click",function(){
  var email     = formCommentEmail.value;
  var inputname = formCommentInput.value;
  var mess      = formCommentTextarea.value;
  var flag      = true;
  if(email == "" || inputname == "" || mess == ""){
    flag = false;s
    alert("Please fillout all fields!")
    return;
  }
  console.log(flag)
  console.log(email);
  if(flag == true){
    appendForm.insertAdjacentHTML(
     "beforeend",
     `
     <div class="birthdaycake__review">
     <img src="assets/image/emtyava.jpg" alt="review-img1">
     <div class="birthdaycake__review-content">
       <div class="birthdaycake__item-starts">
         <i class="fas fa-star"></i>
         <i class="fas fa-star"></i>
         <i class="fas fa-star"></i>
         <i class="far fa-star"></i>
         <i class="far fa-star"></i>
         </div>
         <h4 class="birthdaycake__review-name">
           ${inputname}
         <span class="birthdaycake__review-date">Now</span>
         </h4>
         <p class="birthdaycake__review-paragraph">${mess}</p>
     </div>
   </div>
     `
    )
    clearInput();
  }
})