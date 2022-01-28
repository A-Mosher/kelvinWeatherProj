//Setting a variable of kelvin to 293
const kelvin = 0

//setting the celsius variable to take kelvin and subtract 273
const celsius = kelvin - 273

//calculation to get farenheit from celsius
let fahrenheit = celsius * (9/5) + 32

//using Math.floor on the variable fahrenheit to round down to a whole number
fahrenheit = Math.floor(fahrenheit);

console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);

let newton = celsius * (33/100);

newton = Math.floor(newton);

console.log(`The temperature is ${newton} degrees Newton.`)