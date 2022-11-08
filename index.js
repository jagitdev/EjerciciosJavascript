//A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, W, X, Y, Z.

//SERR PBQR PNZC

/*
Uno de los cifrados más simples y ampliamente conocidos es el cifrado César , también conocido como cifrado de desplazamiento . En un cifrado por desplazamiento, los significados de las letras se modifican en una cantidad determinada.

Un uso moderno común es el cifrado ROT13 , donde los valores de las letras se desplazan 13 lugares. Así A ↔ N, B ↔ Oy así sucesivamente.

Escriba una función que tome una cadena codificada ROT13 como entrada y devuelva una cadena decodificada.

Todas las letras serán mayúsculas. No transforme ningún carácter no alfabético (es decir, espacios, puntuación), pero páselos.


rot13("SERR PBQR PNZC")debe decodificar a la cadenaFREE CODE CAMP
esperando :rot13("SERR CVMMN!")debe decodificar a la cadenaFREE PIZZA!
esperando :rot13("SERR YBIR?")debe decodificar a la cadenaFREE LOVE?
esperando :rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT.")debe decodificar a la cadena
THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG.
*/

function rot13(str) {
  const alphabet = {
    0: 'A',
    1: 'B',
    2: 'C',
    3: 'D',
    4: 'E',
    5: 'F',
    6: 'G',
    7: 'H',
    8: 'I',
    9: 'J',
    10: 'K',
    11: 'L',
    12: 'M',
    13: 'N',
    14: 'O',
    15: 'P',
    16: 'Q',
    17: 'R',
    18: 'S',
    19: 'T',
    20: 'U',
    21: 'V',
    22: 'W',
    23: 'X',
    24: 'Y',
    25: 'Z',
  };

  let strArray = str.split(' '); //creamos el array

  let strArrayNum = [];

  //pasamos el array que nos pasa a valores numericos segun el numero de cada caracter en el alfabeto
  let positionLetter = (ltr) => {
    for (let i in alphabet) {
      if (ltr == alphabet[i]) {
        strArrayNum.push(i);
      }
    }
  };

  for (let i in strArray) {
    for (let j in strArray[i]) {
      positionLetter(strArray[i][j]);
    }
  }

  //--------------------------------------------------------------------------------

  //restamos 13 valores por cada numero del array calculando si la resta es menor que 0 empieza por 25 y va restando hasta que reste 13 valores

  let strArrayNumModi = [];

  let restaPosition = (valor) => {
    for (let i = 0; i < 13; i++) {
      valor -= 1;
      if (valor < 0) {
        valor = 25;
      }
    }
    strArrayNumModi.push(valor);
  };

  for (let i in strArrayNum) {
    restaPosition(strArrayNum[i]);
  }

  //---------------------------------------------------------------------------------

  //pasamos los numeros a letras
  let arrNewLetter = [];

  let toPositionLetter = (value) => {
    for (let i in alphabet) {
      if (value == i) {
        arrNewLetter.push(alphabet[i]);
      }
    }
  };

  for (let i in strArrayNumModi) {
    toPositionLetter(strArrayNumModi[i]);
  }

  //----------------------------------------------------------------------------------

  //pasamos los valores de un array que separa cada caracter y lo junta como el primer array que creamos para luego con el join() lo pasamos a string
  let arrNewLetterSplit = [];

  for (let i = 0; i < strArray.length; i++) {
    let arr = arrNewLetter.slice(0, strArray[i].length);
    arrNewLetterSplit.push(arr.join(''));
    arrNewLetter.splice(0, strArray[i].length);
  }

  console.log(arrNewLetterSplit);

  //----------------------------------------------------------------------------------------

  let stringTradic;

  //si la cadena que le paso termina en estos caracteres "?", "!", "." lo añade al final

  if (str.substr(-1) == '?' || str.substr(-1) == '!' || str.substr(-1) == '.') {
    stringTradic = arrNewLetterSplit.join(' ') + str.substr(-1);
  } else {
    stringTradic = arrNewLetterSplit.join(' ');
  }

  return stringTradic;
}

console.log(rot13('GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT.'));
