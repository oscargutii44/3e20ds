class Nodo {
    constructor(dato,siguiente) {
        this.dato = dato;
        this.siguiente = siguiente;
    }
}


class ListaEnlazada {
    constructor() {
        this.inicio = null;
        this.tamaño = 0;
    }

    agregar(dato) {
        let nuevoNodo = new Nodo(dato,null);
        if (!this.inicio) {
            this.inicio = nuevoNodo;
        } else {
            let actual = this.inicio;
            while (actual.siguiente) {
                actual = actual.siguiente;
            }
            actual.siguiente = nuevoNodo;
        }
        this.tamaño++;
    }
}

let lista = new ListaEnlazada();
lista.agregar(100);
lista.agregar(200);
console.log(lista);