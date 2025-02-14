let a = 1;
let b = -3;
let c = 2;

let delta = b ** 2 - 4 * a * c

if (delta >= 0){
    let x1 = (-b + Math.sqrt(delta)) / (2 * a);
    let x2 = (-b - Math.sqrt(delta)) / (2 * a);

    console.log("x1 =", x1)
    console.log("x2 =", x2)
}