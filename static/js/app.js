// Url for json file
const url = "https://static.bc-edx.com/data/dl-1-2/m14/lms/starter/samples.json";

// Read in file from url
d3.json(url).then(function(data){
    values = data.samples;
    meta_data = data.metadata;
    Names = data.names;
});

function init() {
    trace = {
        x : values[0].sample_values.slice(0,10),
        y : values[0].sample_values.slice(0,10),
        text : values[0].otu_labels.slice(0,10),
        type : 'bar',
        orientation : 'h'
    };

    bubble_trace = {
        x : values[0].otu_ids,
        y : values[0].sample_values,
        mode : 'markers',
        markers : {
            size : values[0].sample_values,
        }
    };

    //Demographic chart still needed
};

init();


// When new dropdown menu option selected, optionChanged called
d3.selectAll("#selDataset").on("onchange", optionChanged);    

function optionChanged() {
    let dropdownMenu = d3.selectAll("#selDataset");
    let dataset = dropdownMenu.property("value");
        
    i = Names.indexOf(dataset);
    trace = {
        x : values[i].sample_values.slice(0,10),
        y : values[i].sample_values.slice(0,10),
        text : values[i].otu_labels.slice(0,10),
        type : 'bar',
        orientation : 'h'
    };

    bubble_trace = {
        x : values[i].otu_ids,
        y : values[i].sample_values,
        mode : 'markers',
        markers : {
            size : values[i].sample_values,
        }
    }
    
    Plotly.restyle("plot","x",[x])
    Plotly.restyle("plot","y",[y])};