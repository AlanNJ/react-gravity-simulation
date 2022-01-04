import React from "react";
import { useState, useRef, useEffect } from "react";

export const Canvas = ({ gravity, friction, balls }) => {
	const canvasRef = useRef(null);

	useEffect(() => {
		move();
	}, [gravity, friction, balls]);
	const move = () => {
		var cont = document.querySelector(".canvas-container");
		const canvas = canvasRef.current;
		const ctx = canvas.getContext("2d");

		canvas.height = cont.clientHeight;
		canvas.width = cont.clientWidth;
		var dx = 1;
		var dy = 1;
		const grav = gravity;
		const fric = friction;
		const ball = balls;

		function Ball(x, y, radius, dx, dy) {
			this.x = x;
			this.y = y;
			this.radius = radius;
			this.dy = dy;
			this.dx = dx;

			this.draw = function () {
				ctx.beginPath();

				ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
				ctx.fill();
				ctx.fillStyle = getRandomColor();
				ctx.stroke();
			};
			this.play = function () {
				if (this.y > cont.clientHeight - this.radius - this.dy) {
					this.dy = -this.dy * fric;
					this.dx = this.dx * fric;
				} else {
					this.dy += grav;
				}

				if (
					this.x + this.radius >= cont.clientWidth ||
					this.x - this.radius <= 0
				) {
					this.dx = -this.dx * fric;
				}
				this.y += this.dy;
				this.x += this.dx;
				this.draw();
			};
		}
		var ballArray = [];
		function createMotion() {
			ballArray = [];
			for (var i = 0; i < ball; i++) {
				var x = Math.random() * (cont.clientWidth - 2 * radius) + radius;

				var radius = Math.random() * 30 + 1;
				var y = Math.random() * (cont.clientHeight - 5 * radius);
				var dx = Math.random() - 0.5;
				var dy = (Math.random() - 0.5) * 0.1;
				const ball = new Ball(x, y, radius, dx, dy);
				ballArray.push(ball);
			}
		}

		const animate = () => {
			requestAnimationFrame(animate);
			ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
			for (var i = 0; i < ballArray.length; i++) {
				ballArray[i].play();
			}
		};
		window.addEventListener("resize", () => {
			canvas.width = cont.clientWidth;
			canvas.height = cont.clientHeight;

			createMotion();
		});
		animate();

		createMotion();
		function getRandomColor() {
			var letters = "0123456789ABCDEF";
			var color = "#";
			for (var i = 0; i < 6; i++) {
				color += letters[Math.floor(Math.random() * 16)];
			}
			return color;
		}
	};

	return (
		<div className="canvas-container">
			<canvas ref={canvasRef} />
		</div>
	);
};

export default Canvas;
