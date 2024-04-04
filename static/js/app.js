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



function traces(k) {
    let trace = {
        x : values[k].sample_values.slice(0,10),
        y : values[k].otu_ids.slice(0,10).toString(),
        text : values[k].otu_labels.slice(0,10),
        type : 'bar',
        orientation : 'h'
    };

    let bubble_trace = {
        x : values[k].otu_ids.toString(),
        y : values[k].sample_values,
        mode : 'markers',
        markers : {
            size : values[k].sample_values,
            color : values[k].otu_ids.toString(),
        },
        text : values[k].otu_labels
    };

    Plotly.newPlot("bar", [trace]);
    Plotly.newPlot("bubble", [bubble_trace]);

};

function meta_portrait(result) {
    // Figure out filter
    d3.select("#sample-metadata");
    for (j = 0; j < meta_data.length; j++) {
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
    traces(0);
    meta_portrait(meta_data[0]);
    };


init();


// When new dropdown menu option selected, optionChanged called
d3.selectAll("#selDataset").on("onchange", optionChanged);    

function optionChanged() {

    let dataset = dropdownMenu.property("value");
    let i = Names.indexOf(dataset);
    let metaSet = meta_data[i]; 
    
    
    traces(i);
    meta_portrait(metaSet);


    
    Plotly.react("bar", [trace]);
    Plotly.react("bubble", [bubble_trace])
    Plotly.react("sample-metadata", [demo_trace])
};

});

