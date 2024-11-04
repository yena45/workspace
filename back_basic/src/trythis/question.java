package trythis;

import java.util.Scanner;

public class question {

	public static void main(String[] args) {
		scanUserInfo();
	}

	public static void scanUserInfo() {
		Scanner scan = new Scanner(System.in);
		System.out.print("이름을 입력하세요 --> ");
		String name = scan.next();

		System.out.print("주소를 입력하세요 --> ");
		String addr = scan.next();

		System.out.print("나이를 입력하세요 --> ");
		int age = scan.nextInt();

		System.out.print("키를 입력하세요 --> ");
		String height = scan.next();

		System.out.println("이름 = " + name);
		System.out.println("주소 = " + addr);
		System.out.println("나이 = " + age);
		System.out.println("키 = " + height);
	}
}
