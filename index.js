// let a = "10", b=20;
// let c = typeof(a);
// console.log();
// let a = parseFloat("20.5666"), b=10;

// console.log(a + b); //NaN = not a number underfined


// if else
// let a=20,b=10; //      a=b to assign value       a==b check only value      a===b strict equal to check type and vlaue both
// if(a+b===30){
//     console.log("true");
// }
// else{
//     console.log("flase");
// }
// a=10,b=20,c=30;
// a<b ? c<20 ? console.log("true") : console.log("false2") : console.log("false1"); // ? if   : else

// nested if else
// if(a<b)
// {
//     if(c<40)
//     {
//         console.log("true");
//     }
//     else{
//         console.log("false2");
//     }

// }else{
//    console.log("false1");
// }


// if()
// {

// }
// else if(){

// }else if(){

// }else{

// }


// a='vivor';
// b='deepak';
// if(a='vivor')
//   {
//   console.log("statement is correct");
// }

// else
// {
//     console.log("statement is incorrect");
// }


// let a = "15", b="10";
// console.log(+a + +b);
// a=7; b=17; 
// if(b>a)

//     {
        // console.log(b +" is greater than "+ a);
//     }
//     else{
//   console.log("b is less than a");
//     }



// let a=5; b=15;
//  if(a<b)
// {
//  console.log(a + " is less than " +b)
// }
// else if(a>b)
// {
// console.log(a + " is greater than " +b)
// }
// else if(a==b){
//  console.log(a + " is equal to " +b )
// }
// else{
//     console.log("enter a number")
// } 




// let a=5; b=1


//  &&
// 0 =false 1= true
// a = true, b = true;
// if(a && b){           // both true
//  console.log("hi");
// }
// else if(a || b)            // single true
// {
//     console.log("hello");
// }
// else{
//     console.log("yugam");
// }





// 3 2 1
// let a=10, b=6, c=7; 
// if(a==b && b==c && c==a)
// {
//   console.log("triangle is equilateral")
// }
// else if(a==b || b==c || c==a)
// {
//   console.log("traingle is an scalene")
// }
// else{
//  console.log("triangle is an isosceles")
// }



// calculator

//   let a=10, b=20 , c='/' ;
  
//   if(c=='+')
//   {
//     console.log(a+b);
//   }
//   else if(c=='-')
//   {
//     console.log(a-b);
//   }
//   else if(c=='/')
//   {
//     console.log(a/b);
//   }
//   else{
//     console.log(a*b);
//   }


// let read = require("readline-sync");
//  let a = parseInt (read.question ("enter a first number:"));
//  let b = parseInt (read.question ("enter second number:"));
//  let c = read.question("+,-,/,*,");

//  if(c=="+")
//  {
//     console.log(a+b);

//  }

// else if(c=="/")
// {
//     console.log(a/b);

// }
// else(c=="*")
// {
//     console.log(a*b);
// }


// let marks=70,name="yugam";


// if(marks >=90 && marks <=100)
// {
//     console.log(name+" you have S grade")
// }
// else if(marks >=80 && marks <=90)
// {
//     console.log(name+" you have recieved A grade");
// }
// else if(marks >=70 && marks <=80)
// {
//     console.log(name+" you have recieved B grade")
// }
// else if(marks >=60 && marks <=70){
//     console.log(name+" you have recieved C grade");
// }
// else if(marks >=50 && marks <=60)
// {
//     console.log(name+" you have recieved D grade")
// }
// else if(marks >=40 && marks <=50)
// {
//     console.log(name+" you have recieved E grade");
// }
// else if(marks >=0 && marks <=40)
// {
//     console.log(name+"you have failed")
// }
// else{
//     console.log("imvalid marks")
// }


// let read = require("readline-sync"); // == equate, != not equal to
// let a = parseInt (read.question("enter a year:"));
// if((a%4==0 && a%100!=0) || a%400==0)
// {
//     console.log(a+" is leap year");
// }
// else{
//     console.log("not a leap year");
// }
// let read = require("readline-sync");
// let a = parseInt(read.question("enter side1: "));
// let b = parseInt(read.question("enter side2: "));
// let c = parseInt(read.question("enter side3: "));

// if(a==b && b==c && c==a)
// {
//     console.log("equilateral triangle");
// }
// else if(a==b || b==c || c==a)
// {
//     console.log("scelene triangle");
// }
// else{
//     console.log("isoceles triangle");
// }


// loops 
// const i=1; // globally
// if(1)
// {
//     const i=1;
//     console.log(i);
// }
// console.log(i); //globally

// for(let i=0;i<=10;i++) // <,>,=,==,<=,>=,
// {
        // console.log(i)
// }


// i=3;
// while(i==3)
// {
//     console.log("hello");
//     i++;
// }


// do {
//     process.stdout.write("hi ");
// } while (i<=3);




// let read = require("readline-sync")
// let a = parseInt(read.question("enter a number1:"));

// if(a%2==0 && a!=0)
// {
//         console.log("no. is even");
// }
// else if(a%2!=0)
// {
//         console.log("no is odd")
// }
// else{
//         console.log(a+ " is a composite")
// }




// let read = require("readline-sync");
// let a = parseInt(read.question("enter a value:"));

// for( let i=1;i<=10;i++ ) 
// {     
//         result = i*a 

//  console.log( a + " * " + i + " = " +result);
// }



// for(let a = 1; a<=10; a++)
// {
//         console.log(a)
// }



//  a=5;
// while(a==5)
// {
//         console.log(a)
//         a++
// }


// let a=1; a++
// do
// {
//         console.log('hi');
// }
// while(a<=5)




// multiplication table

// let read = require("readline-sync")
// let a = parseInt(read.question("enter a value:"))
// for(let i=1;i<=10;i++)
// {
//         result=i*a
//         console.log( a + " * " +i + " = "  + result);
// }


//  left triangle
// for(i=1;i<=5;i++){
//         for(j=5;j>=i;j--){
//            process.stdout.write("* ")
//         }
        
//         console.log("")
// }     


// hollow sqare
//  for(i=1;i<=5;i++){
//  for(j=1;j<=5;j++)
//         if(i==1||j==5||i==5||j==1){
//                process.stdout.write("*  ") 
//         }else{
//                 process.stdout.write("   ")

//         }
//         console.log("")
//  }
 

// right triangle
// for(i=1;i<=5;i++){
//         for(j=1;j<=5;j++)
//                 if(i==5||j==1||i==j){        
//                         process.stdout.write("*  ")
//                 }else{
//                         process.stdout.write("   ")
//                 }
//                 console.log("")
//         }


//rotate right triangle
// for(i=1;i<=5;i++){
//         for(j=1;j<=5;j++)
//                 if(i==j||i==1||j==5){
//                         process.stdout.write("*  ")
//                 }else{
//                         process.stdout.write("   ")
//                 }
//                 console.log("")
//         }


// full triangle
// for( let i=1;i<=5;i++){
// for( let j=1;j<= 5 - i;j++){
//         process.stdout.write("  ")
// }        
// for( let k=1;k<i*2;k++){
//         process.stdout.write("* ")
// }
// console.log(" ")
// }



//  x word

// for(i=1;i<=5;i++){
// for(j=1;j<=5;j++)
//         if(i==j||i+j==5+1){
//                 process.stdout.write("*  ")
//         }else{
//                 process.stdout.write("   ")
//         }
//         console.log("")
// }



// v word
//         for(i=1;i<=5;i++){
//         for(j=1;j<=5;j++)
//                 if(i==j){
//                         process.stdout.write("*  ")
//                 }else{
//                         process.stdout.write("   ")
//                 }for(j=5;j>=1;j--){
//                  if(j-1==i){
//                         process.stdout.write("*   ")  
//                  }else{
//                         process.stdout.write("   ")      
//                  }
//                 }
//                 console.log("")
//         }



// E word
        //  for(i=1;i<=8;i++){
        //  for(j=1;j<=8;j++)
        //         if(i==1||j==1||i==4||i==8){
        //                process.stdout.write("*   ") 
        //         }else{
        //                 process.stdout.write("   ")
        
        //         }
        //         console.log(" ")
        //  }
         

        
 // F word
        // for(i=1;i<=7;i++){
        //         for(j=1;j<=5;j++)
        //                if(i==1||j==1||i==4){
        //                       process.stdout.write("*   ") 
        //                }else{
        //                        process.stdout.write("   ")
               
        //                }
        //                console.log(" ")
        //         }



 // p word
        // for(i=1;i<=8;i++){
        //         for(j=1;j<=8;j++)
        //                if(j==1||i==1 && j<6||i==5 && j<6||i==2 && j==7||i==3 && j==7||i==4 && j==7){
        //                       process.stdout.write("*   ") 
        //                }else{
        //                        process.stdout.write("   ")
               
        //                }
        //                console.log(" ")
        //         }




//       d word
                        // for(i=1;i<=8;i++){
                        // for(j=1;j<=8;j++)
                        //        if(j==1||i==1 && j<=4||i==8 && j<=4||j==5 && j<=5){
                        //               process.stdout.write("*   ") 
                        //        }else{ 
                        //                process.stdout.write("     ")
                       
                        //        }
                        //        console.log(" ")
                        // }


//   T word
        //     for(i=1;i<=7;i++){
        //               for(j=1;j<=7;j++)
        //                          if(i==1||j==4 && j<=5){
        //                          process.stdout.write("*   ") 
        //                      }else{ 
        //                         process.stdout.write("    ")
                               
        //                      }
        //                  console.log(" ")
        //              }
        


        // I word
                        //      for(i=1;i<=7;i++){
                        //       for(j=1;j<=7;j++)
                        //                  if(i==1||i==7||j==4){
                        //                  process.stdout.write("*   ") 
                        //              }else{ 
                        //                 process.stdout.write("    ")
                                       
                        //              }
                        //          console.log(" ")
                        //      }
                

// L word
                //       for(i=1;i<=6;i++){
                //       for(j=1;j<=6;j++)
                //                  if(j==1||i==6 && j<5){
                //                  process.stdout.write("*   ") 
                //              }else{ 
                //                 process.stdout.write("    ")
                               
                //              }
                //          console.log(" ")
                //      }
        
//     A word
                        //       for(let i=1;i<=8;i++){
                        //       for(let  j=1;j<=9;j++)
                        //                  if(i+j == 5+1||i+4==j ||i==3&&j>=3&&j<=6){
                        //                  process.stdout.write("* ") 
                        //              }else{ 
                        //                 process.stdout.write("  ")
                                       
                        //              }
                        //          console.log("")
                        //      }
                


                        // vivor name 
                                //        for(i=1;i<=6;i++){
                                //         for(j=1;j<=6;j++)
                                //                 if(i==j){
                                //                         process.stdout.write("*  ")
                                //                 }else{
                                //                         process.stdout.write("   ")
                                //                 }for(j=6;j>=1;j--){
                                //                  if(j-1==i){
                                                //         process.stdout.write("*   ")  
                                                //  }else{
                                                //         process.stdout.write("   ")      
                                                //  }
                                                // }
                                                // // console.log("")
                                                           
        
                                                // //       for(i=1;i<=7;i++){
                                                //       for(j=1;j<=7;j++)
                                                //                  if(i==1||i==6||j==4){
                                                //                  process.stdout.write("*   ") 
                                                //              }else{ 
                                                //                 process.stdout.write("    ")
                                                               
                                                //              }


                                                //          for(j=1;j<=6;j++)
                                                // if(i==j){
                                                //         process.stdout.write("*  ")
                                                // }else{
                                                //         process.stdout.write("   ")
                                                // }for(j=6;j>=1;j--){
                                                //  if(j-1==i){
                                                //         process.stdout.write("*   ")  
                                                //  }else{
                                                //         process.stdout.write("   ")      
                                                //  }
                                                // }
                                                // console.log(" ")

                                                //      }
                                                        //    for(let i=1;i<=6;i++){
                                                        //     for(let j=1;j<=6;j++){
                                                        //         if(i==1&&j>=3&&j<=4||i==6&&j>=3&&j<=4||j==1&&i>=3&&i<=4||j==6&&i>=3&&i<=4||i==2&&j==2||j==5&&i==2||i==5&&j==2||j==5&&i==5){
                                                        //             process.stdout.write("*  ")
                                                        //         }else{
                                                        //             process.stdout.write("  ")
                                                        //         }
                                                        //     }
                                                        //     console.log(" ");
                                                        // }

                                                //        for(let i=1;i<=7;i++){
                                                        // for(let j=1;j<=6;j++){
                                                        //                 if(i==1&&j<=4||j==1||i==4&&j<=4||i==j+1||j==5&&i==2){
                                                        //                     process.stdout.write("* ")
                                                        //                 }else{
                                                        //                     process.stdout.write("  ")
                                                        //                 }
                                                        //             }
                                                        //             console.log("");
                                                        //         }
                                                                
                                                    
       // -----function------//



// function ank(){
// console.log("hello");
// }
// ank();
// ank();
// ank();
// ank();


// let a=function(){
//     console.log("hello");
// }
// a();
// a();
// a();
// a();


// let a=()=>{
//     console.log("hello");

// }

// a();
// a();


// (function(){
//     console.log("hello");
// })
// ();


// (()=>{
//     console.log("hello");
// })();


// function ank(a,b){
//      console.log(a+b);
// }
// ank(2,3);
// ank(6,8);
// ank("ankesh","kumar");

// function one(two){
//     console.log("function one");
// two(three);
// }
 

// function two(three){
//     console.log("function two");
//     three(four);
// }


// function three(four){
//     console.log("function three");
//     four("hello");
// }


// function four(five){
//     console.log("function four");
//     console.log(five)
// }
// one(two);

               






// function ank(name,email){
//     return name +email
// }
// let a=ank(4,5)
// let b=ank(10,10);
// console.log(a,b)

// let i=1;
// function ank(){
//     if(i<=50){
//     console.log(i);
//     i++;
   
//     }
//     ank();
// }
// ank();


// let count=1;
// let a=setInterval(()=>{
//   if(count==10){
//     clearInterval(a)
//   }
//   console.log(count)
//   count++


// },1000)


// setTimeout(()=>{
//    console.log("hello")
// },5000);






// function one(two){
//     setTimeout(()=>{
//     console.log("function one");
// },5000)
// two(three);
// }
 

// function two(three){
//     console.log("function two");
//     three(four);
// }


// function three(four){
//     console.log("function three");
//     four("hello");
// }


// function four(five){
//     console.log("function four");
//     console.log(five)
// }
// // setTimeout(()=>{

//     one(two);
// let count=1;
// function ank(){
//     console.log("hello:--",count);
//     count++
// }

// let a= setInterval(ank,100);


// setTimeout(()=>{
//     clearInterval(a)
// },9000)

// setTimeout(ank,5000) 



// array
// let array1=["deepak1","rajesh","vivor","mukesh1","rohan","sanjeev1"];
// console.log(array1[3]);

//   let length=array1.length;
//  console.log(length);

// for(let i=0;i<length;i++){
//     console.log(i,array1[i]);
//     }
//     console.log(length) 


//        let array=["deepak","rajesh","vivor","mukesh","rohan","sanjeev"];
    //    let find=array.includes("vivor");
//     let index=array.indexOf("sanjeev")
//     array.push("ankesh");
//     array.pop();
//     array.unshift("ankesh");
//     array.shift();
//       array.splice(3,2,"ankesh","rupesh","gfyryorf")


//    let arr= array.slice()
//    console.log(arr);
//        console.log(array);


// let array=["deepak","rajesh","vivor","mukesh","rohan","sanjeev"];
//     let arr=[12,32,43,45,76,2,1,9]

    // let a=arr.concat(array);

    // let a=  array.copyWithin(0,4,6)
  //  array.find((e,i,arr)=>{
  //     if(i<2){
  //       console.log(e)
  //     }
  //  })

  // let a=array.filter((e,i,arr)=>i==2||i==4)

// let a=array.map((eeee,iiiii,arr)=>iiiii%2==0)

// array.forEach((e,i,arr)=>{
//      console.log(e,i,arr)
// })
 

      //  console.log(a);

// for(e of array){
//   console.log(e)
// }

// for(i in array){
//   console.log(i)
// }

// let a=arr.reduce((a,b)=>a+b)


// console.log(a)

//objects 


        
// let obj=[{
//         name:"ankesh",
//         age:27,
//         mobile:[89765432,09876543],
//         email:"ankesh@gmial.com",
//       },
//       {
//         name:"rajesh",
//         age:23,
//         mobile:9876543,
//         email:"rajesh@gmail.com"

//       }
//     ]

//       obj[0].id=123;
//       obj[0].address="mohali";
//       obj[0].mobile=9650238992
//       delete obj[0].email



//       console.log(obj[1].email);

// [11:08, 10/3/2022] Rajesh Omninos:
 // function ank(P1){
      //   this.name="ankesh";
      //   this.age=27;
      //   this.mobile=8765432134;
      //   this.ROLL=P1
      // }
      // let obj=new ank(876576);
      // ank.prototype.email="ankesh@gmail.com"
      // ank.prototype.id=765345
      // ank.prototype.address="mohali";
      // ank.prototype.email="mukesh@gmail.com";
      // delete ank.prototype.id
      // console.log(ank.prototype);

//       let obj={
//         name:'ankesh',
//         age:33,
//         email:"ankesh@gmial.com"
//       }
//       console.log(obj);


//       let obj1=JSON.stringify(obj);
//       console.log(obj1.name);


//       let obj2=JSON.parse(obj1);
//       console.log(obj2.name)
// [11:08, 10/3/2022] Rajesh Omninos: {"data":[{
//     "name":"ankesh",
//     "age":27,
//     "mobile":[98765430,39876543567]
// },
// {
//     "name":"ankesh",
//     "age":27,
//     "mobile":98765430
// },
// {
//     "name":"ankesh",
//     "age":27,
//     "mobile":98765430
// }]}


// let a=10;

// let arr=["raohan","sohan","mphan"]

//       let prom=new Promise((resolve,reject)=>{
//         if(a<20){
//             resolv(arr)
//         }else{
//           throw new Error ("reject data")
//         }    
//       });

//       prom.then((result)=>{
//           console.log("hello"+result)
//       }).catch((error)=>{
//           console.log("hii"+error)
//       }).finally(()=>{
//         console.log(arr)
//       })



// let prom=new Promise((resolve,reject)=>{ 
//   setTimeout(()=>{
//      resolve("data is resolve")
//   },2000)
 
// });

// async function ank(){
//   let result= await prom;
// console.log(result);
//   console.log("async function")
// }
// ank();

// let a=40;

// try{
// if(a<=20){
//      console.log("hello")
// }else{
//     cnsole.log("condition is false");
// }
// }catch(err){
// console.log(""+err)
// }finally{
//   console.log("hii")
// }

