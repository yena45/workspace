package trythis.shape;

public class Circle extends Shape {
	private double radius = 1.0;
	private String color = "red";

	public Circle(double radius) {
		this.radius = radius;
		this.color = "red";
	}

	public Circle() {
		this(1.0);
	}

	public double getRadius() {
		return radius;
	}

	public void setRadius(double radius) {
		this.radius = radius;
	}

	public double getArea() {
		return Math.PI * radius * radius;
	}

	public double getCircumference() {
		return 2 * Math.PI * radius;
	}

	public String toString() {
		return "Circle[radius=%s]의 둘레는 %.1f, 면적은 %.1f".formatted(radius, this.getCircumference(), this.getArea());
	}

	@Override
	double calArea() {
		return getArea();
	}

}
