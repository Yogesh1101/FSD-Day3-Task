fetch('https://restcountries.com/v3.1/all')
.then(response => response.json())
.then(data => {
    data.forEach(country => {
        console.log(country.flags.png);
    });
})
.catch(error => {
    console.log('Error: ', error);
});