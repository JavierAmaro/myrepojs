
console.group("Cuadrados");

const ladoCuadrado =5;
console.log("El lado del cuadrado es: "+ ladoCuadrado);

const perimetroCuadrado = ladoCuadrado*4;
console.log ("el perimetro es:" + perimetroCuadrado);

const areacuadrado = ladoCuadrado*ladoCuadrado;
console.log ("El area es: " + areacuadrado);

const ladoTriangulo1 =6;
const ladoTriangulo2 =6;
const baseTriangulo =4;
let alturaTrinagulo = 5.5;

console.groupEnd();

console.group("Triangulo");

console.log("lado1 "+ladoTriangulo1+ "lado2 "+ladoTriangulo2+" base "+baseTriangulo);
let perimetroTriangulo = ladoTriangulo1+ladoTriangulo2+baseTriangulo;
let areaTriangulo = (baseTriangulo*alturaTrinagulo)/2;
console.log("El perimetro es: "+  perimetroTriangulo);
console.log ("area Triangulo es:"+ areaTriangulo)
console.groupEnd();


