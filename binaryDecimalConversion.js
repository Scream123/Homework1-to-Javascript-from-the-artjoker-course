document.addEventListener('DOMContentLoaded', function () {
    function binaryConversion(number) {
        let binaryNumber = '';
        if (typeof (number) != "undefined" && number !== null) {
            while (number !== 0) {
                binaryNumber = (number % 2) + Number(binaryNumber);
                number = Number(number / 2);
            }
        } else {
            document.getElementsByClassName('binary-result')[0].innerHTML = 'variable is not declared';

        }
        return binaryNumber;
    }

    document.getElementsByClassName('binary-result')[0].innerHTML = 'binary number = ' + binaryConversion(20) + '<br/>';

    function decimalConversion(binaryNumber) {
        let i = 0;
        let thisRegex = new RegExp("\\b[01]+\\b");
        if (thisRegex.test(binaryNumber)) {

            while (binaryNumber !== "") {
                i = (i * 2) + +(binaryNumber.toString().substr(0, 1));

                binaryNumber = binaryNumber.toString().substr(1);
            }
        } else {
            document.getElementsByClassName('decimal-result')[0].innerHTML = "No entry found.";
            return;
        }
        return i;
    }

    document.getElementsByClassName('decimal-result')[0].innerHTML = 'decimal number = ' + decimalConversion(101010) + '<br/>';
});