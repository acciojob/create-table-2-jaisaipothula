document.getElementById('createTableButton').addEventListener('click', createTable);

function createTable() {
    // Get the number of rows and columns from user input
    const rows = prompt("Input number of rows");
    const cols = prompt("Input number of columns");

    // Get the table element
    const table = document.getElementById('myTable');

    // Clear the existing table content (if any)
    table.innerHTML = '';

    // Create the specified number of rows and columns
    for (let i = 0; i < rows; i++) {
        const row = table.insertRow(); // Create a new row
        for (let j = 0; j < cols; j++) {
            const cell = row.insertCell(); // Create a new cell
            cell.textContent = `Row-${i} Column-${j}`; // Set cell text
        }
    }
}
