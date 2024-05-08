
function validateForm() {
    var fname = document.getElementById("fname").value;
    var city = document.getElementById("city").value;
    var adr = document.getElementById("adr").value;
    var zip = document.getElementById("zip").value;
    var product = document.getElementById("product").value;
    var quantity = document.getElementById("quantity").value;
    var cname = document.getElementById("cname").value;
    var ccnum = document.getElementById("ccnum").value;
    var expmonth = document.getElementById("expmonth").value;
    var expyear = document.getElementById("expyear").value;
    var cvv = document.getElementById("cvv").value;
        
    // Проверяем, чтобы все обязательные поля были заполнены
    if (fname == "" || city == "" || adr == "" || zip == "" || product == "" || quantity == "" || cname == "" || ccnum == "" || expmonth == "" || expyear == "" || cvv == "") {
        alert("Пожалуйста, заполните все обязательные поля");
        return false;
    }
        
    // Проверяем, чтобы количество товара было положительным числом
    if (isNaN(quantity) || quantity <= 0) {
        alert("Пожалуйста, введите корректное количество товара");
        return false;
    }
        
    // Проверяем формат номера кредитной карты
    var cardNumberPattern = /^\d{4}-\d{4}-\d{4}-\d{4}$/;
        if (!cardNumberPattern.test(ccnum)) {
        alert("Пожалуйста, введите корректный номер кредитной карты");
        return false;
    }
        
    // Проверяем формат даты окончания действия карты
    var expDatePattern = /^(0[1-9]|1[0-2])\/\d{4}$/;
    if (!expDatePattern.test(expmonth) || !expDatePattern.test(expyear)) {
        alert("Пожалуйста, введите корректную дату окончания действия карты (мм/гггг)");
        return false;
    }
        
    // Если все проверки успешно пройдены, возвращаем true
    return true;
}
