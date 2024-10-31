package com.hana.greetings;

import java.util.Scanner;

public class Hi {
	public static void main(String[] args) {
		gradeSwitch();
		playSwitch();
	}

	private static void playSwitch() {
		Scanner sc = new Scanner(System.in);
		System.out.print("학점을 입력하세요 -->> ");
		String grade = sc.next();
		switch (grade) {
			case "A", "B" -> System.out.println("참 잘했음");
			case "C", "D" -> System.out.println("좀 더 노력하시길");
			case "F" -> System.out.println("다음 학기에 다시 만나요");
		}
	}

	private static void gradeSwitch() {
		Scanner sc = new Scanner(System.in);
		System.out.print("점수를 입력하세요 -->> ");
		int score = sc.nextInt();

		switch (score / 10) {
			case 10, 9 -> System.out.println(" A ");
			case 8 -> System.out.println(" B ");
			case 7 -> System.out.println(" C ");
			case 6 -> System.out.println(" D ");
			default -> System.out.println(" F ");
		}
	}
}
