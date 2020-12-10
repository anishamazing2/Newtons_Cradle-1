class Bob
{
	constructor(x, y, radius)
	{
		var options =
		{
			isStatic: false,
			friction: 0,
			frictionAir:0.05
		}
		this.x = x;
		this.y = y;
		this.radius = radius;
		
		this.body = Bodies.circle(this.x, this.y, (this.radius) / 2, options);
		World.add(world, this.body);

	}

	display()
	{
		var pos = this.body.position;		

		push();
		translate(pos.x, pos.y);
		fill("yellow");
		ellipseMode(RADIUS);
		ellipse(0, 0, (this.radius)/2, (this.radius)/2);
		pop();
	}
}