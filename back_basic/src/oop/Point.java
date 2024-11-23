package oop;

public class Point {
	int x, y;

	void set(int x, int y) {
		this.x = x;
		this.y = y;
	}

	void showPoint() {
		System.out.printf("(%d,%d)", this.x, this.y);
	}
}
