// Url for json file
const url = "https://static.bc-edx.com/data/dl-1-2/m14/lms/starter/samples.json";

// Read in file from url
d3.json(url).then(function(data){
    values = data.samples;
    meta_data = data.metadata;
    Names = data.names;


const dropdownMenu = d3.select("#selDataset");
    dropdownMenu.selectAll("option")
        .data(Names)
        .enter()
        .append("option")
        .text(d => d);



function traces(i) {
    let trace = {
        x : values[i].sample_values.slice(0,10),
        y : values[i].otu_ids.slice(0,10),
        text : values[i].otu_labels.slice(0,10),
        type : 'bar',
        orientation : 'h'
    };

    let bubble_trace = {
        x : values[i].otu_ids,
        y : values[i].sample_values,
        mode : 'markers',
        markers : {
            size : values[i].sample_values,
            color : values[i].otu_ids,
        },
        text : values[i].otu_labels
    };

    Plotly.newPlot("bar", [trace]);
    Plotly.newPlot("bubble", [bubble_trace]);

};

function meta_portrait(i) {
    // Figure out filter
    result = meta_data.indexOf(dataset);
    d3.select("sample-metadata");
    for (i = 0; i < result.length; i++) {
        demographics = {
            "id" : result["id"],
            "ethnicity" : result["ethnicity"],
            "gender" : result["gender"],
            "age" : result["age"],
            "location" : result["location"],
            "bbtype" : result["bbtype"],
            "wfreq" : result["wfreq"]
        };
        demographics.appendTo("#sample-metadata");
    };
};

function init() {

    let i = 1;
    traces(i);
    meta_portrait(i);
    };


init();


// When new dropdown menu option selected, optionChanged called
d3.selectAll("#selDataset").on("onchange", optionChanged);    

function optionChanged() {
    let dataset = dropdownMenu.property("value");    
    let i = Names.indexOf(dataset);
    traces(i);
    meta_portrait(i);


    
    Plotly.restyle("bar", [trace]);
    Plotly.restyle("bubble", [bubble_trace])
    Plotly.restyle("sample-metadata", [demo_trace])
};
});


