let numero1= 5;
let numero2=5;
const resultado= numero1 + numero2;
// console.log(resultado);


sumar= (a,b)=> {return a+b;};
const resultado2= sumar (3,4);
// console.log(resultado2);

let personas = [
    { nombre: "Ana", edad: 25 },
    { nombre: "Juan", edad: 30 },
    { nombre: "María", edad: 28 }
   ];

// console.log(personas[1].nombre);

for (let persona of personas) {
//     console.log(persona.nombre + " tiene "
//    + persona.edad + " años.");
//    }
}

let clientes= [
    {nombre:"mario", edad:"34"},
    {nombre:"anto", edad:"23"},
    {nombre:"diego", edad:"54"},
    {nombre:"sofia", edad:"39"}
];

for(let cliente of clientes) {
    // console.log(cliente.nombre+ " tiene "+ cliente.edad +" años.");
}

for (let i = 1; i <= 10; i++) {
    if (i % 2 === 0) {
      console.log(i + " es un número par");
    } else {
      console.log(i + " es un número impar");
    }
  }

  const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  for (const numero of numeros) {
    if (numero % 2 === 0) {
      console.log(numero + " es un número par");
    } else {
      console.log(numero + " es un número impar");
    }
  }  

//   <?php
//   $numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  
//   foreach ($numeros as $numero) {
//       if ($numero % 2 == 0) {
//           echo $numero . " es un número par<br>";
//       } else {
//           echo $numero . " es un número impar<br>";
//       }
//   }
//   ?>