//Código del cuadrado
console.group("Cuadrados");
const ladoCuadrado = 5;
console.log("El lado del cuadrado es: " + ladoCuadrado + "cm");

const perimetroCuadrado = ladoCuadrado * 4;
console.log("El perimetro del cuadrado es: " + perimetroCuadrado + "cm");

const areaCuadrado = ladoCuadrado * ladoCuadrado;
console.log("El area del cuadrado es: " + areaCuadrado + "cm^2");

console.groupEnd();

//Código del triangulo
console.group("Triangulos");

const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo = 4;
const alturaTriangulo = 5.5;
const perimetroTriangulo = ladoTriangulo1+ladoTriangulo2+baseTriangulo;
const areaTriangulo = (baseTriangulo * alturaTriangulo) / 2;

console.log(`Los lados del triangulo miden: 
${ladoTriangulo1}cm, ${ladoTriangulo2}cm y ${baseTriangulo}cm `);
console.log("La altura del triangulo es: " + alturaTriangulo + "cm");
console.log("El perimetro del triangulo es: " + perimetroTriangulo + "cm");
console.log("El area del triangulo es: " + areaTriangulo + "cm^2");


console.groupEnd();

//Código del circulo
console.group("Circulos");

// Radio
const radioCirculo = 4;

// Diametro
const diametroCirculo = radioCirculo * 2;

// PI
const pi = Math.PI;

// Circunferencia
const perimetroCirculo = diametroCirculo * pi;

// Area
const areaCirculo = pi * (radioCirculo ^2);

console.log(`El radio del circulo es:${radioCirculo}cm ,
El diametro del circulo es: ${diametroCirculo}cm ,
El valor de PI es: ${baseTriangulo}cm ,
La circunferencia del circulo es: ${perimetroCirculo}cm y
El área del circulo es: ${areaCirculo}cm^2`);

console.groupEnd();

//Código del cuadrado