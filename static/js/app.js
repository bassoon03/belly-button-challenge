const url = "https://static.bc-edx.com/data/dl-1-2/m14/lms/starter/samples.json";

const sampleJson = d3.json(url);
console.log("sample.json: ", sampleJson);

d3.json(url).then(function(data) {
    console.log(data);
});


// For loop and lists will be created here.


function init() {
// Information for first trace
// Also information for first bubble chart and metadata

}






let otuBar = [{
    x : sample_values,
    y : otu_ids,
    text: otu_labels,
    type : 'bar',
    orientation : 'h'
}];









// To create updatePlotly function, we start with variables dropdownMenu and dataset.
// Use first trace to initialize page. Give options for datasets as conditional. Can begin here
// once necessary values are identified above.



d3.selectAll("#selDataset").on("change", updatePlotly)

function updatePlotly() {
    let dropdownMenu = d3.selectAll("#selDataset");
    let dataset = dropdownMenu.property("value");
    }
    let x = [];
    let y = [];

    // New dataset options




    // Restyle
    Plotly.restyle("plot","x",[x])
    Plotly.restyle("plot","y",[y])

  init();  