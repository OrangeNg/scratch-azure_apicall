const ArgumentType = require('../../extension-support/argument-type');
const BlockType = require('../../extension-support/block-type');
const formatMessage = require('format-message');

const blockIconURI = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48dGl0bGU+cGVuLWljb248L3RpdGxlPjxnIHN0cm9rZT0iIzU3NUU3NSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiPjxwYXRoIGQ9Ik04Ljc1MyAzNC42MDJsLTQuMjUgMS43OCAxLjc4My00LjIzN2MxLjIxOC0yLjg5MiAyLjkwNy01LjQyMyA1LjAzLTcuNTM4TDMxLjA2NiA0LjkzYy44NDYtLjg0MiAyLjY1LS40MSA0LjAzMi45NjcgMS4zOCAxLjM3NSAxLjgxNiAzLjE3My45NyA0LjAxNUwxNi4zMTggMjkuNTljLTIuMTIzIDIuMTE2LTQuNjY0IDMuOC03LjU2NSA1LjAxMiIgZmlsbD0iI0ZGRiIvPjxwYXRoIGQ9Ik0yOS40MSA2LjExcy00LjQ1LTIuMzc4LTguMjAyIDUuNzcyYy0xLjczNCAzLjc2Ni00LjM1IDEuNTQ2LTQuMzUgMS41NDYiLz48cGF0aCBkPSJNMzYuNDIgOC44MjVjMCAuNDYzLS4xNC44NzMtLjQzMiAxLjE2NGwtOS4zMzUgOS4zYy4yODItLjI5LjQxLS42NjguNDEtMS4xMiAwLS44NzQtLjUwNy0xLjk2My0xLjQwNi0yLjg2OC0xLjM2Mi0xLjM1OC0zLjE0Ny0xLjgtNC4wMDItLjk5TDMwLjk5IDUuMDFjLjg0NC0uODQgMi42NS0uNDEgNC4wMzUuOTYuODk4LjkwNCAxLjM5NiAxLjk4MiAxLjM5NiAyLjg1NU0xMC41MTUgMzMuNzc0Yy0uNTczLjMwMi0xLjE1Ny41Ny0xLjc2NC44M0w0LjUgMzYuMzgybDEuNzg2LTQuMjM1Yy4yNTgtLjYwNC41My0xLjE4Ni44MzMtMS43NTcuNjkuMTgzIDEuNDQ4LjYyNSAyLjEwOCAxLjI4Mi42Ni42NTggMS4xMDIgMS40MTIgMS4yODcgMi4xMDIiIGZpbGw9IiM0Qzk3RkYiLz48cGF0aCBkPSJNMzYuNDk4IDguNzQ4YzAgLjQ2NC0uMTQuODc0LS40MzMgMS4xNjVsLTE5Ljc0MiAxOS42OGMtMi4xMyAyLjExLTQuNjczIDMuNzkzLTcuNTcyIDUuMDFMNC41IDM2LjM4bC45NzQtMi4zMTYgMS45MjUtLjgwOGMyLjg5OC0xLjIxOCA1LjQ0LTIuOSA3LjU3LTUuMDFsMTkuNzQzLTE5LjY4Yy4yOTItLjI5Mi40MzItLjcwMi40MzItMS4xNjUgMC0uNjQ2LS4yNy0xLjQtLjc4LTIuMTIyLjI1LjE3Mi41LjM3Ny43MzcuNjE0Ljg5OC45MDUgMS4zOTYgMS45ODMgMS4zOTYgMi44NTYiIGZpbGw9IiM1NzVFNzUiIG9wYWNpdHk9Ii4xNSIvPjxwYXRoIGQ9Ik0xOC40NSAxMi44M2MwIC41LS40MDQuOTA1LS45MDQuOTA1cy0uOTA1LS40MDUtLjkwNS0uOTA0YzAtLjUuNDA3LS45MDMuOTA2LS45MDMuNSAwIC45MDQuNDA0LjkwNC45MDR6IiBmaWxsPSIjNTc1RTc1Ii8+PC9nPjwvc3ZnPg=='

class Scratch3ImageRecBlocks{
    constructor (runtime) {
        /**
         * The runtime instantiating this block package.
         * @type {Runtime}
         */
        this.runtime = runtime;
    }

    getInfo () {
        return {
            // The machine-readable name of this extension.
            id: 'imageRecExt',
    
            // The human-readable name of this extension as string.
            name: formatMessage({
                id: 'imageRecExt.name',
                default: 'Image Recognition',
                description: 'Label for the image recognition extension category'
            }),
    
            // Optional: URI for a block icon, to display at the edge of each block for this
            // extension. Data URI OK.
            blockIconURI: blockIconURI,
    
            // Optional: URI for an icon to be displayed in the blocks category menu.
            // Data URI OK.
            menuIconURI: blockIconURI,
    
            // Required: the list of blocks implemented by this extension,
            // in the order intended for display.
            blocks: [
                // Block that recognises image based on image URL provided
                {
                    // Required: the machine-readable name of this operation.
                    opcode: 'recogImageByURL', 
    
                    // Required: the kind of block we're defining
                    blockType: BlockType.REPORTER,
    
                    // Required: the human-readable text on this block, including argument
                    // placeholders.
                    text: formatMessage({
                        id: 'imageRecExt.recogImageByURL',
                        default: 'Image URL: [IMAGE_URL]',
                        description: 'Recognise image based on URL provided'
                    }),
    
                    // Required: Describe each argument.
                    arguments: {
                        // Required: the ID of the argument, which will be the name in the
                        // args object passed to the implementation function.
                        IMAGE_URL: {
                            // Required: type of the argument / shape of the block input
                            type: ArgumentType.STRING,
    
                            // Optional: the default value of the argument
                            defaultValue: ''
                        }
                    }
                }
            ]
    
        };
    }

    recogImagebyURL(args){
    
        var imageURL = args.IMAGE_URL;
    
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
            // Takes in caption returned from API call
            caption = response["description"]["captions"][0]["text"];
            console.log(caption);
            // Displays caption
            return caption;
        }
        // Display invalid URL for all remaining errors and highlight error 
        // in console with status code
        else{
            console.log("xhttp.readState:", xhttp.readyState);
            console.log("xhttp.status:", xhttp.status);
            return "Invalid URL!";
        }
    }
}

module.exports = Scratch3ImageRecBlocks;
