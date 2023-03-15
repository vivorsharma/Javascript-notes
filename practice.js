// let a=40;
// let arr=["vivor","rohan","sohan","mohan"]
// let prom = new Promise((resolve, reject) => {
//     if(a>20){
//     resolve(arr)
//     }else{
//         throw new Error("condition is false")
//     }
// });

// prom.then((result)=>{
//     console.log("hello")
// }).catch((error)=>{
//   console.log("this is an error")
// })

let prom= new Promise((resolve, reject) => {
    setTimeout(()=>{
        resolve("data is resolve")
    },2000)
})
async function vivhor(){
    let result =await prom;
    console.log(result);
    console.log("async function")
}
vivhor()