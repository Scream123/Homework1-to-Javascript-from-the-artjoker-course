document.addEventListener('DOMContentLoaded', function () {

    function parseNumbers(array) {
        let zeroCount = 0;
        let posCount = 0;
        let negativeCount = 0;
        let simple = 0;

        array.forEach(function (item) {
            if (item === 0) {
                zeroCount++;
            } else if (item < 0) {
                negativeCount++;
            } else if (item > 0) {
                posCount++;
            }
            if (isPrime(item)) {
                simple++;
            }
        });

        showNumber('parse-numbers-zero-result', 'Нулевое', zeroCount);
        addLineTranslation('parse-numbers-zero-result')

        showNumber('parse-numbers-positive-result', 'Положительное', posCount);
        addLineTranslation('parse-numbers-positive-result')

        showNumber('parse-numbers-negative-result', 'Отрицательное', negativeCount);
        addLineTranslation('parse-numbers-negative-result')

        showNumber('parse-numbers-simple-result', 'Простое', simple);
        addLineTranslation('parse-numbers-simple-result')


        zeroCount = (zeroCount / array.length) * 100;
        showNumber('percent-numbers-zero-result', 'Нулевое', zeroCount);
        addLineTranslation('percent-numbers-zero-result')

        posCount = (posCount / array.length) * 100;
        showNumber('percent-numbers-positive-result', 'Положительное', posCount);
        addLineTranslation('percent-numbers-positive-result')

        negativeCount = (negativeCount / array.length) * 100;
        showNumber('percent-numbers-negative-result', 'Отрицательное', negativeCount);
        addLineTranslation('percent-numbers-negative-result')

        simple = (simple / array.length) * 100;
        showNumber('percent-numbers-simple-result', 'Простое', simple);
        addLineTranslation('percent-numbers-simple-result')
    }

    function isPrime(num) {

        if (num === 1) return false;
        if (num === 2) return true;
        if (num % 2 === 0) {
            return false;
        }
        let ceil = Math.ceil(Math.sqrt(num));
        for (let i = 3; i <= ceil; i = i + 2) {
            if (num % i === 0) return false;
        }
        return true;
    }

    let array = [-1, -2, -3, 0, 0, 5, 12, 0, -10, 2, 5];
    parseNumbers(array);
});

function showNumber(className, typeNumber, number) {
    return document.getElementsByClassName(className)[0].innerHTML = typeNumber + " число: " + Math.round(number);
}

function addLineTranslation(classname) {

    return document.getElementsByClassName(classname)[0].appendChild(document.createElement('br'));
}