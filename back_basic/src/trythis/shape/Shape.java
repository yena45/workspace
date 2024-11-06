package trythis.shape;

import java.math.BigDecimal;

abstract class Shape {

	abstract double calArea();

	public static void main(String[] args) {
		Shape circle = new Circle(5.0);
		System.out.println(circle.calArea());

		Shape rectangle = new Rectangle(3.0, 4.0);
		System.out.println(rectangle.calArea());

		Shape circle2 = new Circle(1.0);
		System.out.println(circle2.calArea());

		((Rectangle)rectangle).resize(10);
		System.out.println(rectangle.calArea());

		Shape[] shapes = {new Circle(10), new Rectangle(4, 3)};

		BigDecimal totalArea = BigDecimal.valueOf(0);
		for (Shape shape : shapes) {
			System.out.println(shape.calArea());

			totalArea = totalArea.add(BigDecimal.valueOf(shape.calArea()));
		}

		System.out.println("ddd" + totalArea);
	}
}
