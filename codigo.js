alert("BIENVENIDOS A CONCESIONARIA EL-ROI.")

let saludo=prompt("Hola estimado, nos alegra que seas parte de nuestro equipo; Ingrese su nombre para ser presentado y se le diga el trabajo a realizar.");

alert("Hola "+saludo+", a continuación debes ingresar los vehiculos, para sumarlos a la lista de venta.")

class Auto{

    constructor(Marca,Modelo,Trasmisión,Combustible,Tracción,Kilometros,Id){

this.Marca=Marca;
this.Modelo=parseInt(Modelo);
this.Trasmisión=Trasmisión;
this.Combustible=Combustible;
this.Tracción=Tracción;
this.Kilometros=Kilometros;
this.Id=parseInt(Id);
    }
asignarId(Array){
    this.Id= Array.length;
}   
 }
 
const autos= [

    new Auto("Peugeot 308",2023,"Manual","Nafta","Delantera","0KM", 1),
    new Auto("Renault Sandero 1.6","2023","Manual","Nafta","Delantera","0KM",2),
    new Auto("Renault 18","1993","Manual","Nafta-Gnc","Delatera","23.185KM",3),
    new Auto("Fiat Palio 1.6","2014","Manual","Nafta","Delantera","52.185KM",4),
]

let anotar= true;

while (anotar){

let ingresar=prompt("Ingresa los datos del vehiculo: Marca,Modelo,Trasmisión,Combustible,Tracción,Kilometros; Separados por una barra diagonal invertida ('\\'), Ingresa X para finalizar.");
if (ingresar.toUpperCase()=="X"){
anotar = false;
break;
}

let datos= ingresar.split("\\");

const auto= new Auto(datos[0],datos[1],datos[2],datos[3],datos[4],datos[5],datos[6]);
console.log(auto);
autos.push(auto);
auto.asignarId(autos);
console.log(autos);
}

let criterio= prompt("Escribe:  (\n1) para Mostrar el listado en orden alfabético");

function ordenar(criterio,array){
let arrayOrdenado= array.slice(0);

switch(criterio){
    case "1":
        let nombreCreciente= arrayOrdenado.sort((a,b) => a.Marca.localeCompare(b.Marca))
    return nombreCreciente;
    }
}

function mostrarResultados(array){

    let info="";
    array.forEach(element => {
        info+="Marca: "+element.Marca+ " \nModelo: "+element.Modelo+ " \n Trasmisión: "+element.Trasmisión+ " \n Combustible: "+element.Combustible+" \nTracción: "+element.Tracción+ " \nKilometros: "+element.Kilometros+ "\n1";
    
    });
    return info;
}
alert("Listado de venta:  "+mostrarResultados(ordenar(criterio,autos)));
alert(saludo+" Gracias por tu trabajo.")
