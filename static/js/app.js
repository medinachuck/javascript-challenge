// get table data from data.js
var tableData = data;

// select tbody of table
var tbody = d3.select("tbody");

// append table with rows and cells using ufo data 
tableData.forEach(x => {
    var row = tbody.append("tr");
    Object.entries(x).forEach(([key, value]) => {
        var cell = row.append("td");
        cell.text(value);
    });
});

// select button in filter box and set it to run the filter function when clicked
var button = d3.select("#filter-btn");
button.on("click", applyFilters);

// create filter function
function applyFilters() {

    // clear the body of table when function is called
    tbody.html("");

    // prevent default behavior of inputs
    d3.event.preventDefault();

    // create a separate variables to reference each filter condition
    var dateInput = d3.select("#datetime");
    var dateValue = dateInput.property("value");
    var cityInput = d3.select("#city_search");
    var cityValue = cityInput.property("value");
    var stateInput = d3.select("#state_search");
    var stateValue = stateInput.property("value");
    var countryInput = d3.select("#country_search");
    var countryValue = countryInput.property("value");
    var shapeInput = d3.select("#shape_search");
    var shapeValue = shapeInput.property("value");

    // set table data to a common data variable that will be passed through all the filter conditions
    var filteredData = tableData;

    // filter table using date if input was provided
    if (dateValue.length > 0) {
        filteredData = filteredData.filter(row => row.datetime === dateValue);
    };
    // filter table using city if input was provided
    if (cityValue.length > 0) {
        filteredData = filteredData.filter(row => row.city === cityValue);
    };
    // filter table using state if input was provided
    if (stateValue.length > 0) {
        filteredData = filteredData.filter(row => row.state === stateValue);
    };
    // filter table using country if input was provided
    if (countryValue.length > 0) {
        filteredData = filteredData.filter(row => row.country === countryValue);
    };
    // filter table using shape if input was provided
    if (shapeValue.length > 0) {
        filteredData = filteredData.filter(row => row.shape === shapeValue);
    };

    // repopulate table using filtered data
    filteredData.forEach(x => {
        var row = tbody.append("tr");
        Object.entries(x).forEach(([key, value]) => {
            var cell = row.append("td");
            cell.text(value);
        });
    });    

};
// YOUR CODE HERE!
