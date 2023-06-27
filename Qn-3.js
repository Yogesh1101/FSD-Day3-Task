fetch('https://restcountries.com/v3.1/all')
.then(response => response.json())
.then(data => {
    data.forEach(country => {
        const name = country.name.common;
        const region = country.region;
        const subRegion = country.subregion;
        const population = country.population;

        console.log('Name: ', name);
        console.log('Region: ', region);
        console.log('Sub-Region: ', subRegion);
        console.log('Population: ', population);
        console.log(' ')
    });
})
.catch(error => {
    console.log('Error: ', error);
});