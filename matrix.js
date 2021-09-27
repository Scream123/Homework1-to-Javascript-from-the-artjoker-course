document.addEventListener('DOMContentLoaded', function () {

//Transpose Matrix
    let result = {};
    let count_row_index = 3;
    let count_column_index = 3;

    function transponse(matrix) {

        for (let row_index = 0;row_index < count_row_index; row_index++) {
            for (let column_index = 0; column_index < count_column_index; column_index++) {

                document.getElementsByClassName('matrix-result')[0].innerHTML += matrix[row_index][column_index] + " ";
            }
            addLineTranslation('matrix-result')
        }
        for (let row_index = 0;row_index < count_row_index; row_index++) {
            for (let column_index =row_index + 1; column_index < count_column_index; column_index++) {
                let n = matrix[row_index][column_index];
                matrix[row_index][column_index] = matrix[column_index][row_index];
                matrix[column_index][row_index] = n;
            }
        }
        for (let row_index = 0;row_index < count_row_index; row_index++) {
            for (let column_index = 0; column_index < count_column_index; column_index++)

                document.getElementsByClassName('matrix-transpose-result')[0].innerHTML += matrix[row_index][column_index] + " ";
            addLineTranslation('matrix-transpose-result')
        }
    }

    let matrix = [
        [1, 1, 1],
        [2, 2, 2],
        [3, 3, 3],
    ];
    transponse(matrix);

    function additionMatrix(matrix1, matrix2) {

        for (let row_index = 0;row_index < count_row_index; row_index++) {
            for (let column_index = 0; column_index < count_column_index; column_index++) {
                document.getElementsByClassName('additionMatrix1-result')[0].innerHTML += matrix1[row_index][column_index] + " ";
            }
            addLineTranslation('additionMatrix1-result')
        }
        for (let row_index = 0;row_index < count_row_index; row_index++) {
            for (let column_index = 0; column_index < count_column_index; column_index++) {
                document.getElementsByClassName('additionMatrix2-result')[0].innerHTML += matrix2[row_index][column_index] + " ";
            }
            addLineTranslation('additionMatrix2-result');

        }
        for (let row_index = 0;row_index < count_row_index; row_index++) {
            for (let column_index = 0; column_index < count_column_index; column_index++) {
                result = matrix1[row_index][column_index] + matrix2[row_index][column_index];
                document.getElementsByClassName('additionMatrix-result')[0].innerHTML += result + " ";
            }
            addLineTranslation('additionMatrix-result');
        }
        transformMatrix(matrix2);
    }

    matrix1 = [
        [0, 0, 0],
        [0, 5, -8],
        [0, 0, 0],
    ];

    matrix2 = [
        [-2, 0, -1],
        [0, 0, 1],
        [0, -1, 0],
    ];

    additionMatrix(matrix1, matrix2);

// Removing elements if there is zero and the sum of elements is positive
    function transformMatrix(array) {
        let columns_to_remove = [];
        let rows_to_remove = [];

        for (let row_index = 0; row_index < array.length; row_index++) {
            if (needDrop(array[row_index])) {
                rows_to_remove.push(row_index);
            }
            let column = [];
            for (let column_index = 0; column_index < array.length; column_index++) {
                column.push(array[column_index][row_index]);
            }
            if (needDrop(column)) {
                columns_to_remove = row_index;
            }
        }
        let result = array;

        result.forEach(function (row, row_index, result) {

            if (rows_to_remove.includes(row_index)) {
                result[row_index].splice(0);
            } else {
                columns_to_remove.forEach(function (column_index) {
                    result[row_index][column_index].splice(0);
                });
            }
        });

        for (let row_index = 0;row_index < count_row_index; row_index++) {

            for (let column_index = 0; column_index < count_column_index; column_index++) {

                if (result[row_index][column_index] !== undefined)
                    if (result[row_index][column_index] !== undefined)
                        document.getElementsByClassName('transform-matrix-result')[0].innerHTML += result[row_index][column_index] + " ";
            }
            addLineTranslation('transform-matrix-result')
        }
    }

//addition elements to remove of elements in array
    function needDrop(arr) {
        let sum = 0;
        let null_exist = false;
        arr.forEach(function (v) {
            if (v === 0) {
                null_exist = true;
            }
            sum += v;
        });
        return null_exist && sum > 0;
    }
});

//add <br/>
function addLineTranslation(classname) {

    return document.getElementsByClassName(classname)[0].appendChild(document.createElement('br'));
}
