package trythis.shape;

import trythis.circle.Resizable;

public class Rectangle extends Shape implements Resizable {
	private double length = 1.0;
	private double width = 1.0;

	public Rectangle() {
		this(1.0, 1.0);
	}

	public Rectangle(double length, double width) {
		this.length = length;
		this.width = width;
	}

	public double getLength() {
		return length;
	}

	public void setLength(double length) {
		this.length = length;
	}

	public double getWidth() {
		return width;
	}

	public void setWidth(double width) {
		this.width = width;
	}

	public double getArea() {
		return length * width;
	}

	public double getPerimeter() {
		return 2 * (length + width);
	}

	public String toString() {
		return "Rectangle[length=%s, width=%s]의 둘레는 %.1f, 면적은 %.1f".formatted(length, width, this.getPerimeter(),
			this.getArea());
	}

	@Override
	public void resize(int percent) {
		setLength(length + length * percent / 100);
	}

	@Override
	double calArea() {
		return getArea();
	}
}
