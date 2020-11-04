// from data.js
var tableData = data;

// YOUR CODE HERE!
var tbody = d3.select('tbody');

// console log the ufo data from data.js
console.log(tableData);

// loop through the data and console log each ufo sighting object
tableData.forEach(ufoData => {
    var row = tbody.append('tr');
    Object.values(ufoData).forEach(value => {
        console.log(value);
        row.append('td').text(value);
    })
})

// select the button 