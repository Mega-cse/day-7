var request =new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all");
request.send();
request.onload=function(){
    var data =JSON.parse(request.response);
    console.log(data);

    //a.Get all the countries from Asia continent /region using Filter method
    var filteredData = data.filter(country => country.region ==="Asia").map(country=>country.name.common);
    console.log(filteredData);
    //b.Get all the countries with a population of less than 2 lakhs using Filter method
    var filteredPopulation =data.filter(pop =>pop.population <=200000).map(pop=>pop.name.common);
    console.log(filteredPopulation);
    //c.Print the following details name, capital, flag, using forEach method
     data.forEach(country=>{
        console.log(country.name.common);
        console.log(country.capital);
        console.log(country.flags);
     })


    //d.Print the total population of countries using reduce method
     var totalPopulation=data.reduce((acc,ele)=>acc+ele.population,0);
     console.log(`Total population: ${totalPopulation}`);
     
     //e.Print the country that uses US dollars as currency.
    var filteredCurrencies= data.filter(country =>country.currencies && Object.keys(country.currencies).includes('USD')).map(country=>country.name.common);
    console.log(filteredCurrencies);

}