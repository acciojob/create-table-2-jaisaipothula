document.getElementById('createTableButton').addEventListener('click', createTable);

function createTable() {
    // Get the number of rows from user input
    const rows = prompt("Input number of rows");
    const rn = parseInt(rows);

    // Get the number of columns from user input
    const columns = prompt("Input number of columns");
    const cn = parseInt(columns);

    // Reference to the table
    const table = document.getElementById('myTable');
    table.innerHTML = ''; // Clear any existing content

    // Create the table rows and cells
    for (let i = 0; i < rn; i++) {
        const row = document.createElement('tr'); // Create a new row
        for (let j = 0; j < cn; j++) {
            const cell = document.createElement('td'); // Create a new cell
            cell.textContent = `Row-${i} Column-${j}`; // Set cell text
            row.appendChild(cell); // Append cell to the row
        }
        table.appendChild(row); // Append row to the table
    }
}

