import fs from FileSystem
import fs from 'fs';
// import  Random  from "random";
// let num=Math.random()
// let num=5
// console.log(num)  
// setTimeout(()=>{
//     console.log(
//     num+=1)
// setTimeout(()=>{
//     num-=1
//     console.log(num)
// },(5000))
// setTimeout(()=>
// console.log(num**2),(5000))
// },(5000));

// function getusername(func) {
//     setTimeout(() => {
//         func("moshe")
//     }, (1000))
// }
// function printusername(name) {
//     console.log("user is:  " + name)
// }
// getusername(printusername)


// function loadscore(func){
//     setTimeout(()=>{
//         const score=85;
//         func(score)
//     },
//     (5000))    
// }
// function xscore(x){
//     console.log(`loaddscore: ${x} `)
// }
// loadscore(xscore)
// console.log("end of script")

// function cheklogin(func){
//     setTimeout(()=>{
//         isloggein=true
//         func(isloggein)
//     },(2000))
// }
// function callback(isloggein){
//     if(isloggein===true){
//         console.log("user is logged in")
//     }
//    else{console.log("user  is not logged in ")}


// }
// cheklogin(callback)

// function getproductprice(productid,callback){
//     setTimeout(()=>{
//         const price=99.9;
//         callback(productid,price)
        
//     },(1200))
// }
// function priceloging(y,x){
//     console.log("requesting product price")
//     console.log(`price for product ${y} is ${x}`)
// }
// getproductprice(123,priceloging)

// function loadconfig(callback){
//     setTimeout(()=>{
//         const config={env:"dev",debug:true}
//         callback(config)
//     },(500))
// }
// function configrition(object){
//     console.log(`config loaded ${object.env},${object.debug}`)
// }
// loadconfig(configrition)

// function addasync(a,b,callback){
//     setTimeout(()=>{
//         const sum=a+b
//         callback(sum)
//     },(1000))
// }
// function addition(sum){
//     console.log(`sum is ${sum}`)
// }
// addasync(5,7,addition)

// function getfirstasync(array,callback){
//     setTimeout(()=>{
//         const array1=array[0];
//         callback(array1)
//     },(700))
// }
// function thecallback(element){
//     console.log(`${element} first a`)

// }
// getfirstasync(["a","b","c"],thecallback)

// function isevenasync(number,callback){
//     setTimeout(()=>{
//         callback(number)
//     },(800))
// }
// function env(num){
//     if(num%2===0){
//         console.log("it is evn")
//     }
//     else{console.log("not evn")}

// }   
// isevenasync(7,env)

// function downloadfile(url,callback){
//     setTimeout(()=>{
//         const message="download finished"
//         callback(message)
//     },(1500))
// }
// function printdownload(message){
//     console.log(message)
// }
// downloadfile("http://example.com/file",printdownload)

// function doubleasync(value,callback){
//     setTimeout(()=>{
//         const doubl=value*2;
//         callback(doubl)
//     }
//      ,(300))
// }
// function calc(result){
//     console.log(result)
// }
// doubleasync(5,calc)

