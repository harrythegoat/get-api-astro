const express = require('express');
const app = express();

//Initializing variables
var counter = 0;
var counterA = 0;
var counterB = 0;
var arr1 = new Array();
var arr2 = new Array();
var arr3 = new Array();
var arrDate = new Array();
var arrDate2 = new Array();


//Simple function to generate random integer 0-1
function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

app.get('/', (req, res)=>{
  counter++;//counting total request served
  arr1.push(counter);//push the counter to arr1

  res.set('Content-Type','text/html');
  res.write('<html>');
  res.write('<body>');

  //initialize variable for random integer
  var randomInt = getRandomInt(2);
  console.log(randomInt);

  //if statement use to create conditional requirement for partner a or partner b
  if (randomInt === 0){
    console.log('Partner A');
    counterA++;
    arr2.push(counterA);
    arrDate.push(new Date().toString());
    //total number of request served
    res.write('<font size="5"><p>Total of number request received is: <b>' +counter+ '</b> request</p></font>');
    //request served to partner a
    res.write('<p>Partner A has made total of <b>' +arr2.slice(-1)+ '</b> request</p>');
    res.write('<p>Partner A <b>FIRST</b> request was at: <b>' + arrDate[0] + '</b></p>');
    res.write('<p>Partner A <b>LAST</b> request was at: <b>'+ arrDate.slice(-1) + '</b></p>');
    //request served to partner b
    res.write('<p>Partner B has made total of <b>' +arr3.slice(-1)+ '</b> request</p>');
    res.write('<p>Partner B <b>FIRST</b> request was at: <b>' + arrDate2[0] + '</b></p>');
    res.write('<p>Partner B <b>LAST</b> request was at: <b>'+ arrDate2.slice(-1) +'</b></p>');
  }else{
    console.log('Partner B');
    counterB++;
    arr3.push(counterB);
    arrDate2.push(new Date().toString());
    //total number of request served
    res.write('<font size="5"><p>Total of number request received is: <b>' +counter+ '</b> request</p></font>');
    //request served to partner a
    res.write('<p>Partner A has made total of <b>' +arr2.slice(-1)+ '</b> request</p>');
    res.write('<p>Partner A <b>FIRST</b> request was at: <b>' + arrDate[0] + '</b></p>');
    res.write('<p>Partner A <b>LAST</b> request was at: <b>'+ arrDate.slice(-1) + '</b></p>');
    //request served to partner b
    res.write('<p>Partner B has made total of <b>' +arr3.slice(-1)+ '</b> request</p>');
    res.write('<p>Partner B <b>FIRST</b> request was at: <b>' + arrDate2[0] +'</b></p>');
    res.write('<p>Partner B <b>LAST</b> request was at: <b>'+ arrDate2.slice(-1) + '</b></p>');
  }
  res.write('</body>');
  res.write('</html>');
});

app.listen(8080, ()=> {
  console.log('Server started');
});
