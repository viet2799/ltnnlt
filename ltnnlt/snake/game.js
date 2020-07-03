class game{
	constructor() {
		this.canvas = null;
		this.context = null;
		// this.socket = null;
		this.init();
		this.loop();
	}

	

	init() {
		this.canvas = document.createElement('canvas');
		this.context = this.canvas.getContext('2d');
		this.canvas.width = 400;
		this.canvas.height = 400;
		document.getElementById('game').appendChild(this.canvas);
		this.snake = new snake(this);
		this.food = new food(this);
		//craete socket 
		// this.socket = io('http://localhost:3000');
		// this.listenServer();


		
	}
	loop() {
		this.update();
		this.draw();
		setTimeout(() => this.loop(), 60);
	}

	update() {
		this.snake.update();
		if(this.snake.eat(this.food.x, this.food.y)){
			this.food.update();
		}
	}

	draw() {
		this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
		this.snake.draw();
		this.food.draw();
	}
	
}

var g = new game();