const DOT_SIZE =20;
var dot = function(game , row , col){
    this.game =game ;
    this.row= row;
    this.col = col;
    this.init = function(){

    }

    this.draw = function(){
        console.log()
        this.game.context.fillStyle='#FFFFFF';
        this.game.context.fillRect(col * DOT_SIZE , row * DOT_SIZE , DOT_SIZE , DOT_SIZE);
    }
}