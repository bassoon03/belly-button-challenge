const url = "https://static.bc-edx.com/data/dl-1-2/m14/lms/starter/samples.json";

const sampleJson = d3.json(url);
console.log("samples.json", sampleJson);

sampleJson.then(function(data) {
    console.log(data);
});







// For loop and lists will be created here.

let values = [];
let otuIds = [];
let otuLabels = [];

// Loop to create lists
// Create similar loop for bubble chart data
for (let i = 0; i < sampleJson.length; i++) {
    row = samples[1];
    const sortedSamples = points.slice().sort(function(a,b) {
        return b-a;
    });
    const sortedIds = [];
    const sortedLabels = [];
    sortedSamples.forEach(function(val) {
        const position = row.values.indexOf(val);
        sortedIds.push(row.otu_ids[position]);
        sortedLabels.push(row.otu_labels[position]);
    });
    values.push(sortedSamples);
    otuIds.push(sortedIds);
    otuLabels.push(sortedLabels);
};








bar_data = [];

for (let i = 0; i < values.length; i++) {
    const trace = {
        x : values[i],
        y : otuIds,
        text : otuLabels,
        type : 'bar',
        orientation : 'h'
    };
    data.push(trace);
};




bubble_data = [];

for (let i = 0; i < values.length; i++) {
    const trace = {
        x : values[i],
        y : otuIds,
        mode : 'markers',
        markers : {
            size : 
        };
    };

    data.push(trace);
};




function init() {
// Information for first trace
// Also information for first bubble chart and metadata
Plotly.newplot('bar', bar_data[0]);
Plotly.newplot('bubble', bubble_data[0]);
};



// To create updatePlotly function, we start with variables dropdownMenu and dataset.
// Use first trace to initialize page. Give options for datasets as conditional. Can begin here
// once necessary values are identified above.



d3.selectAll("#selDataset").on("onchange", updatePlotly)

function updatePlotly() {
    let dropdownMenu = d3.selectAll("#selDataset");
    let dataset = dropdownMenu.property("value");
    
    let x = [];
    let y = [];

    // New dataset options




    // Restyle
    Plotly.restyle("plot","x",[x])
    Plotly.restyle("plot","y",[y])
};

  init();  