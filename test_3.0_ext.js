var MyExtension = function () {
};

MyExtension.prototype.getInfo = function () {
    // Object to return 
    return {
        id: 'test_ext',
        name: 'test',
        blocks: [
            {
                opcode: 'testBlock',
                blockType: 'reporter',
                text: 'tester block',
                func: "test_func"
            }
        ]
    }
}
    
MyExtension.prototype.test_func = function (args) {
    return 'text string';
}

Scratch.extensions.register(new MyExtension());