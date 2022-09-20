const decInput = document.querySelector('#decimal-input');
const btnDec = document.querySelector('#btnDec')
const resultP = document.querySelector('#result')

btnDec.onclick = () => {
  value = Number(decInput.value);
  let result = binConst(value);
  resultP.innerText = `Binario: ${result}`
};

function binConst(num) {
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
