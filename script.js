document.getElementById('createTableButton').addEventListener('click', createTable);

function createTable() {
    // Prompt user for number of rows and columns
    const rows = prompt("Input number of rows");
    const cols = prompt("Input number of columns");

    // Validate user input
    if (isNaN(rows) || isNaN(cols) || rows <= 0 || cols <= 0) {
        alert("Please enter valid positive numbers for rows and columns.");
        return;
    }

    // Get the table element
    const table = document.getElementById('myTable');

    // Clear any existing content in the table
    table.innerHTML = '';

    // Create the specified number of rows and columns
    for (let i = 0; i < rows; i++) {
        const row = table.insertRow(); // Create a new row
        for (let j = 0; j < cols; j++) {
            const cell = row.insertCell(); // Create a new cell
            cell.textContent = `Row-${i} Column-${j}`; // Set the cell text
        }
    }
}
