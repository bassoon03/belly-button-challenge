// Url for json file
const url = "https://static.bc-edx.com/data/dl-1-2/m14/lms/starter/samples.json";



// Read in file from url
d3.json(url).then(function(data){
    values = data.samples;
    meta_data = data.metadata;
    Names = data.names;
    value10 = values.sample_values.slice(0,10);
    ids10 = values.otu_ids.slice(0,10);
    labels10 = values.otu_labels.slice(0,10);
});

// When new dropdown menu option selected, optionChanged called
d3.selectAll("#selDataset").on("onchange", optionChanged);



function init() {
    const trace = {
        x : value10,
        y : ids10,
        text : lables10,
        type : 'bar',
        orientation : 'h'
    };

    const bubble_trace = {
        x : values[i],
        y : otuIds,
        mode : 'markers',
        markers : {
            size : 
        };
    }};




init();

d3.selectAll("#selDataset").on("onchange", optionChanged);    

function optionChanged() {
    let dropdownMenu = d3.selectAll("#selDataset");
    let dataset = dropdownMenu.property(Names);
        
    //let x = [];
    //let y = [];
    
    Plotly.restyle("plot","x",[x])
    Plotly.restyle("plot","y",[y])};