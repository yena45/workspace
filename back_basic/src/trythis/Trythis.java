package trythis;

import java.util.Scanner;

public class Trythis {
	private static String accountId;
	private static String name;
	private static int amount;

	public static void main(String[] args) {
		Circle circle1 = new Circle();
		System.out.println("circle1 = " + circle1);
		Circle circle2 = new Circle(2);
		System.out.println("circle2 = " + circle2);

		Rectangle rectangle1 = new Rectangle();
		System.out.println("rectangle1 = " + rectangle1);
		Rectangle rectangle2 = new Rectangle(2, 3);
		System.out.println("rectangle2 = " + rectangle2);

		Employee employee1 = new Employee(1, "kim", 25000000, 10);
		System.out.println("employee1 = " + employee1);
		Employee employee2 = new Employee(2, "lee", 36000000, 20);
		System.out.println("employee2 = " + employee2);

		while (true) {
			Scanner sc = new Scanner(System.in);
			System.out.println("계좌 번호를 입력해주세요");
			accountId = sc.next();
			System.out.println("성함을 입력해주세요");
			name = sc.next();
			System.out.println("금액을 입력해주세요");
			amount = Integer.parseInt(sc.next());

			Account account = new Account(accountId, name, amount);

			System.out.println("입금은 1번, 출금은 2번, 송금은 3번을 눌러주세요.");
			int num1 = Integer.parseInt(sc.next());
			switch (num1) {
				case 1:
					account.deposit(amount);
					break;
				case 2:
					account.withdraw(amount);
					break;
				case 3:
					System.out.println("계좌 번호를 입력해주세요");
					String AnotherAccountId = sc.next();
					System.out.println("성함을 입력해주세요");
					String anotherName = sc.next();
					System.out.println("금액을 입력해주세요");
					int anotherAmount = Integer.parseInt(sc.next());

					Account anotherAccount = new Account(AnotherAccountId, anotherName, anotherAmount);

					System.out.println("송금 금액을 입력해주세요");
					int anotherTransferAmount = Integer.parseInt(sc.next());

					account.transferTo(anotherAccount, anotherTransferAmount);

					System.out.println("내 계좌 정보는 " + account);
					System.out.println("상대 계좌 정보는 " + anotherAccount);
					break;

			}
		}

	}
}
