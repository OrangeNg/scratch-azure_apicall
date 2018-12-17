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

    // Function for image url block
    ext.recogImageByURL = function(imageURL) {
        
        // If no URL entered, return warning message
        if(imageURL == ""){
            return "Please enter a URL!";
        }

        // If imageURL passes input checks
        var xhttp = new XMLHttpRequest();

        // Replace with valid subscription key accordingly
        var subscriptionKey = "34fcc5cc47cf4db293f50f9ce74c5004";

        // You must use the same Azure region in your REST API method as you used to
        // get your subscription keys.
        var uriBase =
            "https://southeastasia.api.cognitive.microsoft.com/vision/v2.0/analyze";

        // Data containing image URL to send in POST request
        var data =  '{"url": ' + '"' + imageUrl + '"}'

        // Request parameters.
        // Ref: https://westus.dev.cognitive.microsoft.com/docs/services/5adf991815e1060e6355ad44/operations/56f91f2e778daf14a499e1fa
        var params = {
            "visualFeatures": "Description, Tags",
            "details": "",
            "language": "en",
        };

        xhttp.open("POST", '')

        // Set Request headers for XMLHttpRequest
        xhttp.setRequestHeader("Content-Type", "application/json");
        xhttp.setRequestHeader("Ocp-Apim-Subscription-Key", subscriptionKey);

        return imageURL;
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