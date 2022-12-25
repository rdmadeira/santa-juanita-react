// No estoy usando este archivo, se usó a principio, pero cambié a fetch de un archivo json en data

import {
  createVelas,
  createSalesdeBano,
  createDifusoresDeVarilla,
  createBombasefervecentes,
} from './productclases.mjs';

const frutosDelBosque = createVelas(
  'Frutos del Bosque',
  'Vela de soja natural. Color rosa. Esencia de frutos rojos y del bosque. Recipiente en cuenco de madera de guayubira. Encender por primera vez por un periodo de al menos 1hora. Recortar periódicamente la mecha. No usar mas de 5-6 horas seguidas. Duración 45-55 Hs',
  '../../assets/productos/velas/frutos-del-bosque.jpg',
  'vela soja aromatica frutos del bosque color rosa',
  'rosa',
  850
);

const vainillaPrimavera = createVelas(
  'Vainilla Primavera',
  'Vela de soja natural. Color blanco. Esencia de vainilla. Recipiente en vidrio. Encender por primera vez por un periodo de al menos 1hora. Recortar periódicamente la mecha. No usar mas de 5-6 horas seguidas. Duración 55-60 Hs',
  '../../assets/productos/velas/vainilla.jpg',
  'vela soja aromatica vainilla color blanco',
  'blanco',
  800
);

const lavanda = createVelas(
  'Lavanda',
  'Vela de soja natural. Color violeta. Esencia de lavanda. Recipiente en papel reciclado. Encender por primera vez por un periodo de al menos 1 hora. Recortar periódicamente la mecha. No usar mas de 5-6 horas seguidas. Duración 40-45 Hs',
  '../../assets/productos/velas/lavanda.jpg',
  'vela soja aromatica lavanda color violeta',
  'violeta',
  700
);
lavanda.setPromo(true);

const maracuya = createVelas(
  'Maracuya',
  'Vela de soja natural. Color amarillo. Esencia de lavanda. Recipiente en vidrio. Encender por primera vez por un periodo de al menos 1hora. Recortar periódicamente la mecha. No usar mas de 5-6 horas seguidas. Duración 40-45 Hs',
  '../../assets/productos/velas/maracuya.jpg',
  'vela soja aromatica maracuya color amarillo',
  'amarillo',
  700
);

/* ************************************************** */
const jasmin = createSalesdeBano(
  'Jasmin',
  'Sal de Baño composto por sal marina y sal Epsom. Agrega las sales de baño mientras llenas la bañera para asegurar que se derriten completamente y aportan el máximo de sus cualidades. Rejalante y controla la ansiedad. Desintoxica la piel',
  '../../assets/productos/sales/jasmin.jpg',
  'sal sales baño jasmin aroma marino color blanco',
  'blanco',
  480
);

const petalasDeRosas = createSalesdeBano(
  'Petalas de Rosas',
  'Sal de Baño composto por sal marina y sal Epsom. Agrega las sales de baño mientras llenas la bañera para asegurar que se derriten completamente y aportan el máximo de sus cualidades. Rejalante y  neutralizante. Desintoxica la piel',
  '../../assets/productos/sales/petalas-de-rosas.jpg',
  'sal sales baño petalas rosas aroma marino color rojo',
  'rojo',
  480
);

const naranja = createSalesdeBano(
  'Naranja',
  'Sal de Baño composto por sal marina y sal Epsom. Envasado en bolsa transparente. Agrega las sales de baño mientras llenas la bañera para asegurar que se derriten completamente y aportan el máximo de sus cualidades. Energizante. Desintoxica la piel',
  '../../assets/productos/sales/naranja.jpg',
  'sal sales baño jasmin aroma marino color amarillo',
  'amarillo',
  480
);

/* *************************************************** */

const floresBlancas = createDifusoresDeVarilla(
  'Flores Blancas',
  ' Difusor de varillas aroma flores blancas en recipiente de vidrio. Fragancia que acalma y ilumina. Las varillas pueden ser re-utilizadas  siempre y solo si se usa con la misma fragancia original del envase',
  '../../assets/productos/difusores/flores-blancas.jpg',
  'difusor difusores varillas vidrio flores blancas color transparente',
  'transparente',
  680
);

const vainilla = createDifusoresDeVarilla(
  'Vainilla',
  ' Difusor de varillas aroma vainilla en recipiente de vidrio. Fragancia que relaja. Las varillas pueden ser re-utilizadas  siempre y solo si se usa con la misma fragancia original del envase',
  '../../assets/productos/difusores/vainilla.jpg',
  'difusor difusores varillas vidrio vainilla color transparente',
  'transparente',
  680
);

const bambooYSandalo = createDifusoresDeVarilla(
  'Bamboo y Sandalo',
  ' Difusor de varillas aroma bamboo con notas de sandalo, en recipiente de vidrio. Fragancia que energiza el ambiente. Las varillas pueden ser re-utilizadas  siempre y solo si se usa con la misma fragancia original del envase',
  '../../assets/productos/difusores/bamboo.jpg',
  'difusor difusores bamboo sandalo vidrio color transparente',
  'transparente',
  680
);

/* ******************************************************* */

const teVerde = createBombasefervecentes(
  'Té Verde',
  'Bombas de baño son excelentes para un baño de inmersión, además de relajar, hidratan la piel por sus aceites esenciales. Fragancia floral que combina acordes verdes con sándalo y patchouli.No recomendados para menores de 8 años.',
  '../../assets/productos/bombas/te-verde.jpg',
  'bomba efervecente baño floral flor sandalo color verde',
  'verde',
  920
);

const petalasDeRosasBomba = createBombasefervecentes(
  'Pétalas de Rosas',
  'Bombas de baño son excelentes para un baño de inmersión, además de relajar, hidratan la piel por sus aceites esenciales. Fragancia floral que combina acordes verdes con sándalo y patchouli.No recomendados para menores de 8 años.',
  '../../assets/productos/bombas/petalas-de-rosas.jpg',
  'bomba efervecente baño petalas rosas color rosa',
  'rosa',
  920
);

/* class ListaDeProductos {
  constructor(velas, sales, difusores, bombas) {
    this.velas = velas;
    this.sales = sales;
    this.bombas = bombas;
    this.difusores = difusores;
    this.todoslosproductos = [].concat(velas, sales, difusores, bombas);
  }
} */

function createListadeProductos() {
  const velas = [frutosDelBosque, vainillaPrimavera, lavanda, maracuya];
  let actualStockVelas = [
    [10, 8],
    [10, 8],
    [10, 8],
    [4, 2],
  ];
  velas.forEach((item, index) => (item.setStock = actualStockVelas[index]));

  const sales = [jasmin, petalasDeRosas, naranja];
  let actualStockSales = [15, 15, 15];
  sales.forEach((item, index) => (item.setStock = actualStockSales[index]));

  const difusores = [floresBlancas, vainilla, bambooYSandalo];
  let actualStockDif = [10, 12, 10];
  difusores.forEach((item, index) => (item.setStock = actualStockDif[index]));

  const bombas = [teVerde, petalasDeRosasBomba];
  let actualStockBombas = [8, 8];
  bombas.forEach((item, index) => (item.setStock = actualStockBombas[index]));

  const todoslosproductos = [].concat(velas, sales, difusores, bombas);

  return {
    velas: velas,
    bombas: bombas,
    difusores: difusores,
    sales: sales,
    todoslosproductos: todoslosproductos,
  };
}

const productos = createListadeProductos();

export default productos;
