package trythis;

import java.util.Scanner;

public class Students {
	public static void main(String[] args) {
		System.out.println("학생수를 입력하세요 ");
		Scanner sc = new Scanner(System.in);
		int studentNum = sc.nextInt();
		int[] score = new int[studentNum];

		for (int i = 0; i < studentNum; i++) {
			System.out.println(i + "번 학생의 점수를 입력하세요");
			score[i] = sc.nextInt();
		}

		System.out.printf("%d명의 학생 성적은 다음과 같습니다", studentNum);
		for (int i = 0; i < studentNum; i++) {
			System.out.printf(String.valueOf(score[i]));
		}

		for (int i = 0; i < studentNum; i++) {
			System.out.printf("%d번 학생의 등급은 %s입니다", i, getGrade(score[i]));
			System.out.println("");

		}
	}

	private static String getGrade(int score) {
		String grade = "";
		switch (score / 10) {
			case 10, 9 -> grade = " A ";
			case 8 -> grade = " B ";
			case 7 -> grade = " C ";
			case 6 -> grade = " D ";
			default -> grade = " F ";
		}

		return grade;
	}
}
