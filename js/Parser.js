var Tree = require("./Tree");

var Parser = function(){
    this.rules = [];
    this.types = [];
};

Parser.prototype.parse = function(sentence){
    var position = 0;
    //states is a stack of pointers to currentstate
    var stateStack = [this.rules[0]];//maybe stack of rules
    var treeStack = [new Tree("brackets")];

    while(position < sentence.length){
        var next = stateStack.top().next(sentence[position],stateStack,treeStack,this.rules,this.types);
        //raising and lowering is done in the next method?
        if(next != null){
            stateStack[stateStack.length - 1] = next;//waarschijnlijk overbodig
            treeStack.top().children.push(sentence[position]);
            position++;
        }else{
            console.log("error at position:" + position);
            return treeStack[0]
        }
    }



    return treeStack[0];
};

Parser.prototype.addRule = function(rule, type){
    this.rules.push(rule);
    this.types.push(type)
};



module.exports = Parser;