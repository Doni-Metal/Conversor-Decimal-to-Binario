const decInput = document.querySelector('#decimal-input');
const btnDec = document.querySelector('#btnDec');
const decToBinP = document.querySelector('#decToBinP');
const binInput = document.querySelector('#binario-input');
const btnBin = document.querySelector('#btnBin');
const binToDecP = document.querySelector('#binToDecP');
const sumAInput = document.querySelector('#sumaA-input');
const sumBInput = document.querySelector('#sumaB-input');
const btnSum = document.querySelector('#btnSum');
const sumBinP = document.querySelector('#sumBinP');

btnDec.onclick = () => {
  let value = Number(decInput.value);
  let result = decToBin(value);
  decToBinP.innerText = `Binario: ${result}`
};

btnBin.onclick = () => {
  let value = binInput.value;
  let numArr = value.split("").map((num) => {
    return Number(num);
  })
  if (!isBin(numArr)) {
    binToDecP.innerText = `Intenta con un numero Binario (Solo 1's y 0's)`
  } else {
    let result = binToDec(numArr);
    binToDecP.innerText = `Decimal: ${result}`
  }
};

btnSum.onclick = () => {
  let valueA = sumAInput.value;
  let valueB = sumBInput.value;
  let arrA = valueA.split('').map((num) => {
    return Number(num);
  })
  let arrB = valueB.split('').map((num) => {
    return Number(num);
  })
  if (!isBin(arrA) || !isBin(arrB)) {
    sumBinP.innerText = `Intenta con numeros Binarios (Solo 1's y 0's)`;
  } else {
    let result = sumBinarios(arrA, arrB);
    sumBinP.innerText = `Resultado: ${result}`;
  }
}

function isBin(elem) {
  let valid;
  elem.forEach((num) => {
    if (num > 1) {
      valid = false;
    } else {
      valid = true  
    }
  })
  return valid
}

function decToBin(num) {
  let lastBin = 1;
  while (lastBin < num) {
    lastBin *= 2;
    if (lastBin > num) {
      lastBin /= 2;
      break
    }
  }

  let sum = 0;
  let binaries = [];
  while (lastBin >= 1) {
    sum += lastBin;
    if (sum > num) {
      binaries.push(0)
      sum -= lastBin
    } else {
      binaries.push(1);
    }
    lastBin /= 2;
  }

  let result = binaries.join('');
  return result
}

function binToDec(num) {
  let decNums = num;
  exp = decNums.length - 1;
  let sum = 0;
  decNums.forEach((num) => {
    sum += num * (2**exp);
    exp --;
  })
  return sum;
}

function sumBinarios(a, b) {
  let numA = a, numB = b;
  let sizeA = numA.length, sizeB = numB.length
  if (sizeA > sizeB) {
    numB.unshift(0);
  } else if (sizeB > sizeA) {
    numA.unshift(0);
  }
  let result = [];
  let carry = 0;
  for (i = sizeA - 1; i >= 0; i--) {
    let nA = numA[i];
    let nB = numB[i];
    if (carry === 1 && nA === 1 && nB === 1) {
      result.unshift(1);
    } else if (nA === 1 && nB === 1) {
      result.unshift(0);
      carry ++;
    } else if (nA + nB === 1 && carry === 1) {
      result.unshift(0);
    } else if (carry === 1) {
      result.unshift((nA + nB) + carry);
      carry --;
    } else {
      result.unshift(nA + nB);
    }
  }
  if (carry == 1) {
    result.unshift(carry);
    carry --;
  }
  let final = result.join('');
  return final;
}
