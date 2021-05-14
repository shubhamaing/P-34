class Hero{
    constructor(x, y, width, height){
        var options={
            'frictionAir':0.005,
            'density':2
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.image = loadImage("images.png");
        World.add(world, this.body);
    }
    display(){
        push();
        translate(this.body.position.x, this.body.position.y);
        imageMode(CENTER)
        image(this.image, 0, 0,this.width, this.height);
        pop();
    }
}