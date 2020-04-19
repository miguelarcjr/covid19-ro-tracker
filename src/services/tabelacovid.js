import {moment, chartjs, dados, createElement, table} from './const';
moment.locale('pt-br');

export default function tabela(res){
    let mortos = 0;
    let confirmados = 0;
    let city = [];
    let confirm = [];
    for(let obj of res.data.results){
        const tr = document.createElement('tr');
        const tdCity = createElement('td', obj.city);
        const tdConfirmed = createElement('td', obj.confirmed);
        const td100kConfirmed = createElement('td', obj.confirmed_per_100k_inhabitants);
        const tdDeaths = createElement('td', obj.deaths);
        const date = createElement('td', moment(obj.date).fromNow());
        if(obj.city === null) continue;
        mortos += obj.deaths;
        confirmados += obj.confirmed;
        city.push(obj.city);
        confirm.push(obj.confirmed);
        tr.appendChild(tdCity);
        tr.appendChild(tdConfirmed)
        tr.appendChild(td100kConfirmed)
        tr.appendChild(tdDeaths)
        tr.appendChild(date)
        table.appendChild(tr);
    }
    document.body.appendChild(table);

    const h2Confirmados = createElement('h2', `Total de Casos Confirmados: ${confirmados}`);
    const h2Mortos = createElement('h2', `Total de Casos Fatais: ${mortos}`);
    document.body.appendChild(h2Confirmados);
    document.body.appendChild(h2Mortos);

    return {city: city, confirm: confirm};
}

