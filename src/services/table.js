const table = document.createElement('table');
    table.innerHTML = (`
    <tr>
        <th>Cidade</th>
        <th>Casos Confirmados</th>
        <th>Caso por 100k/Habitantes</th>
        <th>Número de Mortos</th>
        <th>Última Atualização</th>
    </tr>
    `);

    module.exports = table;