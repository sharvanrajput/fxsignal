const arr = [12, 30, 50, 60, 40]

let num1 = 0
let num2 = 0
let newarr = []

for (let i = 0; i < arr.length; i++) {
    for (let j = i+1; j < arr.length; j++) {
        if (arr[i] + arr[j] === 90) {
            num1 = arr[i]
            num2 = arr[j]

            newarr.push(num1)
            newarr.push(num2)
        }
    }
}
console.log(newarr)