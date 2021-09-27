document.addEventListener('DOMContentLoaded', function () {

    function exponential(number, degree) {
        let message = '';
        let exponent = 1;

        if (!Number.isInteger(degree) || degree <= 0) {
            message = " Параметр " + degree + "должен быть числом и больше нуля<br/>"
        } else {
            for (let i = 1; i <= degree; i++) {
                message = "Число " + number + " в " + degree + "-ой степени: " + Number(exponent);
                exponent *= number;
            }
        }

        return document.getElementsByClassName('exponential-result')[0].innerHTML = message + "<br/>";
    }

    exponential(2, 0);
});
