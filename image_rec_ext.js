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

    ext.recogImageByURL = function(imageURL) {
        if(imageURL == ""){
            return "Please enter a URL!";
        }
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