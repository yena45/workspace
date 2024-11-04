package trythis;

public class Account {

	private String id;
	private String name;
	private int balance = 0;

	public Account() {
		this.balance = 0;
	}

	public Account(String name, String id) {
		this.name = name;
		this.id = id;
	}

	public Account(String id, String name, int balance) {
		this.id = id;
		this.name = name;
		this.balance = balance;
	}

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public int getBalance() {
		return balance;
	}

	public void setBalance(int balance) {
		this.balance = balance;
	}

	public int deposit(int amount) {
		balance = amount + balance;
		System.out.printf("%s님이 %d원을 입금하였음 \n", name, amount);
		return balance;
	}

	public int withdraw(int amount) {
		if (amount <= balance) {
			balance = balance - amount;
			System.out.printf("%s님이 %d원을 출금하였음 \n", name, amount);
		} else {
			System.out.println("잔액 부족");
		}

		return balance;
	}

	public int transferTo(Account another, int amount) {
		if (amount <= balance) {
			balance = balance - amount;
			another.balance = amount + another.balance;
			System.out.printf("%s님이 %s님에게 %d원을 송금하였음 \n", name, another.name, amount);
		} else {
			System.out.printf("%s님이 %s에게 %d원 송금 시도\n", name, another.name, amount);
			System.out.println("송금액이 잔액 초과");
		}
		return balance;
	}

	public String toString() {
		return "Account[id=%s,name=%s,balance=%d]".formatted(id, name, balance);
	}

	// private final int accountNo;
	// private final String name;
	// private double balance;
	//
	// public static void main(String[] args) {
	// 	Scanner sc = new Scanner(System.in);
	// 	System.out.print("계좌번호: ");
	// 	int accountNo = Integer.parseInt(sc.nextLine());
	// 	System.out.print("예금주: ");
	// 	String name = sc.nextLine();
	// 	System.out.print("잔액: ");
	// 	double balance = Double.parseDouble(sc.nextLine());
	//
	// 	Account account = new Account(accountNo, name, balance);
	//
	// 	while (true) {
	// 		System.out.println("입금은 +, 출금은 -를 입력해주세요");
	// 		String input = sc.nextLine();
	//
	// 		switch (input) {
	// 			case "+" -> {
	// 				System.out.print("입금 금액?");
	// 				double amount = sc.nextDouble();
	// 				sc.nextLine();
	// 				account.deposit(amount);
	// 			}
	// 			case "-" -> {
	// 				System.out.print("출금 금액?");
	// 				double amount = sc.nextDouble();
	// 				sc.nextLine();
	// 				account.withdraw(amount);
	// 			}
	// 			default -> {
	// 				break;
	// 			}
	// 		}
	// 	}
	// }
	//
	// public Account(int accountNo, String name, double balance) {
	// 	this.accountNo = accountNo;
	// 	this.name = name;
	// 	this.balance = balance;
	// }
	//
	// public void deposit(double amnt) {
	// 	this.balance += amnt;
	// 	System.out.println(amnt + "원이 입금되었습니다.");
	// 	checkBalance();
	// }
	//
	// public void withdraw(double amnt) {
	// 	this.balance -= amnt;
	// 	System.out.println(amnt + "원이 출금되었습니다.");
	// 	checkBalance();
	// }
	//
	// public void checkBalance() {
	// 	System.out.println("잔액은 " + this.balance + "원입니다.");
	// }
	//
	// public void display() {
	// 	System.out.printf("계좌번호:" + this.accountNo + "%n" + "예금주:" + this.name + "%n" + "잔액:" + this.balance + "원");
	// }
}
