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