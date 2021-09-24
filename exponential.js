document.addEventListener('DOMContentLoaded', function () {

    function exponential(number, degree) {

        let exponent = 1;
        for (let i = 1; i <= degree; i++) {
            exponent *= number;
        }
        return "Число " + number + " в " + degree + "-ой степени: " + Number(exponent);
    }

    document.getElementsByClassName("header-exponential")[0].innerText += "Возведение в степень: ";
    document.getElementsByClassName('exponential-result')[0].innerHTML = exponential(2, 5) + "<br/>";
});