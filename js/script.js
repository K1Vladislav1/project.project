document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector('form[action="#"]');
    const inputs = form.querySelectorAll('input[data-reg], textarea[data-reg]');
    const button = form.querySelector('input[type="button"]');
    
    inputs.forEach(input => {
      input.addEventListener("input", function() {
        inputCheck(input);
      });
    });
  
    button.addEventListener("click", function(event) {
      event.preventDefault();
      let isValid = true;
      inputs.forEach(input => {
        if (!inputCheck(input)) {
          isValid = false;
        }
      });
      if (isValid) {
        // Отправка формы
        console.log("Форма валидна, данные готовы к отправке.");
      } else {
        console.log("Форма не валидна, проверьте введенные данные.");
      }
    });
  
    function inputCheck(input) {
      const inputValue = input.value;
      const inputReg = input.dataset.reg;
      const reg = new RegExp(inputReg);
      const label = input.parentElement.querySelector('label');
      if (reg.test(inputValue)) {
        input.setAttribute("is-valid", "1");
        input.style.border = "2px solid rgb(0, 196, 0)";
        label.style.color = "green"; // Добавлено изменение цвета для правильного ввода
        return true;
      } else {
        input.setAttribute("is-valid", "0");
        input.style.border = "2px solid rgb(255, 0, 0)";
        label.style.color = "red"; // Добавлено изменение цвета для неправильного ввода
        return false;
      }
    }
  });
  
