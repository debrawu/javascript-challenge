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

// select the button for users to submit
var button = d3.select('#filter-btn');

// complete click handler for the form
button.on('click', function(){
    // select input element and get the HTML node
    var inputElement = d3.select('#datetime');

    // get value property of the input element
    var inputValue = inputElement.property('value');

    // use form input to filter data by date
    var dataFilter = tableData.filter(sighting => sighting.datetime === inputValue)

    console.log(dataFilter)

    // print out the information in the empty table
    
})