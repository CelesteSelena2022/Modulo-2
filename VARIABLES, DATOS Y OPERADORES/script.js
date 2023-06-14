//Saludo--------------------------------------------------------
//Crear un programa que pida al usuario ingresar un nombre y apellido por separado, y luego muestre un mensaje que diga, "Hola {nombre} {apellido}, bienvenida a Ada".

// let nombre = prompt ("ingrese su nombre")
// let apellido = prompt ("ingrese su apellido")
// const saludo= "bienvenida a Ada"

// alert (`Hola ${nombre} ${apellido}, ${saludo}`)

//Heladería--------------------------------------------------------
// Crear un programa que pida al usuario ingresar, por separado, tres gustos de helado, y luego muestre un mensaje que diga, por ejemplo, "Aquí tiene su helado de chocolate, dulce de leche y menta granizada".

// let primerSabor = prompt ("ingrese el primer sabor de helado");
// let segundoSabor = prompt ("ingrese segundo sabor");
// let tercerSabor = prompt ("ingrese el tercer sabor");

// alert (`Aqui tiene su helado de ${primerSabor}, ${segundoSabor} y ${tercerSabor}`);

//Datos personales--------------------------------------------------------
//Crear un programa que pida al usuario ingresar, por separado, nombre, apellido, edad, nacionalidad, documento, y muestre luego un mensaje que diga: "Nuevo usuario agregado al sistema:" y liste todos los datos juntos.

// let nombre = prompt("igrese su nombre");
// let apellido = prompt("igrese su apellido");
// let edad = prompt("igrese su edad");
// let nacionalidad = prompt("igrese su nacionalidad");
// let documento = prompt("igrese su documento");
// const mensaje = "Nuevo usuario agregado al sistema:";

// alert (`"${mensaje} ${nombre}, ${apellido}, ${edad}, ${nacionalidad}, ${documento}"`);

// Lista de reproducción--------------------------------------------------------
// Crear un programa que pida al usuario ingresar, por separado, el nombre de una playlist y el título de tres canciones, y al finalizar se muestre un mensaje que diga, p. ej.: "Se ha creado la playlist 'Hits de los 80s' con las canciones 'Africa', 'Maniac', 'Final Countdown'".

// let playlist = prompt("ingese el nombre de la playlist");
// let titulo1 = prompt("ingese el titulo de la primera cancion");
// let titulo2 = prompt("ingese el titulo de la segunda cancion");
// let titulo3 = prompt("ingese el titulo de la tercera cancion");
// const mensaje = "Se ha creado la playlist";

// alert (`"${mensaje} "${playlist}" con las canciones "${titulo1}", "${titulo2}", "${titulo3}"".`);

// Dirección completa--------------------------------------------------------
// Crear un programa que pida al usuario ingresar, por separado, la calle, el número, el departamento, el código postal, la ciudad y el país, y muestre un mensaje con toda la dirección completa, p.ej.: "La dirección que ha ingresado es: Calle Falsa 123 3C, 1414, CABA, Argentina".

// let  calle = prompt("ingresar la calle de su direccion");
// let numero = prompt("ingresar el numero de su direccion");
// let departamento = prompt("ingresar el departamento de su direccion");
// let codigoPostal = prompt("ingresar el código postal de su direccion");
// let ciudad = prompt("ingresar la ciudad de su direccion");
// let país = prompt("ingresar el pais de su direccion");
// const mensaje = "La dirección que ha ingresado es:";

// alert (`"${mensaje} ${calle}, ${numero}, ${departamento}, ${codigoPostal}, ${ciudad}, ${país}".`)

//Años perro--------------------------------------------------------
//Crear un programa que pida ingresar una edad y devuelva el equivalente de esas edad en años perro.

// let edad = prompt ("ingrese la edad", "0");
// const aniosPerros = 7;
// let resultado = Number(edad) * aniosPerros;

// alert (`Tu edad en años perros es ${resultado} años`);

// Minutos a segundos--------------------------------------------------------
// Crear un programa que pida ingresar una cantidad en minutos mediante un y muestre un mensaje con el resultado de la conversión en segundos.

// let minutos = prompt("ingrese la cantidad de minutos que desee transformar en segundos", "0");
// const segundos = 60;
// const resultado = Number(minutos) * segundos;

// alert (`El resultado es igual a ${resultado} segundos`)

// Días a segundos--------------------------------------------------------
//Crear un programa que pida ingresar una cantidad de días y muestre un mensaje con el resultado de la conversión en segundos.

// let cantidadDeDias = prompt("ingrese la cantidad de días que desee transformar en segundos")
// const horasDelDia = 24;
// const minutosEnUnaHora = 60;
// const segundosEnUnMinuto = 60;
// const resultado = Number(cantidadDeDias) * horasDelDia * minutosEnUnaHora * segundosEnUnMinuto;

// alert (`El resultado es igual a ${resultado}`)

//Kilómetros a millas--------------------------------------------------------
//Crear un programa que pida ingresar una cantidad de kilómetros y muestre un mensaje con el resultado de la conversión en millas.

// let kilometros = prompt("ingrese la cantidad de kilometros que desee transformar en millas");
// const millas = 1.60934;
// const resultado = Number(kilometros) / millas;

// alert (`el resultado es de la conversión es igual a ${resultado}`)

//Área de un triangulo--------------------------------------------------------
//Crear un programa que pida al usuario ingresar el valor de la base y el valor de la altura de un triangulo, calcular su área y mostrarlo en un mensaje.

// let base = prompt("ingresar el valor de la base de un triangulo");
// let altura = prompt("ingresar el valor de la altura de un triangulo");
// const ladosDelTriangulo = 2;
// const resultado = Number(base) * Number(altura) / ladosDelTriangulo;

// alert (`el area del triangulo con los valores ingresado es igual a ${resultado}`);

//Perímetro de un rectángulo--------------------------------------------------------
//Crear un programa que pida al usuario ingresar el valor de la altura y el valor del ancho de un rectángulo, calcular su perímetro y mostrarlo en un mensaje.

// let ancho = prompt("ingresar el ancho del rectangulo");
// let altura = prompt("ingresar la altura del rectangulo");
// const resultado = 2 * (Number(ancho) + Number(altura));

// alert (`el perímetro del rectángulo es igual a ${resultado}`);

//Porcentaje--------------------------------------------------------
//Crear un programa que pida al usuario ingresar un número, y luego el porcentaje que se desea obtener del mismo. Devolver un mensaje muestre el porcentaje de dicho número.

// let numero = prompt("ingrese un numero");
// let porcentaje = prompt("ingrese el porcetaje que desee obtener");
// const resultado = Number(numero) * (Number(porcentaje) / 100);

// alert(`El pocentaje es ${resultado}`);

//Tiempo de viaje--------------------------------------------------------
//Crear un programa que pida al usuario la distancia de su recorrido y mostrar en un mensaje cuánto tiempo tardaría en completar el recorrido en distintos medios de transporte, definiendo de antemano distintas velocidades para distintos medios de transporte (p. ej.: a pie: 5 km/hora, bici 10km/hora, etc.).

// const pie = 5;
// const bici = 10;
// const auto = 50;

// let distancia = prompt("ingrese la distancia del reccorrido en kilometros");

// let resultadoPie = Number(distancia) / pie;
// let resultadoBici = Number(distancia) / bici;
// let resultadoAuto = Number(distancia) / auto;

// alert(`Tiempo estimado del viaje para ${distancia}km en pie es ${resultadoPie}hr, en bici es ${resultadoBici}hr, y en auto es ${resultadoAuto}hr`);

//Duración vuelo--------------------------------------------------------
//Crear un programa que pida al usuario ingresar, por separado, 3 destinos de las escalas de un vuelo, y la duración de cada uno de ellos. Al final debe mostrar un mensaje que liste todas las escalas con su duración y la duración total del vuelo.

//?

//Incremento--------------------------------------------------------
//Crear un programa que pida ingresar una número de partida y una cantidad a ir incrementando y mostrar cinco mensajes seguidos que muestren el número del mensaje y el total incrementado hasta el momento (p. ej.: empezando con 5 e incrementando 5, "Incremento 1) Total: 10", "Incremento 2) Total: 15", "Incremento 3) Total: 20", etc.).

// let numero = prompt("igrese un numero de partida");
// let incremento = prompt("ingrese el numero que hara el incremento");
// const incremento1 = Number(numero) + Number(incremento);
// const incremento2 = Number(numero) + 2 * Number(incremento);
// const incremento3 = Number(numero) + 3 * Number(incremento);
// const incremento4 = Number(numero) + 4 * Number(incremento);
// const incremento5 = Number(numero) + 5 * Number(incremento);


// alert(`"Incremento 1) Total: ${incremento1}"`)
// alert(`"Incremento 2) Total: ${incremento2}"`)
// alert(`"Incremento 3) Total: ${incremento3}"`)
// alert(`"Incremento 4) Total: ${incremento4}"`)
// alert(`"Incremento 5) Total: ${incremento5}"`)

//Celsius a Fahrenheit--------------------------------------------------------
//Crear un programa que pida ingresar una cantidad de grados Celsius y muestre un mensaje con el resultado de la conversión a grados Fahrenheit.

// let celsius = prompt("ingrese la cantidad de grados Celsius que desee transformar en grados Fahrenheit");
// const fahrenheit = (Number(celsius) * 9/5) + 32;

// alert(`${celsius} grados celsius son equivalentes a ${fahrenheit} grados fahrenheit`)

//Múltiplos--------------------------------------------------------
//Crear un programa que pida al usuario un número, luego otro y mostrar en un mensaje si el primer valor es múltiplo del segundo. INVESTIGAR EL OPERADOR MÓDULO O DE RESTO % PARA HACERLO

// let numero1 = prompt("ingresar el primer numero");
// let numero2 = prompt("ingresar el segundo numero");
// const resto = Number(numero1) % Number(numero2);

// alert(`el resultado de ambos numeros es ${resto}`);

//Segundos a horas, minutos y segundos--------------------------------------------------------
//Crear un programa que pida ingresar una cantidad en segundos y muestre un mensaje con el resultado de la conversión en horas, minutos y segundos que corresponde a esa cantidad (p.ej. 3602 segundos = 1 hora 2 segundos). (Usar operador módulo)

// let cantSegundos = prompt("ingresar la cantidad de segundos que desee convertir");
// const horas = Number(cantSegundos) / 3600;
// const minutos = Number((cantSegundos) % 3600) / 60;
// const segundos = Number(cantSegundos) % 60;

// alert(`"${cantSegundos} segundos corresponden a ${horas} horas, ${minutos} minutos ${segundos} segundos"`)

// Cantidad de caracteres--------------------------------------------------------
//Crear un programa que pida al usuario ingresar un texto y muestre un mensaje con la cantidad de caracteres que tiene ese texto. INVESTIGAR CÓMO HACERLO

// let mensaje = prompt("ingrese un mensaje");
// const cantCaracteres = mensaje.length;

// alert(`El texto ingresado tiene ${cantCaracteres} caracteres`);

//Cantidad de huéspedes--------------------------------------------------------
//Crear un programa que pida al usuario ingresar, de a uno por vez, cuántas habitaciones tiene un hotel para 2, 3 y 4 personas, y muestre el máximo de huéspedes que puede albergar.

// let habitaciones2 = prompt("ingrese la cantidad de habitaciones para dos personas");
// let habitaciones3 = prompt("ingrese la cantidad de habitaciones para tres personas");
// let habitaciones4 = prompt("ingrese la cantidad de habitaciones para cuatro personas");

// const maxHuespedes = Number(habitaciones2 * 2) + Number(habitaciones3 * 3) + Number(habitaciones4 * 4);

// alert(`El hotel puede albergar un maximo de ${maxHuespedes} huéspedes`);

//Calculador gastos--------------------------------------------------------
//Crear un programa que pida al usuario cuanto dinero disponible tiene, y vaya preguntando cuánto tiene que pagar por cada servicio, pidiendo el nombre del servicio y el monto a pagar, uno a la vez. Cada vez que pide ingresar un nuevo servicio, el mensaje debe mostrar cuántos servicios quedan por ingresar, utilizando una variable, y mostrar cuánto dinero disponible queda. Al final debe mostrar una lista con todos los servicios a pagar y el monto de cada uno, además del dinero disponible que le queda. Hacerlo con 3 servicios.

// let monto = prompt("ingresen la cantidad de dinero disponible");
// let serviciosRestantes = 3;

// let servicio1 = prompt("ingrese cual es el nombre del primer servicio");
// let montoAPagar1 = prompt("ingrese el monto a pagar por el primer servicio");
// const dineroDisponible1 = Number(monto) - Number(montoAPagar1);
// serviciosRestantes = 2;

// alert (`aun puedes ingresar ${serviciosRestantes} servicios mas, el monto disponible es de ${dineroDisponible1}`)

// let servicio2 = prompt("ingrese cual es el nombre del segundo servicio");
// let montoAPagar2 = prompt("ingrese el monto a pagar por el segundo servicio");
// const dineroDisponible2 = Number(dineroDisponible1) - Number(montoAPagar2);
// serviciosRestantes = 1;

// alert (`aun puedes ingresar ${serviciosRestantes} servicio mas, el monto disponible es de ${dineroDisponible2}`)

// let servicio3 = prompt("ingrese cual es el nombre del tercer servicio");
// let montoAPagar3 = prompt("ingrese el monto a pagar por el tercer servicio");
// const dineroDisponible3 = Number(dineroDisponible2) - Number(montoAPagar3);
// serviciosRestantes = 0;

// alert (`lista final: el primer servicio a pagar es ${servicio1}, con un monton de: ${montoAPagar1}, el segundo servicio a pagar es ${servicio2}, con un monto de: ${montoAPagar2}, y el tercer servicio a pagar es ${servicio3}, con un monto de: ${montoAPagar3}, el monto disponible final es de ${dineroDisponible3}.`)

//Orden de compras--------------------------------------------------------
//Crear un programa que tome la orden de compra de un local. Pedir al usuario que ingrese la cantidad que desea comprar de tres productos distintos, uno por uno, mostrar el valor total de la compra y preguntar en cuántas cuotas desea realizar el pago. Mostrar un mensaje final con el detalle y el valor total la compra, cantidad de cuotas y valor de cada una de las cuotas. Los precios de los productos deben estar definidos de antemano en variables.

// let producto1 = "22";
// let producto2 = "25";
// let producto3 = "30";

// let cantProducto1 = prompt("ingrese la cantidad que desee llevar de manzanas")
// let cantProducto2 = prompt("ingrese la cantidad que desee llevar de naranjas")
// let cantProducto3 = prompt("ingrese la cantidad que desee llevar de bananas")
// const valorTotal = (Number(cantProducto1) * Number(producto1)) + (Number(cantProducto2) * Number(producto2)) + (Number(cantProducto3) * Number(producto3));

// let cuotasPago = prompt("¿en cuántas cuotas desea realizar el pago?");
// const cantCuotas = Number(valorTotal) / Number(cuotasPago);

// alert(`detalle de la compra: ${cantProducto1} manzanas de ${producto1} c/u, ${cantProducto2} naranjas de ${producto2} c/u, ${cantProducto3} bananas de ${producto3} c/u. El valor total de la compra es ${valorTotal}, la cantidad de cuotas son ${cuotasPago} de ${cantCuotas} cada una.`);


