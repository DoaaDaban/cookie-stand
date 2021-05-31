"use strict";

let hours=["6am","7am","8am","9am","10am","11am","12pm","1pm","2pm","3pm","4pm","5pm","6pm","7pm"];
console.log(hours);

function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}


 let seattle ={
  locationName:"SEATTLE" ,
  minCPH:23 ,
  maxCPH: 65,
  avgCookieSale:6.3,
  RandomCPH:[],
  avgCookiesPH:[],
  
  //Method  Random Number of customer each hour
    getRanNumbOfcustEh :function(){

    for(let i=0;i<hours.length;i++){
    this.RandomCPH.push(randomNumber(this.minCPH,this.maxCPH));
     //console.log(`Random # ${this.RandomCPH[i]}`);
    }  
     },

    // Method avg cookies per hour = randomNum* avg
    // avgCookies.push(23*avg)

    setAvgCookiesPH: function(){
        for(let i=0;i<hours.length;i++){
            this.avgCookiesPH.push(Math.floor((this.RandomCPH[i])*this.avgCookieSale));
             //console.log(this.avgCookiesPH[i])
            }
    },

    renderMethod: function(){

     let parent=document.getElementById("parent");

     let nameElement=document.createElement("h5");
     parent.appendChild(nameElement);
     nameElement.textContent=this.locationName;

     let ulElement=document.createElement("ul");
     nameElement.appendChild(ulElement);
     console.log(this.avgCookiesPH.length)
     console.log(hours.length)
  
     let total=0;
     for (let i=0;i<hours.length;i++){
         let liElemnet=document.createElement("li");
         ulElement.appendChild(liElemnet);
         liElemnet.textContent=`${hours[i]} : ${this.avgCookiesPH[i]} cookies`;
         total= total + this.avgCookiesPH[i];
     }
     
     let liElemnet=document.createElement("li");
     ulElement.appendChild(liElemnet);
     liElemnet.textContent=` Total : ${total} cookies`;
     
    }
 
  };

seattle.getRanNumbOfcustEh();
//console.log(seattle.getRanNumbOfcustEh());
seattle.setAvgCookiesPH();
seattle.renderMethod();

//=========================TOKYO==============

let tokyo ={
    locationName:"TOKYO" ,
    minCPH:3 ,
    maxCPH: 24,
    avgCookieSale:1.2,
    RandomCPH:[],
    avgCookiesPH:[],
    
    //Method  Random Number of customer each hour
      getRanNumbOfcustEh :function(){
  
      for(let i=0;i<hours.length;i++){
      this.RandomCPH.push(randomNumber(this.minCPH,this.maxCPH));
       //console.log(`Random # ${this.RandomCPH[i]}`);
      }  
       },
  
      // Method avg cookies per hour = randomNum* avg
      // avgCookies.push(23*avg)
  
      setAvgCookiesPH: function(){
          for(let i=0;i<hours.length;i++){
              this.avgCookiesPH.push(Math.floor((this.RandomCPH[i])*this.avgCookieSale));
               //console.log(this.avgCookiesPH[i])
              }
      },
  
      renderMethod: function(){
  
       let parent=document.getElementById("parent");
  
       let nameElement=document.createElement("h5");
       parent.appendChild(nameElement);
       nameElement.textContent=this.locationName;
  
       let ulElement=document.createElement("ul");
       nameElement.appendChild(ulElement);
       console.log(this.avgCookiesPH.length)
       console.log(hours.length)
    
       let total=0;
       for (let i=0;i<hours.length;i++){
           let liElemnet=document.createElement("li");
           ulElement.appendChild(liElemnet);
           liElemnet.textContent=`${hours[i]} : ${this.avgCookiesPH[i]} cookies`;
           total= total + this.avgCookiesPH[i];
       }
       
       let liElemnet=document.createElement("li");
       ulElement.appendChild(liElemnet);
       liElemnet.textContent=` Total : ${total} cookies`;
       
      }
   
    };
  
  tokyo.getRanNumbOfcustEh();
  //console.log(seattle.getRanNumbOfcustEh());
  tokyo.setAvgCookiesPH();
  tokyo.renderMethod();
      

  //=========================DUBAI==============

let dubai ={
    locationName:"DUBAI" ,
    minCPH:3 ,
    maxCPH: 24,
    avgCookieSale:1.2,
    RandomCPH:[],
    avgCookiesPH:[],
    
    //Method  Random Number of customer each hour
      getRanNumbOfcustEh :function(){
  
      for(let i=0;i<hours.length;i++){
      this.RandomCPH.push(randomNumber(this.minCPH,this.maxCPH));
       //console.log(`Random # ${this.RandomCPH[i]}`);
      }  
       },
  
      // Method avg cookies per hour = randomNum* avg
      // avgCookies.push(23*avg)
  
      setAvgCookiesPH: function(){
          for(let i=0;i<hours.length;i++){
              this.avgCookiesPH.push(Math.floor((this.RandomCPH[i])*this.avgCookieSale));
               //console.log(this.avgCookiesPH[i])
              }
      },
  
      renderMethod: function(){
  
       let parent=document.getElementById("parent");
  
       let nameElement=document.createElement("h5");
       parent.appendChild(nameElement);
       nameElement.textContent=this.locationName;
  
       let ulElement=document.createElement("ul");
       nameElement.appendChild(ulElement);
       console.log(this.avgCookiesPH.length)
       console.log(hours.length)
    
       let total=0;
       for (let i=0;i<hours.length;i++){
           let liElemnet=document.createElement("li");
           ulElement.appendChild(liElemnet);
           liElemnet.textContent=`${hours[i]} : ${this.avgCookiesPH[i]} cookies`;
           total= total + this.avgCookiesPH[i];
       }
       
       let liElemnet=document.createElement("li");
       ulElement.appendChild(liElemnet);
       liElemnet.textContent=` Total : ${total} cookies`;
       
      }
   
    };
  
  dubai.getRanNumbOfcustEh();
  //console.log(seattle.getRanNumbOfcustEh());
  dubai.setAvgCookiesPH();
  dubai.renderMethod();
      
   //=========================PARIS==============

let paris ={
    locationName:"PARIS" ,
    minCPH:20 ,
    maxCPH: 38,
    avgCookieSale:3.7,
    RandomCPH:[],
    avgCookiesPH:[],
    
    //Method  Random Number of customer each hour
      getRanNumbOfcustEh :function(){
  
      for(let i=0;i<hours.length;i++){
      this.RandomCPH.push(randomNumber(this.minCPH,this.maxCPH));
       //console.log(`Random # ${this.RandomCPH[i]}`);
      }  
       },
  
      // Method avg cookies per hour = randomNum* avg
      // avgCookies.push(23*avg)
  
      setAvgCookiesPH: function(){
          for(let i=0;i<hours.length;i++){
              this.avgCookiesPH.push(Math.floor((this.RandomCPH[i])*this.avgCookieSale));
               //console.log(this.avgCookiesPH[i])
              }
      },
  
      renderMethod: function(){
  
       let parent=document.getElementById("parent");
  
       let nameElement=document.createElement("h5");
       parent.appendChild(nameElement);
       nameElement.textContent=this.locationName;
  
       let ulElement=document.createElement("ul");
       nameElement.appendChild(ulElement);
       console.log(this.avgCookiesPH.length)
       console.log(hours.length)
    
       let total=0;
       for (let i=0;i<hours.length;i++){
           let liElemnet=document.createElement("li");
           ulElement.appendChild(liElemnet);
           liElemnet.textContent=`${hours[i]} : ${this.avgCookiesPH[i]} cookies`;
           total= total + this.avgCookiesPH[i];
       }
       
       let liElemnet=document.createElement("li");
       ulElement.appendChild(liElemnet);
       liElemnet.textContent=` Total : ${total} cookies`;
       
      }
   
    };
  
  paris.getRanNumbOfcustEh();
  //console.log(seattle.getRanNumbOfcustEh());
  paris.setAvgCookiesPH();
  paris.renderMethod();

  
       //=========================LIMA==============

let lima ={
    locationName:"LIMA" ,
    minCPH:20 ,
    maxCPH: 38,
    avgCookieSale:3.7,
    RandomCPH:[],
    avgCookiesPH:[],
    
    //Method  Random Number of customer each hour
      getRanNumbOfcustEh :function(){
  
      for(let i=0;i<hours.length;i++){
      this.RandomCPH.push(randomNumber(this.minCPH,this.maxCPH));
       //console.log(`Random # ${this.RandomCPH[i]}`);
      }  
       },
  
      // Method avg cookies per hour = randomNum* avg
      // avgCookies.push(23*avg)
  
      setAvgCookiesPH: function(){
          for(let i=0;i<hours.length;i++){
              this.avgCookiesPH.push(Math.floor((this.RandomCPH[i])*this.avgCookieSale));
               //console.log(this.avgCookiesPH[i])
              }
      },
  
      renderMethod: function(){
  
       let parent=document.getElementById("parent");
  
       let nameElement=document.createElement("h5");
       parent.appendChild(nameElement);
       nameElement.textContent=this.locationName;
  
       let ulElement=document.createElement("ul");
       nameElement.appendChild(ulElement);
       console.log(this.avgCookiesPH.length)
       console.log(hours.length)
    
       let total=0;
       for (let i=0;i<hours.length;i++){
           let liElemnet=document.createElement("li");
           ulElement.appendChild(liElemnet);
           liElemnet.textContent=`${hours[i]} : ${this.avgCookiesPH[i]} cookies`;
           total= total + this.avgCookiesPH[i];
       }
       
       let liElemnet=document.createElement("li");
       ulElement.appendChild(liElemnet);
       liElemnet.textContent=` Total : ${total} cookies`;
       
      }
   
    };
  
  lima.getRanNumbOfcustEh();
  //console.log(seattle.getRanNumbOfcustEh());
  lima.setAvgCookiesPH();
  lima.renderMethod();
   
  
  
    
 

