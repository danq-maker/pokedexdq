
export class Pokemon { /*Representación de un objeto existente*/
/* 1. POO */
/*No movimientos no habs */
/*🟩🟩🟩Atributos*/
private id: number;
private nombre: string;
private vida: number;
private ataque: number;
private defensa: number;
private tipo: string;

/*🟧🟧🟧public */
public constructor(id_recibido: number, nombre_recibido: string, vida_recibido: number, ataque_recibido: number, defensa_recibido: number, tipo_recibido: string){
    this.id = id_recibido; //Recibiendo el id como parametro en mi clase
    this.nombre = nombre_recibido; //Recibiendo la vida como parametro en mi clase
    this.vida = vida_recibido; //Recibiendo la vida como parametro en mi clase
    this.ataque = ataque_recibido; //Recibiendo el ataque como parametro en mi clase
    this.defensa = defensa_recibido; //Recibiendo la defensa como parametro en mi clase
    this.tipo = tipo_recibido; //Recibiendo el tipo como parametro en mi clase
}
/*🟥🟥🟥Métodos*/
public atacar(){
    console.log("Estoy atacando ⚔️");                                                                                                                                                                                                                                                    
}
public defender(){
    console.log("Estoy defendiendo 🛡️")
}
public quitarVida(cantidadQuitar: number){
    this.vida = this.vida - cantidadQuitar;
}
public agregarVida(cantidadAgregar: number){
    this.vida = this.vida + cantidadAgregar;
}
public mostrarInformacion(){
    console.log("ID: " + this.id + " Nombre: " + this.nombre + " Vida: " + this.vida + " Ataque: " + this.ataque + " Defensa: " + this.defensa + " Tipo: " + this.tipo);
}


}
/*2.- Encapslamiento*/
// export class ejemplo{  // La clase ejemplo no es necesaria, la lógica se puede ejecutar directamente

//Crear instancias de la clase Pokemon
const p1:Pokemon = new Pokemon(1, "Pikachu", 100, 50, 40, "Electrico");
const p2: Pokemon = new Pokemon(2, "Charmander", 80, 70, 40, "Fuego");

//Mostrar la información de los Pokémon
    p1.mostrarInformacion();
    p2.mostrarInformacion();

// }
