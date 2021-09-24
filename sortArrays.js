document.addEventListener('DOMContentLoaded', function () {
    let array = [8, 0, 2, 9, 4, 7, 6, 3, 1, 5];

    function sortIncrease(array) {
        for (let j = 0; j < array.length - 1; j++) {
            for (let i = 0; i < array.length - j - 1; i++) {
                if (array[i] < array[i + 1]) {
                    let result = array[i + 1];
                    array[i + 1] = array[i];
                    array[i] = result;
                }
            }
        }
        array.forEach(function (number) {
            document.getElementsByClassName('sort-increase-array-result')[0].innerHTML += number;
        });
    }

    function sortDecrease(array) {
        for (let j = 0; j < array.length - 1; j++) {
            for (let i = 0; i < array.length - j - 1; i++) {
                if (array[i] > array[i + 1]) {
                    let result = array[i + 1];
                    array[i + 1] = array[i];
                    array[i] = result;
                }
            }
        }
        array.forEach(function (number) {


            document.getElementsByClassName('sort-decrease-array-result')[0].innerHTML += number;
        });
    }

    sortIncrease(array);
    sortDecrease(array);
});