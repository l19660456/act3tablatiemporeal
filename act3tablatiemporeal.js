// Función para filtrar la tabla
function filtrarTabla() {
    // Obtener el valor del input de búsqueda
    let input = document.getElementById('searchInput');
    let filter = input.value.toLowerCase();
    let table = document.getElementById('dataTable');
    let tr = table.getElementsByTagName('tr');

    // Recorrer todas las filas de la tabla (excepto el encabezado)
    for (let i = 1; i < tr.length; i++) {
        let td = tr[i].getElementsByTagName('td');
        let mostrarFila = false;

        // Verificar si alguna de las celdas contiene el texto buscado
        for (let j = 0; j < td.length; j++) {
            if (td[j]) {
                let textoCelda = td[j].textContent || td[j].innerText;
                if (textoCelda.toLowerCase().indexOf(filter) > -1) {
                    mostrarFila = true;
                    break;
                }
            }
        }

        // Mostrar u ocultar la fila según el resultado
        if (mostrarFila) {
            tr[i].style.display = "";
        } else {
            tr[i].style.display = "none";
        }
    }
}
