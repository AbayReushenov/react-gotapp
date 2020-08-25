destructuring 

let [x,y] = [1,2]; // Same as let x=1, y=2
[x,y] = [x+1,y+1]; // Same as x = x + 1, y = y + 1
[x,y] = [y,x]; // Swap the value of the two variables
[x,y] // => [3,2]: the incremented and swapped values

to collect values  (...)
let [x, ...y] = [1,2,3,4]; // y == [2,3,4]

let [a, [b, c]] = [1, [2,2.5], 3]; // a == 1; b == 2; c == 2.5

let [first, ...rest] = "Hello"; // first == "H"; rest == ["e","l","l","o"]

let transparent = {r: 0.0, g: 0.0, b: 0.0, a: 1.0};// A RGBA color
let {r, g, b} = transparent; // r == 0.0; g == 0.0; b == 0.0

 const newid = Math.floor(Math.random()*140 + 25) //25 -> 165 