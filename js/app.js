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
    

    

let hours = ["6am", "7am", "8am", "9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm", "6pm", "7pm"];
console.log(hours);

function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

let locations = [];
let hourlyTotal=0;


function Location(name, minCPH, maxCPH, avgCookieSale) {
  this.locationName = name;
  this.minCPH = minCPH;
  this.maxCPH = maxCPH;
  this.avgCookieSale = avgCookieSale;
  this.total = 0;
  this.RandomCPH = [];
  this.avgCookiesPH = [];

  locations.push(this);



}

Location.prototype.getRanNumbOfcustEh = function () {
  for (let i = 0; i < hours.length; i++) {
    this.RandomCPH.push(randomNumber(this.minCPH, this.maxCPH));
    // console.log(`Random # ${this.RandomCPH[i]}`);
  }
}

Location.prototype.setAvgCookiesPH = function () {
  for (let i = 0; i < hours.length; i++) {
    this.avgCookiesPH.push(Math.floor((this.RandomCPH[i]) * this.avgCookieSale));
    //console.log(this.avgCookiesPH[i])
  }

}


let seattle = new Location("SEATTLE", 23, 65, 6.3);
seattle.getRanNumbOfcustEh();
seattle.setAvgCookiesPH();

let tokyo = new Location("TOKYO", 3, 24, 1.2);
tokyo.getRanNumbOfcustEh();
tokyo.setAvgCookiesPH();

let dubai = new Location("DUBAI", 11, 38, 3.7);
dubai.getRanNumbOfcustEh();
dubai.setAvgCookiesPH();

let paris = new Location("PARIS", 20, 38, 2.3);
paris.getRanNumbOfcustEh();
paris.setAvgCookiesPH();

let lima = new Location("LIMA", 2, 16, 4.6);
lima.getRanNumbOfcustEh();
lima.setAvgCookiesPH();

console.log(seattle)

console.log(locations)

//=============Table===========


let parent = document.getElementById('parent');
let table = document.createElement('table');
parent.appendChild(table);

// header method
let headerMethod = function () {

  let trElement = document.createElement("tr");
  table.appendChild(trElement);
  trElement.textContent = `Name/hours`;

  for (let i = 0; i < hours.length; i++) {
    let thElement = document.createElement("th");
    trElement.appendChild(thElement);
    thElement.textContent = `${hours[i]}`;
  }


  let thElement1 = document.createElement("th");
  trElement.appendChild(thElement1);
  thElement1.textContent = `Daily Location Total`;

}

// render method >>> create contents of table tds  o total
Location.prototype.renderMethod = function () {
 let trElement2 = document.createElement("tr");
 table.appendChild(trElement2);

  let tdElement = document.createElement("td");
  trElement2.appendChild(tdElement);
  tdElement.textContent = `${this.locationName}`;

  
  for (let i = 0; i < hours.length; i++) {

    let tdElement = document.createElement("td");
    trElement2.appendChild(tdElement);
    tdElement.textContent = `${this.avgCookiesPH[i]}`;

    this.total+= this.avgCookiesPH[i];

  }

  let lastTd = document.createElement("td");
    trElement2.appendChild(lastTd);
    lastTd.textContent = `${this.total}`;
    this.total=0;




}

// footer method
let totalTotal=0;
let footerMethod = function () {
  let footerRow = document.createElement("tr");
  table.appendChild(footerRow);
  // footerRow.textContent = `TOTAL`;

  let thElement=document.createElement("th");
  footerRow.appendChild(thElement);
  thElement.textContent = `ToTal`;

  for (let i = 0; i < hours.length; i++) {
    hourlyTotal=0;
    for(let j=0; j<locations.length;j++){
     hourlyTotal+= locations[j].avgCookiesPH[i];
      
    }
    totalTotal+=hourlyTotal;
    let totalThElement= document.createElement('th');
    footerRow.appendChild(totalThElement);
    totalThElement.textContent=hourlyTotal;
  }
  
 
  let totalTotalElement=document.createElement('th');
  footerRow.appendChild(totalTotalElement);
  totalTotalElement.textContent=totalTotal;
  console.log(totalTotal)

}




headerMethod();
// seattle.renderMethod();
// tokyo.renderMethod();
// dubai.renderMethod();
// paris.renderMethod();
// lima.renderMethod();

for(let i=0; i<locations.length;i++){
  locations[i].renderMethod();
}

footerMethod();



//=============================================================lab9 Events and forms =========================================================

let newLocationForm= document.getElementById("form");

newLocationForm.addEventListener('submit',submitter);


function submitter(event){
  // to prevent the refresh when press on submit
  event.preventDefault();

  // to see tha path
  console.log(event);

  let newlocationName=event.target.nameField.value;
  //console.log(newlocationName)

  //cuz form gives me string values always so we have to convert it to numbers
  let newMinCPh=Number(event.target.minField.value);
  let newMaxCPh=Number(event.target.maxField.value);
  let newAvgS=Number(event.target.avgField.value);

 let newAddedLocation=new Location(newlocationName,newMinCPh,newMaxCPh,newAvgS);
  console.log(newAddedLocation);

  if (newAddedLocation.minCPH > newAddedLocation.maxCPH){
    
    document.getElementById("form").reset();
    alert("try again! minCPH must be less than max");
    
    }


  //1-remove the total

table.removeChild(table.lastChild);

// //2- add new location to table (render it)
newAddedLocation.getRanNumbOfcustEh();
newAddedLocation.setAvgCookiesPH();
newAddedLocation.renderMethod();

 //3- add the total again to the table
footerMethod();

//to reset my submit button 
document.getElementById("form").reset();

}

//====================================update values==================================

// let newUpadateLocation=document.getElementById('parent');

// newUpadateLocation.addEventListener("submit",updatingMethod);

// function updatingMethod(event){
//   //event.preventDefault();

//   let newUpadateValue=event.target.f.value;



// }
