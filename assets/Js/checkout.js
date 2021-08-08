const couponcode_inputEl = document.querySelector("#couponcode_input");
const giftcode_inputEl   = document.querySelector('#giftcode_input');
const couponBtn          = document.querySelector('#coupon_btn');
const giftcodeBtn        = document.querySelector('#giftcode_btn');
const couponNote         = document.querySelector('.notify_coupon');
const giftNote           = document.querySelector('.notify_gift');
const coup_code          = document.querySelector('.coup_code');
const gift_code          = document.querySelector('.gift_code');
couponBtn.addEventListener("click",function(){
  if(couponcode_inputEl.value.trim().length === 0){
    couponNote.style.display='block';
    couponcode_inputEl.style.borderColor = 'red';
    return;
  }
  coup_code.style.display='inline-block';
  coup_code.innerText = couponcode_inputEl.value;
  this.style.display='none';
  couponcode_inputEl.style.display='none';  
  couponcode_inputEl.value = ''

})
couponcode_inputEl.addEventListener('input',function(){
  if(couponNote.style.display ==='block'){
    couponNote.style.display='none';  
    couponcode_inputEl.style.borderColor = 'rgb(202, 202, 202)';
  }
})
giftcodeBtn.addEventListener("click",function(){
  if(giftcode_inputEl.value.trim().length === 0){
    giftNote.style.display='block';
    giftcode_inputEl.style.borderColor = 'red';
    return;
  }
  gift_code.style.display='inline-block';
  gift_code.innerText = giftcode_inputEl.value;
  this.style.display='none';
  giftcode_inputEl.style.display='none'; 
  giftcode_inputEl.value = ''
})
giftcode_inputEl.addEventListener('input',function(){
  if(giftNote.style.display ==='block'){
    giftNote.style.display='none';  
    giftcode_inputEl.style.borderColor = 'rgb(202, 202, 202)';
  }
})