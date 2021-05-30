"use strict";

let hours=["6am","7am","8am","9am","10am","11am","12pm","1pm","2pm","3pm","4pm","5pm","6pm","7pm"];
console.log(hours);

function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

let seatle ="";
let tokyo ="";
let dubai ="";
let paris ="";
let lima ="";

let locations=[seatle,tokyo,dubai,paris,lima];

for(let i=0; i<locations.length ; i++){

    if(locations[i]===seatle){

  seatle ={
  name:"seatle" ,
  minCPH:23 ,
  maxCPH: 65,
  avgCookieSale:6.3,
  RandomCPH:[],
  avgCookiesPH:[],
  
  //Method  Random Number of customer each hour
    getRanNumbOfcustEh :function(){

    for(let i=0;i<hours.length;i++){

    this.RandomCPH.push(randomNumber(this.minCPH,this.maxCPH));
     console.log(`Random # ${this.RandomCPH[i]}`);
    }
     //return (this.RandomCPH[i] 
    },

    // Method avg cookies per hour = randomNum* avg
    // avgCookies.push(23*avg)

    setAvgCookiesPH: function(){
        for(let i=0;i<hours.length;i++){

            this.avgCookiesPH.push(Math.floor((randomNumber(this.minCPH,this.maxCPH))*this.avgCookieSale));
             console.log(this.avgCookiesPH[i])
            }
    }
 
  };

seatle.getRanNumbOfcustEh();
seatle.setAvgCookiesPH();
    
 
// unorderd list using dom


let seatle1= document.getElementById('second');
console.log(seatle1);
let Round=document.createElement('ul');
seatle1.appendChild(Round);

 for(let i=0;i<=hours.length;i++){

    let listItem=document.createElement("li");
    
    if (i<hours.length){
     listItem.textContent=`${hours[i]} : ${seatle.avgCookiesPH[i]}`;
    }
    else {
        let total=0;
   for(let i=0; i<seatle.avgCookiesPH.length;i++){
    total += seatle.avgCookiesPH[i];
   console.log(total);
   }
   listItem.textContent=`TOTAL : ${total}`;
        
    }
    Round.appendChild(listItem);

}



    }
 else if(locations[i]===tokyo){
console.log('hello from dubai');
 tokyo ={
  name:"tokyo" ,
  minCPH:3 ,
  maxCPH: 24,
  avgCookieSale:1.2,
  RandomCPH:[],
  avgCookiesPH:[],
  
  //Method  Random Number of customer each hour
    getRanNumbOfcustEh :function(){

    for(let i=0;i<hours.length;i++){

    this.RandomCPH.push(randomNumber(this.minCPH,this.maxCPH));
     console.log(`Random # ${this.RandomCPH[i]}`);
    }
     //return (this.RandomCPH[i] 
    },

    // Method avg cookies per hour = randomNum* avg
    // avgCookies.push(23*avg)

    setAvgCookiesPH: function(){
        for(let i=0;i<hours.length;i++){

            this.avgCookiesPH.push(Math.floor((randomNumber(this.minCPH,this.maxCPH))*this.avgCookieSale));
             console.log(this.avgCookiesPH[i])
            }
    }
 
  };

  tokyo.getRanNumbOfcustEh();
  tokyo.setAvgCookiesPH();

 
// unorderd list using dom


let tokyo1= document.getElementById('third');
console.log(tokyo1);
let Round=document.createElement('ul');
tokyo1.appendChild(Round);

 for(let i=0;i<=hours.length;i++){

    let listItem=document.createElement("li");
    
    if (i<hours.length){
     listItem.textContent=`${hours[i]} : ${tokyo.avgCookiesPH[i]}`;
    }
    else {
        let total=0;
   for(let i=0; i<tokyo.avgCookiesPH.length;i++){
    total += tokyo.avgCookiesPH[i];
   console.log(total);
   }
   listItem.textContent=`TOTAL : ${total}`;
        
    }
    Round.appendChild(listItem);

}
}
  
else if(locations[i]===dubai){
 dubai ={
    name:"dubai" ,
    minCPH:11 ,
    maxCPH: 38,
    avgCookieSale:3.7,
    RandomCPH:[],
    avgCookiesPH:[],
    
    //Method  Random Number of customer each hour
      getRanNumbOfcustEh :function(){
  
      for(let i=0;i<hours.length;i++){
  
      this.RandomCPH.push(randomNumber(this.minCPH,this.maxCPH));
       console.log(`Random # ${this.RandomCPH[i]}`);
      }
       //return (this.RandomCPH[i] 
      },
  
      // Method avg cookies per hour = randomNum* avg
      // avgCookies.push(23*avg)
  
      setAvgCookiesPH: function(){
          for(let i=0;i<hours.length;i++){
  
              this.avgCookiesPH.push(Math.floor((randomNumber(this.minCPH,this.maxCPH))*this.avgCookieSale));
               console.log(this.avgCookiesPH[i])
              }
      }
   
    };
  
  dubai.getRanNumbOfcustEh();
  dubai.setAvgCookiesPH();
  
   
  // unorderd list using dom
  
  
  let dubai1= document.getElementById('forth');
  console.log(dubai1);
  let Round=document.createElement('ul');
  dubai1.appendChild(Round);
  
   for(let i=0;i<=hours.length;i++){
  
      let listItem=document.createElement("li");
      
      if (i<hours.length){
       listItem.textContent=`${hours[i]} : ${dubai.avgCookiesPH[i]}`;
      }
      else {
          let total=0;
     for(let i=0; i<dubai.avgCookiesPH.length;i++){
      total += dubai.avgCookiesPH[i];
     console.log(total);
     }
     listItem.textContent=`TOTAL : ${total}`;
          
      }
      Round.appendChild(listItem);
  
  }
}
    else if(locations[i]===paris){
        paris ={
    name:"paris" ,
    minCPH:20 ,
    maxCPH: 38,
    avgCookieSale:2.3,
    RandomCPH:[],
    avgCookiesPH:[],
    
    //Method  Random Number of customer each hour
      getRanNumbOfcustEh :function(){
  
      for(let i=0;i<hours.length;i++){
  
      this.RandomCPH.push(randomNumber(this.minCPH,this.maxCPH));
       console.log(`Random # ${this.RandomCPH[i]}`);
      }
       //return (this.RandomCPH[i] 
      },
  
      // Method avg cookies per hour = randomNum* avg
      // avgCookies.push(23*avg)
  
      setAvgCookiesPH: function(){
          for(let i=0;i<hours.length;i++){
  
              this.avgCookiesPH.push(Math.floor((randomNumber(this.minCPH,this.maxCPH))*this.avgCookieSale));
               console.log(this.avgCookiesPH[i])
              }
      }
   
    };
  
    paris.getRanNumbOfcustEh();
    paris.setAvgCookiesPH();
  
   
  // unorderd list using dom
  
  
  let paris1= document.getElementById('fifth');
  console.log(paris1);
  let Round=document.createElement('ul');
  paris1.appendChild(Round);
  
   for(let i=0;i<=hours.length;i++){
  
      let listItem=document.createElement("li");
      
      if (i<hours.length){
       listItem.textContent=`${hours[i]} : ${paris.avgCookiesPH[i]}`;
      }
      else {
          let total=0;
     for(let i=0; i<paris.avgCookiesPH.length;i++){
      total += paris.avgCookiesPH[i];
     console.log(total);
     }
     listItem.textContent=`TOTAL : ${total}`;
          
      }
      Round.appendChild(listItem);
  
  } 
    }else if(locations[i]===lima){
lima ={
    name:"lima" ,
    minCPH:2 ,
    maxCPH: 16,
    avgCookieSale:4.6,
    RandomCPH:[],
    avgCookiesPH:[],
    
    //Method  Random Number of customer each hour
      getRanNumbOfcustEh :function(){
  
      for(let i=0;i<hours.length;i++){
  
      this.RandomCPH.push(randomNumber(this.minCPH,this.maxCPH));
       console.log(`Random # ${this.RandomCPH[i]}`);
      }
       //return (this.RandomCPH[i] 
      },
  
      // Method avg cookies per hour = randomNum* avg
      // avgCookies.push(23*avg)
  
      setAvgCookiesPH: function(){
          for(let i=0;i<hours.length;i++){
  
              this.avgCookiesPH.push(Math.floor((randomNumber(this.minCPH,this.maxCPH))*this.avgCookieSale));
               console.log(this.avgCookiesPH[i])
              }
      }
   
    };
  
    lima.getRanNumbOfcustEh();
    lima.setAvgCookiesPH();
  
   
  // unorderd list using dom
  
  
  let lima1= document.getElementById('sixth');
  console.log(lima1);
 let Round=document.createElement('ul');
  lima1.appendChild(Round);
  
   for(let i=0;i<=hours.length;i++){
  
      let listItem=document.createElement("li");
      
      if (i<hours.length){
       listItem.textContent=`${hours[i]} : ${lima.avgCookiesPH[i]}`;
      }
      else {
          let total=0;
     for(let i=0; i<lima.avgCookiesPH.length;i++){
      total += lima.avgCookiesPH[i];
     console.log(total);
     }
     listItem.textContent=`TOTAL : ${total}`;
          
      }
      Round.appendChild(listItem);
  
  }
    
}


}
    

    