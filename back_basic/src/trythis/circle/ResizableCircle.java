package trythis.circle;

public class ResizableCircle extends Circle implements Resizable {
	public ResizableCircle(double radius) {
		super(radius);
	}

	@Override
	public void resize(int percent) {
		setRadius(getRadius() + getRadius() * percent / 100);
	}

	@Override
	public String toString() {
		return "ResizableCircle{" +
			"radius=" + getRadius() +
			"}의 둘레는" + getPerimeter() + ", 면적은" + getArea();
	}
}
