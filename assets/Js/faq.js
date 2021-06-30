      const question__itemElement = document.querySelectorAll(".question__item");
      const questionFaq           = document.querySelectorAll(".question-faq");
      const fqa_Option            = document.querySelectorAll(".faq__item-option");
      const btn_ChoseFAQ          = document.querySelectorAll(".btn-faq-chose");
      questionFaq.forEach(function(button){
        button.addEventListener("click",function(e,index){
          const contentChose = e.currentTarget.parentElement;
          question__itemElement.forEach(function(item){
            if(contentChose == item){
              item.classList.toggle("active");
              return;
            }
            item.classList.remove("active");
          })
        })
      })
      function ChoseButton (index,element){
        for (var i =0;i < element.length;i++){
          element[i].classList.remove("active")
        }
        element[index].classList.add("active");
      }
      btn_ChoseFAQ.forEach(function(button,index){
        button.addEventListener("click",function(e){
          var text = e.currentTarget.getAttribute("data-chose");
          fqa_Option.forEach(function(item){
            var textcheck = item.getAttribute("data-title");
            if(text == textcheck){
              item.classList.add("active");
              return;
            }
            item.classList.remove("active")
          })
          ChoseButton(index,btn_ChoseFAQ)
        })
      })