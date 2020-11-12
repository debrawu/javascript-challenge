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
// track filters
var filters={}

// create a function to update the date every time an ID is changed or added 
function updateFilters(){
    var changedElement=d3.select(this).select('input')
    var elementValue=changedElement.property('value')
    var filterID=changedElement.attr('id')
    if (elementValue) {
        filters[filterID]=elementValue
    } else {
        delete filters[filterID]
    }
    filter()
}

// complete click handler for the form
d3.selectAll('.filter').on('change', updateFilters);

// create filter function 
function filter(){
    // tableData contains all data
    var dataFilter=tableData

    // Object.entries: converts a json {key:vale} to list [key, value]
    Object.entries(filters).forEach(([key, value])=>{
        dataFilter=dataFilter.filter(row=>row[key]==value)
    })
    
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
};