var snack =function(){
    this.game =game ;
    this.dots=[];
    this.direction='right';


    this.init =function(){
        this.createDots()
    }

    this.createDots = function(){
  
        var newDot = new dot(this.game, 0, 0);
        newDot.init();
        this.dots.push(newDot);

        var newDot2 =new dot(this.game , 0 , 1);
        newDot2.init();
        this.dots.push(newDot2);

        var newDot3 =new dot(this.game,0,2);
        newDot3.init();
        this.dots.push(newDot3);
        
        
    }

    this.go =function(){
        
    }

    this.draw =function(){
        this.dots.forEach(function(dot){
            dot.draw();
        });   
    }
}