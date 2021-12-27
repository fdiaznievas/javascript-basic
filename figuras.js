//Código del cuadrado
console.group("Cuadrados");
// const ladoCuadrado = 5;
// console.log("El lado del cuadrado es: " + ladoCuadrado + "cm");

function perimetroCuadrado(lado){
    return lado * 4;
}
// console.log("El perimetro del cuadrado es: " + perimetroCuadrado + "cm");

// const areaCuadrado = ladoCuadrado * ladoCuadrado;
function areaCuadrado(lado) {
    return lado * lado;
}

// console.log("El area del cuadrado es: " + areaCuadrado + "cm^2");

console.groupEnd();

//Código del triangulo
console.group("Triangulos");

// const ladoTriangulo1 = 6;
// const ladoTriangulo2 = 6;
// const baseTriangulo = 4;
// const alturaTriangulo = 5.5;
function perimetroTriangulo(lado1, lado2, base) {
    return lado1 + lado2 + base;
};

function areaTriangulo(lado1, lado2, lado3){
    const semip = (lado1 + lado2 + lado3)/2;

    const area = Math.sqrt(semip*(semip-lado1)*(semip-lado2)*(semip-lado3));
    return area;
} 

// console.log(`Los lados del triangulo miden: 
// ${ladoTriangulo1}cm, ${ladoTriangulo2}cm y ${baseTriangulo}cm `);
// console.log("La altura del triangulo es: " + alturaTriangulo + "cm");
// console.log("El perimetro del triangulo es: " + perimetroTriangulo + "cm");
// console.log("El area del triangulo es: " + areaTriangulo + "cm^2");


console.groupEnd();

//Código del circulo
console.group("Circulos");

// // Radio
// const radioCirculo = 4;

// // Diametro
// const diametroCirculo = radioCirculo * 2;
function diametroCirculo(radio) {
    return radio * 2;    
}

// PI
const pi = Math.PI;

// Circunferencia
function perimetroCirculo(radio){
    const diametro = diametroCirculo(radio);
    return diametro * pi;
}

// Area
function areaCirculo(radio){
    return (radio * radio) * pi;
}

// console.log(`El radio del circulo es:${radioCirculo}cm ,
// El diametro del circulo es: ${diametroCirculo}cm ,
// El valor de PI es: ${baseTriangulo}cm ,
// La circunferencia del circulo es: ${perimetroCirculo}cm y
// El área del circulo es: ${areaCirculo}cm^2`);

console.groupEnd();

//Código del cuadrado


// AQUI INTERACTUAMOS CON EL HTML

function calcularPerimetroCuadrado() {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
    return ;   
       
}

function calcularAreaCuadrado() {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const area = areaCuadrado(value);
    alert(area);
    return ;
}
function calcularPerimetroTriangulo() {
    const input1 = document.getElementById("InputTriangulo");
    const input2 = document.getElementById("InputTriangulo2");
    const input3 = document.getElementById("InputTriangulo3");
    const value1 = parseInt(input1.value) ;
    const value2 = parseInt(input2.value);
    const value3 = parseInt(input3.value);

    console.log(typeof(value3))
    const perimetro = perimetroTriangulo(value1, value2, value3);
    alert(perimetro);
    return ;   
       
}

function calcularAreaTriangulo() {
    const input = document.getElementById("InputTriangulo");
    const input2 = document.getElementById("InputTriangulo2");
    const input3 = document.getElementById("InputTriangulo3");
    const value1 = parseInt(input.value);
    const value2 = parseInt(input2.value);
    const value3 = parseInt(input3.value);

    const area = areaTriangulo(value1, value2, value3);
    alert("El area es: " + area);
    return ;
}
function calcularPerimetroCirculo() {
    const input = document.getElementById("InputCirculo");
    const value = input.value;

    const perimetro = perimetroCirculo(value);
    alert(perimetro);
    return ;   
       
}

function calcularAreaCirculo() {
    const input = document.getElementById("InputCirculo");
    const value = input.value;

    const area = areaCirculo(value);
    alert(area);
    return ;
}