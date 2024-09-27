document.getElementById('createTableButton').addEventListener('click', createTable);

function createTable() {
    const rows = prompt("Input number of rows");
    const rn = parseInt(rows);

    const columns = prompt("Input number of columns");
    const cn = parseInt(columns);

    const table = document.getElementById('myTable');
    table.innerHTML = ''; // Clear any existing content

    for (let i = 0; i < rn; i++) {
        const row = document.createElement('tr');
        for (let j = 0; j < cn; j++) {
            const cell = document.createElement('td');
            cell.textContent = `Row-${i} Column-${j}`;
            row.appendChild(cell);
        }
        table.appendChild(row);
    }
}
