
const SELECTED_CLASS = 'seleccionado';
const invalido = 'invalido';
let memoria = [];
let operacionActual = null;
let estado = false;


//Variables de los botones de interfaz

//Pantalla
const display = document.querySelector('.display');

// Operadores
const ac = document.querySelector('#ac');
const igual = document.querySelector('#igual');
const porcentaje = document.querySelector('#porcentaje');
const punto = document.querySelector('#punto');
const valor = document.querySelector('#valor');
const dividir = document.querySelector('#dividir'); 
const multiplicar = document.querySelector('#multiplicar');
const suma = document.querySelector('#suma'); 
const resta = document.querySelector('#resta'); 

//Numeros
const cero = document.querySelector('#cero');
const uno = document.querySelector('#uno');
const dos = document.querySelector('#dos');
const tres = document.querySelector('#tres');
const cuatro = document.querySelector('#cuatro');
const cinco = document.querySelector('#cinco');
const seis = document.querySelector('#seis');
const siete = document.querySelector('#siete');
const ocho = document.querySelector('#ocho');
const nueve = document.querySelector('#nueve');

const operadores = [ { elemento: dividir, op: '/' }, { elemento: multiplicar, op: '*' }, { elemento: suma, op: '+' }, { elemento: resta, op: '-' }];
const listaNum = [cero, uno, dos, tres, cuatro, cinco, seis, siete, ocho, nueve];

//Funcion para cambiar el valor en pantalla
const cambiarDisplay = (value) => {
  let displayValue = value;
  if (!Number.isFinite(Number(value))) {
    displayValue = 'Error';
    cambiarError();
  }
  display.innerHTML = displayValue;
};

const reset = () => {
  memoria = [];
  operacionActual = null;
  estado = false;
};

const operador_ac = () => {
  ac.innerHTML = 'AC';
  cambiarDisplay(0);
  reset();
  removerError();
};

//Funciones para cada operador

/** Va a recorrer cada operador del arreglo
 * y enviarlo con la operación correspondiente */
operadores.forEach((operador) => {
  operador.elemento.addEventListener('click', () =>
    operacion(operador.elemento, operador.op)
  );
});

//Funcion para las operaciones
const operacion = (operatorElement, operatorIdentifier) => {
  if (estado) return;
  if (operacionActual !== null && memoria.length > 1) {
    removerSel(operacionActual);
  }
  agregarSel(operatorElement);
  if (memoria.length === 0) {
    memoria.push(display.innerHTML);
  }
  if (memoria.length > 1) {
    operador_Igual();
    memoria.push(display.innerHTML);
  }
  memoria.push(operatorIdentifier);
  operacionActual = operatorElement;
};

const operador_Igual = () => {
  if (estado) return;
  const operation = `${memoria.join(' ')} ${display.innerHTML}`;
  cambiarDisplay(eval(operation));
  reset();
};

const operador_porcentaje = () => {
  if (estado) return;
  cambiarDisplay(Number(display.innerHTML) / 100);
};

const operador_punto = () => {
  if (estado) return;
  const actualDisplay = display.innerHTML;
  if (actualDisplay.indexOf('.') > 0) return;
  cambiarDisplay(`${actualDisplay}.`);
};

const operador_valor = () => {
  if (estado) return;
  const actualDisplay = display.innerHTML;
  let nuevoDisplay = Number(actualDisplay) * -1;
  if (actualDisplay === '0') {
    nuevoDisplay = '-0';
  }
  cambiarDisplay(nuevoDisplay);
};

const agregarSel = (elemento) => {
  elemento.classList.add(SELECTED_CLASS);
};

const removerSel = (elemento) => {
  elemento.classList.remove(SELECTED_CLASS);
};


const numeros = (n) => {
  if (estado) return;
  if (operacionActual !== null) {
    removerSel(operacionActual);
    cambiarDisplay('');
    operacionActual = null;
  }
  ac.innerHTML = 'C';
  const actualDisplay = display.innerHTML;
  const nuevoDisplay = Number(`${actualDisplay}${n}`);
  cambiarDisplay(nuevoDisplay);
};


listaNum.forEach((n, i) => {
  n.addEventListener('click', () => numeros(i));
});


//Error
const cambiarError = () => {
  estado = true;
  listaNum.forEach((n) => {
    n.classList.add(invalido);
  });
  operadores.forEach((op) => {
    op.elemento.classList.add(invalido);
  });
  igual.classList.add(invalido);
  punto.classList.add(invalido);
  porcentaje.classList.add(invalido);
  valor.classList.add(invalido);
};

const removerError = () => {
  estado = false;
  listaNum.forEach((n) => {
    n.classList.remove(invalido);
  });
  operadores.forEach((op) => {
    op.elemento.classList.remove(invalido);
  });
  igual.classList.remove(invalido);
  punto.classList.remove(invalido);
  porcentaje.classList.remove(invalido);
  valor.classList.remove(invalido);
};

// Action listener de los botones
punto.addEventListener('click', operador_punto);
ac.addEventListener('click', operador_ac);
igual.addEventListener('click', operador_Igual);
porcentaje.addEventListener('click', operador_porcentaje);
valor.addEventListener('click', operador_valor);