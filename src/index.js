import 'core-js/stable'
import 'regenerator-runtime/runtime'
import {dados} from './services/const';
import tabela from './services/tabelacovid';
const grafico = require('./services/grafico');

async function Main() {
    const res = await dados.getAll();
    const {city, confirm} = tabela(res);
    await grafico(city, confirm);
}
Main();




