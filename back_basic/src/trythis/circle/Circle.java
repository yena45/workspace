package trythis.circle;

public class Circle implements GeomericObject {
	private double radius = 1.0;

	public Circle(double radius) {
		this.radius = radius;
	}

	public double getRadius() {
		return radius;
	}

	public void setRadius(double radius) {
		this.radius = radius;
	}

	@Override
	public double getPerimeter() {
		return radius * 2 * Math.PI;
	}

	@Override
	public double getArea() {
		return radius * radius * Math.PI;
	}

	@Override
	public String toString() {
		return "Circle{" +
			"radius=" + radius +
			"}의 둘레는" + getPerimeter() + ", 면적은" + getArea();
	}

	public static void main(String[] args) {
		Circle circle = new Circle(2.0);
		System.out.println("circle = " + circle);
		Circle circle2 = new ResizableCircle(3.0);
		System.out.println("circle2 = " + circle2);
		((ResizableCircle)circle2).resize(10);
	}
}
