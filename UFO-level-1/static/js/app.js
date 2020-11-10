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

// EVENT LISTENERS

// select the button for users to submit
var button = d3.select('#filter-btn');

// complete click handler for the form
button.on('click', function(){
    // select input element and get the HTML node
    var inputElement = d3.select('#datetime');

    // get value property of the input element
    var inputValue = inputElement.property('value');

    // use form input to filter data by date
    var dataFilter = tableData.filter(date => date.datetime === inputValue);

    console.log(dataFilter);

    // print out the information in the empty table

    // create an empty table within the html
    tbody.html('');
    
    // display the filtered data
    dataFilter.forEach((sightings) => {

        console.log(sightings);

        // append on row for each sighting
        var row = tbody.append('tr');

        Object.entries(sightings).forEach(function([key, value]) {
            console.log(key,value);
            var item = row.append('td');
            item.text(value);
        });
    });
});