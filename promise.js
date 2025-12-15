import { rejects } from "assert"
import { readFile } from "fs"
import { resolve } from "path"
import { MathRandomRNG } from "random"
// function gethello(params){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             if(params===0){
//             reject("not valid "+params)
//             }
//             resolve("hello "+params)
//         },500)
//     }
// )}

// gethello("zev").then((val)=>{console.log("result", val)}).catch((err)=>{console.log("result", err)})


// function addAsync(a,b){
//     return new Promise((resolve, reject) => {
//         setTimeout(()=>{
//             if(a===0||b===0){
//                 reject("nor valid")
//             }
//             resolve(a+b)
//         },1000)
//     })
// }
// addAsync(5,7).then((val)=>{console.log(val)}).catch((err)=>{console.log(err)})

// function checkNumber(n){
//     return new Promise((resolve, reject) => {
//         setTimeout(()=>{
//             if(n%2===0){
//                 resolve("even")
//             }
//             reject("odd number not allowed")
//         },800)
//     })
// }
// checkNumber(5).then((val)=>{console.log(val)}).catch((err)=>{console.log(err)})

// function login(username, password){
//     return new Promise((resolve, reject) => {
//         setTimeout(()=>{
//             if(username==="admin"&&password===1234){
//                 resolve("login successful")
//             }
//             reject("Invalid credentials")
//         },1200)
//     })
// }
// login("admin",1234).then((val)=>{
//     console.log(val)
// }).catch((err)=>{console.log(err)})

// function getnumbers(arr){
//     return new Promise((resolve, reject) => {
//         setTimeout(()=>{
//             resolve(arr)
//             reject("There is nothing to show.")
//         },700)
//     })
// }
// getnumbers([1,2,3,4,5]).then((val)=>{for(let i=0; i<val.length;i++){console.log(val[i])}}).catch((err)=>{console.log(err)})
// const rand=Math.random()
// function unstable1Operation(n){
//     return new Promise((resolve, reject) => {
//         setTimeout(()=>{
//             if(n<0.5){
//                 resolve("success")
//             }
//             reject("random failure "+n)
//         },1000)
//     })
// }
// unstable1Operation(rand).then((val)=>{console.log(val)}).catch((err)=>{console.log(err)})

function squarePositive(n){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            if(n>=0){
                resolve(n*n)
            }
            reject("Negative number not allowed")
        },500)
    })
}
squarePositive(-2).then((val)=>{console.log(val)}).catch((err)=>{console.log(err)})