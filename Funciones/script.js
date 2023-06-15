// sumar(a, b)------------------------------------------------
//Crear una función sumar que tome como argumentos dos números y devuelva la suma de ellos

// const sumar = (a, b) => {
//     return Number(a) + Number(b);
// }

// console.log(sumar(2, 3)) // 5
// console.log(sumar(1.2, 3.4)) // 4.6
// console.log(sumar(3, -5)) // -2

//restar(a, b)------------------------------------------------
//Crear una función restar que tome como argumentos dos números y devuelva la resta de ellos

// const restar = (a, b) => {
//     return Number(a) - Number(b);
// }

// console.log(restar(3, 2)) // 1
// console.log(restar(10, 5.5)) // 4.5
// console.log(restar(3, 5)) // -2

//multiplicar(a, b)------------------------------------------------
//Crear una función multiplicar que tome como argumentos dos números y devuelva la multiplicación de ellos

// const multiplicar = (a, b) => {
//     return Number(a) * Number(b);
// }

// console.log(multiplicar(2, 3)) // 6
// console.log(multiplicar(4, 0.5)) // 2

//dividir(a, b)------------------------------------------------
//Crear una función dividir que tome como argumentos dos números y devuelva la suma de ellos

// const dividir = (a, b) => {
//     return Number(a) / Number(b);
// }

// console.log(dividir(12, 3)) //4
// console.log(dividir(8, 4)) //2
// console.log(sumar(30, 6)) //5                ??????????????

//calcularAreaTriangulo(base, altura)------------------------------------------------
//Crear una función calcularAreaTriangulo que tome como argumentos la base y la altura de un triángulo y devuelva el área del mismo

// const calcularAreaTriangulo = (base, altura) => {
//     return (Number(base) * Number(altura)) / 2;
// }

// console.log(calcularAreaTriangulo(3, 4)) // 6
// console.log(calcularAreaTriangulo(5, 6)) // 40?

//gritar(str) palabra + parentesis = funcion------------------------------------------------
//Crear una función gritar que tome como argumento un string y devuelva el mismo string con un signo de exclamación al principio y al final del mismo

// const gritar = (str) => {
//     return `¡${str}!` 
// }

//console.log(gritar(`hola`))
//console.log(gritar(`aaaaaa`))

//obtenerNombreCompleto(nombre, apellido)------------------------------------------------
//Crear una función obtenerNombreCompleto que tome como argumento un nombre y un apellido y devuelva un string con la unión de ambos valores

// const obtenerNombreCompleto = (nombre, apellido) => {
//     return `${nombre} ${apellido}`;
// }

//console.log(obtenerNombreCompleto('Ada', 'Lovelace')) // 'Ada Lovelace'

//saludar(nombre)------------------------------------------------
//Crear una función saludar que tome como argumentos un nombre y devuelva un saludo que lo incluya.

// const saludar = (nombre) => {
//     return `"Hola ${nombre}, un gusto conocerte"`;
// }

//console.log(saludar('Ada')) // 'Hola Ada, un gusto conocerte'

//saludarGritando(nombre, apellido)------------------------------------------------
//Usando las funciones anteriores (obtenerNombreCompleto, saludar y gritar), crear una función saludarGritando que tome como argumentos un nombre y un apellido y devuelva un saludo con signos de exclamación.

// const nombreCompleto = obtenerNombreCompleto(`nombre`, `apellido`)
// const saludo = saludar(nombreCompleto)
// const grito = gritar(saludo)

// const saludarGritando = (nombre, apellido) => {
//     const nombreCompleto = obtenerNombreCompleto(nombre, apellido);
//     const saludo = saludar(nombreCompleto)
//     const grito = gritar(saludo)
//     return `${grito}`;
// }

//console.log(saludarGritando(`Ada`, `Lovelace`)); // ¡Hola Ada Lovelace, un gusto conocerte!

// obtenerDatosDeCiudad(nombre, poblacion, pais)------------------------------------------------
// Crear una función obtenerDatosDeCiudad que tome como argumentos un string nombre, un número poblacion y un string pais y devuelva string con el siguiente formato: La ciudad de NOMBRE tiene una población de POBLACION habitantes y está ubicada en PAIS

// const obtenerDatosDeCiudad = () => {
//     let nombre = prompt('Ingrese su ciudad');
//     let poblacion = Number(prompt('Ingrese cantidad de habitantes'));
//     let pais = prompt('Ingrese el pais');
//     return `La ciudad de ${nombre} tiene una población de ${poblacion} habitantes y está ubicada en ${pais}.`;
// };

//console.log(obtenerDatosDeCiudad());

//convertirHorasEnSegundos(horas)------------------------------------------------
//Crear una función convertirHorasEnSegundos que tome como argumento un número de horas y devuelva la conversión a segundos de dicha cantidad de horas

// const convertirHorasEnSegundos = (horas) => {
//     const segundos = 3600;
//     return horas * segundos;
// }

// console.log(convertirHorasEnSegundos(1)) // 3600
// console.log(convertirHorasEnSegundos(3)) // 10800
// console.log(convertirHorasEnSegundos(4.5)) // 16200

//calcularPerimetroRectangulo(ancho, alto)------------------------------------------------
//Crear una función calcularAreaTriangulo que tome como argumentos el ancho y el alto de un rectángulo y devuelva su perímetro

// const calcularPerimetroRectangulo = (ancho, alto) => {
//     return 2 * (ancho + alto);
// }

// console.log(calcularPerimetroRectangulo(3.2, 5)) // 16.4
// console.log(calcularPerimetroRectangulo(10, 20)) // 60

//calcularPorcentaje(numero, porcentaje)------------------------------------------------
//Crear una función calcularPorcentaje que tome como argumentos un número y un porcentaje y devuelva el valor del porcentaje correspondiente al número

// const calcularPorcentaje = (numero, porcentaje) => {
//     return (numero * porcentaje) / 100;
// }

// console.log(calcularPorcentaje(100, 15)) // 15
// console.log(calcularPorcentaje(10, 50)) // 5
// console.log(calcularPorcentaje(200, 10)) // 20

//sumarPorcentaje(numero, porcentaje)------------------------------------------------
//Crear una función sumarPorcentaje que tome como argumentos un número y un porcentaje y devuelva la suma de dicho número con la de su porcentaje. Usar la función calcularPorcentaje para obtener el porcentaje a sumar

// const sumarPorcentaje = (numero, porcentaje) => {
//     incremento = calcularPorcentaje(numero, porcentaje)
//     resultado = numero + incremento
//     return resultado
// }

// console.log(sumarPorcentaje(100, 15)) // 115
// console.log(sumarPorcentaje(10, 50)) // 15
// console.log(sumarPorcentaje(200, 10))// 220

//restarPorcentaje(numero, porcentaje)------------------------------------------------
//Crear una función restarPorcentaje que tome como argumentos un número y un porcentaje y devuelva la resta de dicho número con la de su porcentaje. Usar la función calcularPorcentaje para obtener el porcentaje a restar

// const restarPorcentaje = (numero, porcentaje) => {
//     disminucion = calcularPorcentaje(numero, porcentaje)
//     resultado = numero - disminucion
//     return resultado
// }

// console.log(restarPorcentaje(100, 15)) // 85
// console.log(restarPorcentaje(10, 40)) // 6
// console.log(restarPorcentaje(200, 10)) // 180

//calcularFPS(fps, minutos)------------------------------------------------
//FPS son cuadros por segundo (frames per second). Crear una una función calcularFPS que tome como argumentos una cantidad de cuadros por segundo y una cantidad de minutos, y devuelva cuántos cuadros hubo en esa cantidad de minutos

// const calcularFPS = (fps, minutos) => {
//     segundos = minutos * 60
//     return fps * segundos;
// }

// console.log(calcularFPS(1, 1)) // 60
// console.log(calcularFPS(10, 2)) // 1200
// console.log(calcularFPS(2, 3)) // 360

//obtenerCompetencia(a, b)------------------------------------------------
//Crear una función obtenerCompetencia que tome como argumentos dos strings a y b y devuelva un string con el formato a vs. b

// const obtenerCompetencia = (a, b) => {
//     return `"${a} vs. ${b}"`;
// }

// console.log(obtenerCompetencia('JavaScript', 'Python')) // `JavaScript vs. Python`
// console.log(obtenerCompetencia('Coca', 'Pepsi')) // `Coca vs. Pepsi`
// console.log(obtenerCompetencia('Perros', 'Gatos')) // `Perros vs. Gatos`

//generarEmail(usuario, dominio)------------------------------------------------
//Crear una función generarEmail que tome como argumentos dos string usuario y dominio y el un string email con el formato usuario@dominio.com

// const generarEmail = (usuario, dominio) => {
//     return `"${usuario}@${dominio}.com"`;
// }

// console.log(generarEmail('adalovelace', 'gmail')) // 'adalovelace@gmail.com'

//calcularPuntaje(facil, normal, dificil)------------------------------------------------
//Crear una función calcularPuntaje que calcule el puntaje de un examen que consiste en ejercicios de distinto nivel. Debe tomar como argumento tres que consisten en la cantidad de ejercicios resueltos en cada nivel y devolver un número con el puntaje correspondiente.
//El puntaje se calcula de la siguiente forma:
// const puntajeFacil = 3
// const puntajeNormal = 5;
// const puntajeDificil = 10;

// const calcularPuntaje = (facil, normal, dificil) => {
//     puntaje = (puntajeFacil * facil) + (puntajeNormal * normal) + (puntajeDificil * dificil)
//     return puntaje;
// }

// console.log(calcularPuntaje(3, 0, 0)) // 9
// console.log(calcularPuntaje(0, 2, 1)) // 20
// console.log(calcularPuntaje(5, 1, 2)) // 40


