var Tree = function(type, onEnter, onExit){
    this.type = type;
    this.children = [];
    //probably dont need this only antlr does it to make an abstract syntax tree but i could
    //just interpret it directly
    //this.onEnter = onEnter;
    //this.onExit = onExit;
};

//Tree.prototype.walk = function(interpreter){
//    this.onEnter(interpreter);
//    for(var i = 0; i < this.children.length; i++){
//        if(this.children[i] instanceof Tree){
//            this.children[i].walk();
//        }
//    }
//    this.onExit(interpreter);
//    //return;
//};

module.exports = Tree;