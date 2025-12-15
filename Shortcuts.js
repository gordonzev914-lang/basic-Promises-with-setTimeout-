import { resolve } from "path"
import { MathRandomRNG } from "random"


// async function getmessage() {
//     return new Promise((resolve, reject) => {
//     setTimeout(()=>{
//         resolve("hello from promise")
//         reject("Nothing to show")
//     },500)
// })
// }
// getmessage().then((val)=>{console.log(val)}).catch((err)=>{console.log(err)})
// const randomNumber=Math.floor(Math.random()*10)+1
// function getRandomNumber(n){
//     return new Promise((resolve, reject) => {
//         setTimeout(()=>{
//             resolve(n)
//         },700)
//     })
// }
// getRandomNumber(randomNumber).then((val)=>{console.log(val)}).catch((err)=>{console.log(err)})

// function checkeven(n){
//     return new Promise((resolve, reject) => {
//         setTimeout(()=>{
//             if(n%2===0){
//                 resolve("even number")
//             }
//             reject("odd number")
//         },500)
//     })
// }
// checkeven(6).then((val)=>{console.log(val)}).catch((err)=>{console.log(err)})


// function validateUser(username){
//     return new Promise((resolve, reject) => {
//         setTimeout(()=>{
//             if(username==="admin"){
//                 resolve("valid user")
//             }
//             reject("unknown user")
//         },1000)
//     })
// }
// validateUser("guest").then((val)=>{console.log(val)}).catch((err)=>{console.log(err)})

// function fetchData(){
//     return new Promise((resolve, reject) => {
//         setTimeout(()=>{
//             resolve({id:1,name:"dana"})
//         },1200)
//     })
// }
// fetchData().then((val)=>{console.log(val.name)})


// function toUpperAsync(text){
//     return new Promise((resolve, reject) => {
//         setTimeout(()=>{
//             if(text.length===0){
//                 reject("empty string")
//             }
//             resolve(text.toUpperCase())
//         },600)
//     })
// }
// toUpperAsync("").then((val)=>{console.log(val)}).catch((err)=>{console.log(err)})

function double(n){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            if(n>0){
            resolve(n*2)
            }
            reject("not valid")
        },400)
    })
}
function square(n){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            if(n>0){
            resolve(n*n)
            }
            reject("not valid")
        },400)
    })
}
// double(3).then((val)=>{square(val).then((val)=>{console.log(val)})})


// function getNumbers(n){
//     return new Promise((resolve, reject) => {
//         setTimeout(()=>{
//             if(n.length<=0){
//                 reject("not valid")
//             }
//             resolve(n)  
//         },800)
//     })
// }
// getNumbers([10,20,30]).then((val)=>{for(let i=0; i<val.length; i++){console.log(val[i])}}).catch((err)=>{console.log(err)})


