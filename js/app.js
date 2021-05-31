"use strict";

let hours = ["6am", "7am", "8am", "9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm", "6pm", "7pm"];
console.log(hours);

function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

let locations = [];
let hourlyTotal=0;


function Locations(name, minCPH, maxCPH, avgCookieSale) {
  this.userName = name;
  this.minCPH = minCPH;
  this.maxCPH = maxCPH;
  this.avgCookieSale = avgCookieSale;
  this.total = 0;
  this.RandomCPH = [];
  this.avgCookiesPH = [];

  locations.push(this);



}

Locations.prototype.getRanNumbOfcustEh = function () {
  for (let i = 0; i < hours.length; i++) {
    this.RandomCPH.push(randomNumber(this.minCPH, this.maxCPH));
    // console.log(`Random # ${this.RandomCPH[i]}`);
  }
}

Locations.prototype.setAvgCookiesPH = function () {
  for (let i = 0; i < hours.length; i++) {
    this.avgCookiesPH.push(Math.floor((this.RandomCPH[i]) * this.avgCookieSale));
    //console.log(this.avgCookiesPH[i])
  }

}


let seattle = new Locations("SEATTLE", 23, 65, 6.3);

seattle.getRanNumbOfcustEh();
seattle.setAvgCookiesPH();
let tokyo = new Locations("TOKYO", 3, 24, 1.2);
tokyo.getRanNumbOfcustEh();
tokyo.setAvgCookiesPH();
let dubai = new Locations("DUBAI", 11, 38, 3.7);
dubai.getRanNumbOfcustEh();
dubai.setAvgCookiesPH();
let paris = new Locations("PARIS", 20, 38, 2.3);
paris.getRanNumbOfcustEh();
paris.setAvgCookiesPH();
let lima = new Locations("LIMA", 2, 16, 4.6);
lima.getRanNumbOfcustEh();
lima.setAvgCookiesPH();

//console.log(seattle)

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


Locations.prototype.renderMethod = function () {

  let trElement2 = document.createElement("tr");
  table.appendChild(trElement2);

  let tdElement = document.createElement("td");
  trElement2.appendChild(tdElement);
  tdElement.textContent = `${this.userName}`;



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
  
  // for(let i=0;i<hours.length;i++){
  //  totalTotal=totalTotal+ hours[i].hourlyTotal;
  //  console.log(totalTotal)
  // }
  let totalTotalElement=document.createElement('th');
  footerRow.appendChild(totalTotalElement);
  totalTotalElement.textContent=totalTotal;
  console.log(totalTotal)

}




headerMethod();
seattle.renderMethod();
tokyo.renderMethod();
dubai.renderMethod();
paris.renderMethod();
lima.renderMethod();
footerMethod();



