var request =  new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all")
request.send();
request.onload = function(){
    var res = JSON.parse(request.response);
    console.log(res);


//1. Get all the countries from Asia continent /region using Filter function

   var asiaCountry = res.filter((ele)=>ele.region == "Asia");
   console.log(asiaCountry)


//2.Get all the countries with a population of less than 2 lakhs using Filter function

   var countryLess = res.filter((ele)=>ele.population<200000);
   console.log(countryLess)


//3.Print the following details name, capital, flag, using forEach function
 
   res.forEach((ele)=>console.log(ele.name));
   res.forEach((ele)=>console.log(ele.capital));
   res.forEach((ele)=>console.log(ele.flag));


//4.Print the total population of countries using reduce function
   var totalPopulation = res.reduce((acc,cv)=>acc+cv.population,0)
   console.log(totalPopulation)


//5.Print the country that uses US dollars as currency.

     res.forEach((ele)=>console.log(ele.currencies.USD));
     
}

