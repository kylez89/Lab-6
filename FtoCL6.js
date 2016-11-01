function convertTemp(temp,tempType){
  var result;
  if (tempType==="F") {
    result=((temp*9/5)+32);
  }
  
 if (tempType==="C"){ 
    result=((temp-32)*(5/9));
  }

  console.log ("This is the Temperature "+  temp + " " + tempType + " " + result);
  
}

/*
var Mytype = "F";
var Mytemp = 100;
convertTemp(Mytemp,Mytype);
*/


convertTemp(212, "C"); // > 100
convertTemp(32, "C"); // > 0
convertTemp(65, "C"); // > 18.333
convertTemp(-40, "F"); // > -40
convertTemp(0, "F"); // > 32




