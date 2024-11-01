package trythis;

import java.util.Scanner;

public class Account {
	private final int accountNo;
	private final String name;
	private double balance;

	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		System.out.print("계좌번호: ");
		int accountNo = Integer.parseInt(sc.nextLine());
		System.out.print("예금주: ");
		String name = sc.nextLine();
		System.out.print("잔액: ");
		double balance = Double.parseDouble(sc.nextLine());

		Account account = new Account(accountNo, name, balance);

		while (true) {
			System.out.println("입금은 +, 출금은 -를 입력해주세요");
			String input = sc.nextLine();

			switch (input) {
				case "+" -> {
					System.out.print("입금 금액?");
					double amount = sc.nextDouble();
					sc.nextLine();
					account.deposit(amount);
				}
				case "-" -> {
					System.out.print("출금 금액?");
					double amount = sc.nextDouble();
					sc.nextLine();
					account.withdraw(amount);
				}
				default -> {
					break;
				}
			}
		}
	}

	public Account(int accountNo, String name, double balance) {
		this.accountNo = accountNo;
		this.name = name;
		this.balance = balance;
	}

	public void deposit(double amnt) {
		balance += amnt;
		System.out.println(amnt + "원이 입금되었습니다.");
		checkBalance();
	}

	public void withdraw(double amnt) {
		balance -= amnt;
		System.out.println(amnt + "원이 출금되었습니다.");
		checkBalance();
	}

	public void checkBalance() {
		System.out.println("잔액은 " + balance + "원입니다.");
	}

	public void display() {
		System.out.printf("계좌번호:" + accountNo + "%n" + "예금주:" + name + "%n" + "잔액:" + balance + "원");
	}
}
