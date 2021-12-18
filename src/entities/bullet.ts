import { Vector2 } from "../math/vector";
import { Transform } from "../components/transform";
import { Direction } from "../components/direction";

export class Bullet {
	transform: Transform;
	vel: Vector2;
	dir: Direction;
	speed: number;
	texture: HTMLImageElement;
	ttl: number;

	constructor(x: number, y: number, dir: Direction) {
		this.transform = new Transform(x, y, 50, 50);
		this.vel = new Vector2(0, 0);
		this.dir = dir;
		this.speed = 10;
		this.texture = new Image();
		this.texture.src = "assets/img/b.png";
		this.ttl = 6;

		switch (dir) {
			case Direction.Up:
				this.vel.y -= this.speed;
				break;
			case Direction.Down:
				this.vel.y += this.speed;
				break;
			case Direction.Left:
				this.vel.x -= this.speed;
				break;
			case Direction.Right:
				this.vel.x += this.speed;
				break;
		}
	}

	update() {
		this.transform.position.x += this.vel.x;
		this.transform.position.y += this.vel.y;
		this.ttl -= 0.016;
	}

	draw(ctx: CanvasRenderingContext2D) {
		ctx.drawImage(
			this.texture,
			this.transform.position.x,
			this.transform.position.y,
			this.transform.size.x,
			this.transform.size.y
		);
	}
}
