// min

let sum = 0.1 + 0.2

alert(+sum.toFixed(2))

let num1 = '1'

let num2 = 2

alert(Number(num1) + num2)

let fleshGb = prompt('Enter how many gigabytes is your flash drive')

alert(
  'You can write files to your flash drive ' +
    Math.floor((fleshGb * 1000) / 820),
)

// norm

let cash = prompt('How much cash do you have in your wallet (enter numbers)')

let chocolate = prompt('Enter how match cost chocolate')

let manyChocolate = Math.floor(cash / chocolate)

let surrender = cash - Math.floor(manyChocolate * chocolate)

alert(
  `You buy ${manyChocolate} chocolate and will have to surrender ${surrender}`,
)

let severalNum = prompt('Enter several numbers')

let turnover = 0

for (; severalNum; severalNum = Math.floor(severalNum / 10)) {
  turnover *= 10
  turnover += severalNum % 10
}

alert('Turnover numbers ' + turnover)

// max

let deposit = prompt('Enter your deposit amount')

let percent = (deposit / 100) * 5

let sumDeposit = (percent / 12) * 2

alert('The amount of the deposit for two months is ' + sumDeposit.toFixed(2))

// Що повернуть вираження:

//  2 && 0 && 3     поверне 0

//  2 || 0 || 3     поверне 2

// 2 && 0 || 3      поверне 3
