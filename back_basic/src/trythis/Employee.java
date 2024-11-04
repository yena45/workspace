package trythis;

public class Employee {
	private int id;
	private String name;
	private int salary;
	private int percent;

	public Employee(int id, String name, int salary, int percent) {
		this.id = id;
		this.name = name;
		this.salary = salary;
		this.percent = percent;
	}

	public int getId() {
		return id;
	}

	public String getName() {
		return name;
	}

	public int getSalary() {
		return salary;
	}

	public int getPercent() {
		return percent;
	}

	public void setSalary(int salary) {
		this.salary = salary;
	}

	public int getAnnualSalary() {
		return salary * 12;
	}

	public int getRaiseSalary() {
		return salary * percent / 100;
	}

	public String toString() {
		return "Employee[id=%d, name=%s, salary=%d]의 연봉은 %d, 월급 인상분은 %d".formatted(id, name, salary,
			this.getAnnualSalary(), this.getRaiseSalary());

	}
}
