document.addEventListener('DOMContentLoaded', function () {
    function fibonacci(number) {
        let interval = 3;

        if (number < interval) {
            return 1;
        } else {
            return fibonacci(number - 1) + fibonacci(number - 2);
        }
    }

    document.getElementsByClassName("header-fibonacci")[0].innerText += "Числа фибоначчи: ";

    for (number = 1; number <= 16; number++) {
        let result = fibonacci(number) + ", ";

        document.getElementsByClassName("fibonacci-result")[0].innerText += result;
    }
});