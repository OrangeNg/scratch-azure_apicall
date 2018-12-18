// This extension prompts user for an image then does an API call to
// Microsoft Azure Computer Vision to analyze image and identify subject
// matter in the image.

(function(ext) {
    // Cleanup function when the extension is unloaded
    ext._shutdown = function() {};

    // Status reporting code
    // Use this to report missing hardware, plugin or unsupported browser
    ext._getStatus = function() {
        return {status: 2, msg: 'Ready'};
    };

    // Function for block that analyses image based on image URL
    ext.recogImageByURL = function(imageURL) {
        
        // If no URL entered, return warning message
        if(imageURL == ""){
            console.log("Please enter URL...");
            return "Please enter a URL!";
        }

        // If imageURL passes input checks
        var xhttp = new XMLHttpRequest();

        // Replace with valid subscription key accordingly
        var subscriptionKey = "6ea075b7325c4df79d8464695622b2e1";

        // You must use the same Azure region in your REST API method as you used to
        // get your subscription keys.
        var uriBase =
            "https://southeastasia.api.cognitive.microsoft.com/vision/v2.0/analyze";

        // Data containing image URL to send in POST request
        var data =  {"url": imageURL};
        
        // Request parameters.
        // Ref: https://westus.dev.cognitive.microsoft.com/docs/services/5adf991815e1060e6355ad44/operations/56f91f2e778daf14a499e1fa
        var params = {
            "visualFeatures": "Description",
            "details": "",
            "language": "en",
        };
        
        // Append all parameters to url string
        var url = new URL(uriBase);
        for (var key in params){
            url.searchParams.append(key, params[key]);
        }
        
        // Open request
        xhttp.open("POST", url, false); //false to sync/wait till request complete

        // Set Request headers for XMLHttpRequest
        xhttp.setRequestHeader("Content-Type", "application/json");
        xhttp.setRequestHeader("Ocp-Apim-Subscription-Key", subscriptionKey);

        // Send request with imageURL data
        xhttp.send(JSON.stringify(data));

        // If response is ready and request is successful/no errors
        if (xhttp.readyState === XMLHttpRequest.DONE && xhttp.status === 200) {
            var response = JSON.parse(xhttp.response);
            caption = response["description"]["captions"][0]["text"];
            console.log(caption);
            return caption;
        }
        // Display invalid URL for all remaining errors and highlight error 
        // in console with status code
        else{
            console.log("xhttp.readState:", xhttp.readyState);
            console.log("xhttp.status:", xhttp.status);
            return "Invalid URL!";
        }
    };

    // Block and block menu descriptions
    var descriptor = {
        // Block type, block name, function name
        blocks: [   
            ['r', 'Image url: %s', 'recogImageByURL', ''],
        ]
    };

    // Register the extension
    ScratchExtensions.register('Azure Computer Vision Extension', descriptor, ext);
})({});