/*Created by: Ali Al-gharibawi- 301238399, on:Jan26,2023*/
let maxNumOfRowsItems = 10, maxNumOfColsItems = 10;
window.addEventListener("load", (event) => {
    console.log("page is fully loaded");
    createTable(maxNumOfRowsItems, maxNumOfColsItems);
});


const createTableByUserInput = () => {
    if (numOfCols.value && numOfRows.value) {
        createTable(numOfRows.value, numOfCols.value);
    }
}

let rows; let cols;
createTable (rows, cols);

function createTable (rows, cols) {
    let output = "<table>";
    for (let numOfRowsCounter = 1; numOfRowsCounter<= rows; numOfRowsCounter++){ 
            output = output + "<tr>";
        for (let numOfColsCounter = 1; numOfColsCounter <= cols; numOfColsCounter++) {
            output = output + "<td>" + `${numOfColsCounter} X ${numOfRowsCounter} = ` + numOfRowsCounter*numOfColsCounter+ "</td>";
        }
        output = output + "</tr>";     
    }
    output = output + "</table>";
    document. getElementById("table") .innerHTML = output;
}
