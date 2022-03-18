class DispositivoEntrada{
    constructor(tipoEntrada, marca){
        this._tipoEntrada = tipoEntrada;
        this._marca = marca;
    }
    get tipoEntrada(){
        return this._tipoEntrada;
    }
    set tipoEntrada(tipoEntrada){
        this._tipoEntrada = tipoEntrada;
    }
    get marca(){
        return this._marca;
    }
    set marca(marca){
        this._marca = marca;
    }
}

class Raton extends DispositivoEntrada{
    static contadorRatones = 0;

    constructor(tipoEntrada, marca){
        super(tipoEntrada, marca);
        this._idRaton = ++Raton.contadorRatones;
    }
    get idRaton(){
        return this._idRaton;
    }
    toString(){
        return `${this._marca} - ${this._tipoEntrada}`
    }
}

let raton1 = new Raton('wireless', 'genius');
console.log(raton1.toString());

let raton2 = new Raton('usb', 'logitech');
console.log(raton2.toString());


class Teclado extends DispositivoEntrada{
    static contadorTeclados = 0;

    constructor(tipoEntrada, marca){
        super(tipoEntrada, marca)
        this._idTeclado = ++Teclado.contadorTeclados;
    }
    get idTeclado(){
        return this._idTeclado;
    }
    toString(){
        return `${this._marca} - ${this._tipoEntrada}`
    }
}

let teclado1 = new Teclado('usb', 'hp');
console.log(teclado1.toString());

let teclado2 = new Teclado('wireless', 'toshiba');
console.log(teclado2.toString());

class Monitor{
    static contadorMonitores = 0;

    constructor(marca, tamaño){
        this._marca = marca;
        this._tamaño = tamaño;
        this._idMonitor = ++Monitor.contadorMonitores
    }
    get marca(){
        return this._marca;
    }
    set marca(marca){
        this._marca = marca;
    }
    get tamaño(){
        return this._tamaño;
    }
    set tamaño(tamaño){
        this._tamaño = tamaño;
    }
    get idMonitor(){
        return this._idMonitor;
    }
    toString(){
        return `${this._marca} - ${this._tamaño}"`
    }
}

let monitor1 = new Monitor('Acer', '23"');
console.log(monitor1.toString());

let monitor2 = new Monitor('Dell', '28"');
console.log(monitor2.toString());

class Computadora{
    static contadorComputadoras = 0;

    constructor(nombre, monitor, teclado, raton){
        this._nombre = nombre;
        this._monitor = monitor;
        this._teclado = teclado;
        this._raton = raton;
        this._idComputadora = ++Computadora.contadorComputadoras;
    }
    get idComputadora(){
        return this._idComputadora;
    }
    toString(){
        return `${this._nombre}`
    }


}

let computadora1 = new Computadora('Dell', monitor1, teclado1, raton1);
console.log(computadora1.toString());
let computadora2 = new Computadora('Dell', monitor2, teclado2, raton2);
console.log(computadora2.toString());


class Orden{
    static contadorOrdenes = 0;

    constructor(computadora){
        this._idOrden = ++Orden.contadorOrdenes;
        this._computadora = computadora;
    }
    get computadora(){
        return this._computadora;
    }
    set computadora(computadora){
        this._computadora = computadora;
    }
    get idComputadora(){
        return this._idComputadora;
    }
    toString(){
        return `Orden: [idOrden: ${this._idOrden},\n${this._computadora}]`
    }
}

let orden1 = new Orden(`${computadora1}`);
console.log(orden1.toString());
let orden2 = new Orden(`${computadora2}`);
console.log(orden2.toString());


function aggComputadora(){

    //Computadora
    document.getElementById('formComputadora')
    
    let marcaComputadora = formComputadora['marcaComputadora'].value;

    const newComputadora = new Computadora(marcaComputadora);
    document.getElementById('newComputadora').innerHTML = `${newComputadora}`

    console.log(new Computadora());

    //Raton

    document.getElementById('formRaton')

    let tipoEntradaRaton = formRaton['tipoEntradaRaton'].value;
    let marcaRaton = formRaton['marcaRaton'].value;
 
    const newRaton = new Raton(tipoEntradaRaton, marcaRaton);
    document.getElementById('newRaton').innerHTML = `${newRaton}`

    //Teclado

    document.getElementById('formTeclado')

    let tipoEntradaTeclado = formTeclado['tipoEntradaTeclado'].value;
    let marcaTeclado= formTeclado['marcaTeclado'].value;
 
    const newTeclado = new Teclado(tipoEntradaTeclado, marcaTeclado);
    document.getElementById('newTeclado').innerHTML = `${newTeclado}`

    //Monitor

    document.getElementById('formMonitor')

    let marcaMonitor = formMonitor['marcaMonitor'].value;
    let tamañoMonitor= formMonitor['tamañoMonitor'].value;
 
    const newMonitor = new Monitor(marcaMonitor, tamañoMonitor);
    document.getElementById('newMonitor').innerHTML = `${newMonitor}`

}
