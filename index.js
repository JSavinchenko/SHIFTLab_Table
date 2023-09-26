let btn = document.querySelector('.search-btn');

btn.addEventListener('click', function search() {
    let inp = document.querySelector(".search-input");
    let value = inp.value.trim().toLowerCase();
    let firstColumnItems = document.querySelectorAll('.data:first-child');
    let result = document.getElementById('result');
    let counter = 0;

    if (value != "") {
        firstColumnItems.forEach(function(el) {
            if (el.innerText.toLowerCase().indexOf(value) != -1) {
                el.style.cssText = "color: red;";
                counter += 1;
            } else {
                el.removeAttribute("style");
            }
            
            if (counter != 0) {
                result.innerText = 'Количество совпадений: ' + counter;
            } else {
                result.innerText = 'Ничего не найденно';
            }
        });
    } else {
        firstColumnItems.forEach(function(el) {
            el.removeAttribute("style");
        });
        result.innerText = 'Введите название';
    }
});