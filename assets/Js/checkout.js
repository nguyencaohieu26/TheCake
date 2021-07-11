// ---------------------------
const inputcheck = document.querySelectorAll(".checkout-step4 input");
const group_radio1 = document.querySelectorAll(".group-radio");
inputcheck.forEach(function(item){
  item.addEventListener("click",function (e) {
    var check = e.currentTarget.checked;
    var group_radio = e.currentTarget.parentElement.parentElement;
    group_radio1.forEach(function(item){
      if(item == group_radio && check){
        item.classList.add("active");
        return;
      }
      item.classList.remove("active");
    })
  })
})
// --------------------------
const btn_customerquestion = document.querySelectorAll(".open-customer-question");
const returningCustomer__item = document.querySelectorAll(".returning-customer__item");
btn_customerquestion.forEach(function(button){
  button.addEventListener("click",function(e){
    var parent = e.currentTarget.parentElement.parentElement;
    returningCustomer__item.forEach(function(item){
      if(item == parent){
        item.classList.toggle("active");
        return;
      }
      item.classList.remove("active");
    })
  })
})
// function table
const removeItem    = document.querySelectorAll(".remove-item");
const btn_Incresase = document.querySelectorAll(".btn-incresase-quanity");
const btn_Decresase = document.querySelectorAll(".btn-decresase-quanity");
const sumlQuanity    = document.querySelector(".sum-quanity");
var valueitem1=0;
var valueitem2=0;
removeItem.forEach(function(button){
  button.addEventListener('click',function(e){
    e.preventDefault()
    var parentElement = e.currentTarget.parentElement.parentElement;
    parentElement.remove(e.currentTarget.parentElement);
  })
})

var default_money = 50;
btn_Decresase.forEach(function(button){
  button.addEventListener("click",function(e){
    var parent = e.currentTarget.parentElement.parentElement;
    var inputQuanity = parent.querySelector(".quanity-item");
    var priceItem = parent.parentElement.parentElement.querySelector(".price-money"); 
    inputQuanity.innerHTML = parseInt(inputQuanity.innerHTML) - 1;
    var price = parseInt(inputQuanity.innerHTML) * default_money;
    priceItem.innerHTML = `${price}$`
    if(inputQuanity.innerHTML < 1){
      inputQuanity.innerHTML = 1
      priceItem.innerHTML = `${default_money}$`;
      return
    }
  })
})
btn_Incresase.forEach(function(button){
  button.addEventListener("click",function(e){
    var parent = e.currentTarget.parentElement.parentElement;
    var inputQuanity = parent.querySelector(".quanity-item");
    var priceItem = parent.parentElement.parentElement.querySelector(".price-money");
    inputQuanity.innerHTML = parseInt(inputQuanity.innerHTML) + 1;
    var price = parseInt(inputQuanity.innerHTML) * default_money;
    priceItem.innerHTML = `${price}$`
  })
})
var test = document.querySelectorAll(".quanity-item");
test.forEach(function(item){
  item.addEventListener("click",function(){

  })
})
// chose payment active
const paymentElement = document.querySelectorAll(".list-payment-modify img");
paymentElement.forEach(function(button,index){
  button.addEventListener("click",function(){
    choseActivelogin(index,paymentElement);
  })
})
