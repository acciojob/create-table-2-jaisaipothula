document.getElementById('createTableButton').addEventListener('click', createTable);

function createTable() {
    // Prompt for the number of rows
    const rows = prompt("Input number of rows");
    // Prompt for the number of columns
    const columns = prompt("Input number of columns");

    // Get the table element by its ID
    const table = document.getElementById('myTable');

    // Clear any existing rows in the table
    table.innerHTML = '';

    // Loop through to create rows and columns
    for (let i = 0; i < rows; i++) {
        // Create a new row
        const row = table.insertRow(i);
        
        for (let j = 0; j < columns; j++) {
            // Create a new cell in the row
            const cell = row.insertCell(j);
            // Set the text content of the cell
            cell.textContent = `Row-${i} Column-${j}`;
        }
    }
}