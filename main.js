
const generateBtn = document.getElementById('generate-btn');
const lottoNumbersDiv = document.getElementById('lotto-numbers');

function generateNumbers() {
    const numbers = new Set();
    while (numbers.size < 6) {
        const randomNumber = Math.floor(Math.random() * 45) + 1;
        numbers.add(randomNumber);
    }
    
    lottoNumbersDiv.innerHTML = ''; // Clear previous numbers
    for (const number of numbers) {
        const numberSpan = document.createElement('span');
        numberSpan.textContent = number;
        numberSpan.classList.add('lotto-number');
        lottoNumbersDiv.appendChild(numberSpan);
    }
}

generateBtn.addEventListener('click', generateNumbers);
